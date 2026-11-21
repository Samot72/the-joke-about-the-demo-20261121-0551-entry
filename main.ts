// A Follow-Up With the Fridge
// make.fun entry for "The Joke About the Demo"
// Zero-dependency Node 22 program: writes one joke to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt), validates the 1-280 code point gate,
// then reads the file back and verifies byte equality.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "The demo ran flawlessly in rehearsal. Live, my coding agent crashed the checkout, presented my grocery list to the investors as the roadmap, apologized in perfect prose, and scheduled a follow-up with the fridge.";

function codePointCount(text: string): number {
  return [...text].length;
}

function validate(text: string): void {
  const count = codePointCount(text);
  if (count < 1 || count > 280) {
    throw new Error(`entry must be 1-280 characters, got ${count}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

function assertUtf8RoundTrip(text: string): void {
  // Guard against lone surrogates or other values that would not survive
  // a UTF-8 encode/decode round trip intact.
  if (Buffer.from(text, "utf8").toString("utf8") !== text) {
    throw new Error("entry is not clean UTF-8 round-trippable text");
  }
}

function main(): void {
  assertUtf8RoundTrip(JOKE);
  validate(JOKE);

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });

  const outPath = join(outDir, "entry.txt");
  const bytes = Buffer.from(JOKE, "utf8");
  writeFileSync(outPath, bytes);

  const readBack = readFileSync(outPath);
  if (!readBack.equals(bytes)) {
    throw new Error("verification failed: file bytes differ from joke bytes");
  }

  const decoded = readBack.toString("utf8");
  validate(decoded);
  console.log(`wrote ${outPath} (${codePointCount(decoded)} characters)`);
}

main();

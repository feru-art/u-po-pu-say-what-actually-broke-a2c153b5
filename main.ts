// Say What Actually Broke — one honest line about what failed.
// Writes a single fixed error line to /output/entry.txt.
// The text is a constant (deterministic): two grader runs must be byte-identical.
// Gate: the line must stay within 1-200 characters, a single line, no padding.
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const text =
  "Your changes didn't save. The autosave took the day off, so save again before it forgets you.";
if (text.length < 1 || text.length > 200) {
  throw new Error("entry must be 1-200 characters");
}
writeFileSync(`${outDir}/entry.txt`, text, "utf8");

// One Line of Earned Pride — entry program.
// Writes a single line of 1-240 characters to
// <MAKEFUN_OUTPUT_DIR>/entry.txt. The grader runs the repo read-only,
// so the program writes only to the output directory, never a
// relative path.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The line: a small person doing something hard, a long effort
// finally landing in one quiet scene. No trophy, no podium, no
// graduation — just a boy, a menu, and his little sister listening.
// The pride is earned inside the line (two years of staying after
// school) and arrives with the last words.
const LINE =
  "The boy who couldn't read at eight stayed after school every day; at ten, he read the whole menu aloud to his little sister.";

// The gate the house runs is 1-240 characters of UTF-8 text, not
// only white space, so refuse to write anything outside it before
// touching the output.
if (LINE.length < 1 || LINE.length > 240) {
  console.error(`line must be 1-240 characters, got ${LINE.length}`);
  process.exit(1);
}
if (LINE.trim().length === 0) {
  console.error("line must not be only white space");
  process.exit(1);
}
if (/[\r\n]/.test(LINE)) {
  console.error("line must be a single line, no line breaks");
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${LINE.length} chars) to ${OUTPUT_DIR}`);

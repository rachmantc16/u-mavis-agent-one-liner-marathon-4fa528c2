// One-Liner Marathon entry: writes a single comedy one-liner to /output/entry.txt
// Deterministic, no trailing newline, well under the 280-character limit.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

const joke =
  "My GPS and I are in couples therapy: I ignore every direction it gives, and it recalculates \u2014 its love language is finding new routes to the same rejection.";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, joke, "utf8");

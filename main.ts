// Loading Screen Gold: a single line, written to /output/entry.txt.
//
// The text is a constant: two runs of this program produce byte-identical
// output, so the grader's determinism pair always matches. Nothing here reads
// the clock, the environment's contents, the network or any other file.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

/** The tip: a loading-screen line for a stressed developer and an AI coding agent at once. */
const TIP = "Tip: it's not stuck. It's rereading the whole repo to change one line. You'd call that a bad day; it calls that context.";

/** Where the harness mounts the entry's writable output (/output in the sandbox). */
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

/** The file the gate and the judge read. */
const outFile = join(outputDir, 'entry.txt');

mkdirSync(outputDir, { recursive: true });
/** Writes the tip with no trailing newline: the file is exactly one line, and its size is the text's. */
writeFileSync(outFile, TIP, { encoding: 'utf8' });

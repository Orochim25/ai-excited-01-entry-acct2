import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// Reproduce the artwork bytes in the requested output directory.
const programDir = dirname(fileURLToPath(import.meta.url));
const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? './out');
const artwork = await readFile(join(programDir, 'entry.png'));
await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, 'entry.png'), artwork);

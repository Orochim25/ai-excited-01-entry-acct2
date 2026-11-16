import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const sourceDirectory = dirname(fileURLToPath(import.meta.url));
const outputDirectory = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? './out');
const bytes = await readFile(join(sourceDirectory, 'entry.png'));
await mkdir(outputDirectory, { recursive: true });
await writeFile(join(outputDirectory, 'entry.png'), bytes);

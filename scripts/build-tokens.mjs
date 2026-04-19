import { mkdir, copyFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourceFile = resolve(root, 'packages/tokens/src/themes.css');
const destinationFile = resolve(root, 'packages/tokens/dist/themes.css');

await mkdir(dirname(destinationFile), { recursive: true });
await copyFile(sourceFile, destinationFile);

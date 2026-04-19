import { mkdir, copyFile } from 'node:fs/promises';
import { dirname, resolve, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourceFiles = [
  resolve(root, 'packages/tokens/src/themes.css'),
  resolve(root, 'packages/tokens/src/light.css'),
  resolve(root, 'packages/tokens/src/dark.css')
];
const destinationDir = resolve(root, 'packages/tokens/dist');

await mkdir(destinationDir, { recursive: true });
await Promise.all(
  sourceFiles.map(async (sourceFile) => {
    const destinationFile = resolve(destinationDir, basename(sourceFile));
    await copyFile(sourceFile, destinationFile);
  })
);

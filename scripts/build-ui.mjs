import { mkdir, readFile, writeFile, copyFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourceIndex = resolve(root, 'packages/ui/src/index.ts');
const sourceStyles = resolve(root, 'packages/ui/src/styles.css');
const destinationDir = resolve(root, 'packages/ui/dist');
const targetIndex = resolve(destinationDir, 'index.js');
const targetStyles = resolve(destinationDir, 'styles.css');

await mkdir(destinationDir, { recursive: true });

const sourceCode = await readFile(sourceIndex, 'utf8');
const transpiled = ts.transpileModule(sourceCode, {
  compilerOptions: {
    target: ts.ScriptTarget.ES2020,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.NodeJs,
    esModuleInterop: true,
    allowSyntheticDefaultImports: true,
    jsx: ts.JsxEmit.Preserve
  }
});

await writeFile(targetIndex, transpiled.outputText, 'utf8');
await copyFile(sourceStyles, targetStyles);

import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, extname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { optimize } from 'svgo';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const iconConfig = {
  multipass: true,
  plugins: [
    'preset-default',
    'removeDimensions',
    {
      name: 'convertColors',
      params: { currentColor: true }
    }
  ]
};

const logoConfig = {
  multipass: true,
  plugins: [
    'preset-default',
    'removeDimensions'
  ]
};

async function buildSet(sourceDir, destinationDir, config) {
  await mkdir(destinationDir, { recursive: true });
  const entries = await readdir(sourceDir, { withFileTypes: true });

  await Promise.all(
    entries
      .filter((entry) => entry.isFile() && extname(entry.name) === '.svg')
      .map(async (entry) => {
        const sourcePath = resolve(sourceDir, entry.name);
        const destinationPath = resolve(destinationDir, entry.name);
        const svg = await readFile(sourcePath, 'utf8');
        const result = optimize(svg, { path: sourcePath, ...config });
        await writeFile(destinationPath, result.data, 'utf8');
      })
  );
}

await buildSet(
  resolve(root, 'packages/icons/src/icons'),
  resolve(root, 'packages/icons/dist/icons'),
  iconConfig
);

await buildSet(
  resolve(root, 'packages/icons/src/logos'),
  resolve(root, 'packages/icons/dist/logos'),
  logoConfig
);

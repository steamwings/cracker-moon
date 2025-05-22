import { analyzeMetafile, build } from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';
import { copy } from 'esbuild-plugin-copy';
import { replace } from 'esbuild-plugin-replace';
import { createWriteStream, renameSync, writeFileSync } from 'fs';
import archiver from 'archiver';

import PACKAGE from './package.json' with { type: 'json' };
const version = PACKAGE.version;

const zipOutput = (outputDir, zipFileName) => {
  const output = createWriteStream(zipFileName);
  const archive = archiver('zip', { zlib: { level: 9 } });

  output.on('close', () => {
    console.log(`Zipped ${archive.pointer()} total bytes to ${zipFileName}`);
    renameSync('./latest.zip', `${outputDir}/latest.zip`);
  });

  archive.on('error', (err) => {
    throw err;
  });

  archive.pipe(output);
  archive.directory(outputDir, false); // Add the entire directory
  archive.finalize();
};

let result = await build({
  entryPoints: [
    './src/index.tsx',
    './src/demo/demo.tsx'
  ],
  bundle: true,
  metafile: true,
  minify: true,
  sourcemap: true,
  target: 'es6', // Adjust based on your browser support
  outdir: './dist',
  alias: {
    react: "preact/compat",
    'react-dom': "preact/compat",
    "react/jsx-runtime": "preact/jsx-runtime"
  },
  plugins: [
    sassPlugin(),
    copy({
      assets: {
        from: './public/*',
        to: '.',
      },
    }),
    replace({
      values: {
        $VERSION$: version,
      },
    }),
  ]
});

zipOutput('./dist', 'latest.zip')
writeFileSync('./dist/meta.json', JSON.stringify(result.metafile))

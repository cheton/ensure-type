import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';

const isExternal = id => !id.startsWith('.') && !id.startsWith('/');

export default [
  {
    input: path.resolve(__dirname, 'src/index.js'),
    output: {
      file: path.resolve(__dirname, `dist/cjs/index.js`),
      format: 'cjs',
    },
    external: isExternal,
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**',
      }),
    ],
  },
  {
    input: path.resolve(__dirname, 'src/index.js'),
    output: {
      file: path.resolve(__dirname, `dist/esm/index.js`),
      format: 'esm',
    },
    external: isExternal,
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**',
      }),
    ],
  }
];

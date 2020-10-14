import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const isExternal = id => !id.startsWith('.') && !id.startsWith('/');

export default [
  {
    input: 'src/index.js',
    output: {
      file: pkg.main,
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
    input: 'src/index.js',
    output: {
      file: pkg.module,
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

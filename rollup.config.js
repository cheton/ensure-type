import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';

const isExternal = id => !id.startsWith('.') && !id.startsWith('/');

const getBabelOptions = ({ useESModules }) => ({
  rootMode: 'upward',
  exclude: '**/node_modules/**',
  runtimeHelpers: true,
  plugins: [
    ['@babel/plugin-transform-runtime', { useESModules }],
  ],
});

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
      babel(getBabelOptions({ useESModules: false })),
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
      babel(getBabelOptions({ useESModules: true })),
    ],
  }
];

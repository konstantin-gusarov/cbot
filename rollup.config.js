import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import visualizer from 'rollup-plugin-visualizer';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'build/index.js',
      format: 'cjs',
    },
    {
      file: 'build/index.min.js',
      format: 'cjs',
      plugins: [terser()],
    },
  ],
  external: [...Object.keys(pkg.dependencies || {})],
  plugins: [resolve(), commonjs(), typescript(), visualizer()],
};

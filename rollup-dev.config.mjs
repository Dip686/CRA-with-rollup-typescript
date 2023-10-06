import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.tsx',
    output: [
      {
        file: 'dist/iife/index.js',
        format: 'iife',
        sourcemap: true
      },
      {
          file: packageJson.main,
          format: 'cjs',
          sourcemap: true,
          name: 'react-lib'
      },
      {
          file: packageJson.module,
          format: 'esm',
          sourcemap: true
      }
    ],
    plugins: [
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        browser: true, // To resolve browser-specific imports
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify( 'development' )
      }),
      commonjs(),
      babel({
        presets: ["@babel/preset-react"]
      }),
      typescript({ tsconfig: './tsconfig.json' }),
      image(),
      postcss({
        extensions: [".css"],
      }),
      terser(),
      serve({
        open: true,
        verbose: true,
        contentBase: [""],
        host: "localhost",
        port: 3000,
      }),
      livereload({ watch: "dist" }),
    ]
  }
];
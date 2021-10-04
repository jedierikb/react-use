import babel from '@rollup/plugin-babel';
import {
  terser
} from 'rollup-plugin-terser';
import pkg from './package.json';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';

export default [
  {
    input: 'esm/exports',
    output: {
      file: 'docs/react-use.js',
      format: 'esm'
    },
    plugins: [
      resolve(),
      babel({
        "exclude": 'node_modules/**',
        "babelHelpers": "bundled",
        "presets": [
          "@babel/preset-env"
        ]
      }),
      terser()
    ],
    external: [
      'react'
    ]
  },
];
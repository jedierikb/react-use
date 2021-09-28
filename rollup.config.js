import babel from '@rollup/plugin-babel';
import {
  terser
} from 'rollup-plugin-terser';
import pkg from './package.json';

export default [
  {
    input: pkg.module,
    output: {
      file: 'docs/react-use.js',
      format: 'esm'
    },
    plugins: [
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
      'react',
      'react-dom'
    ]
  },
];
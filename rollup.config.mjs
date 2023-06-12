import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import packageJson from './package.json' assert { type: 'json' };
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { visualizer } from 'rollup-plugin-visualizer';
import postcss from 'rollup-plugin-postcss';
import scss from 'rollup-plugin-scss';
// import autoprefixer from 'autoprefixer';
// import { writeFileSync } from 'fs';

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: packageJson.main,
				format: 'cjs',
				sourcemap: true,
			},
			{
				file: packageJson.module,
				format: 'esm',
				sourcemap: true,
			},
		],
		plugins: [
			peerDepsExternal(),
			resolve(),
			commonjs(),
			typescript({ tsconfig: './tsconfig.json' }),
			postcss(),
			terser(),
			visualizer(),
		],
	},
	{
		input: 'dist/esm/types/index.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		plugins: [dts()],
		external: [/\.scss$/],
	},
	{
		input: './src/styles/theme.ts',
		output: [{ file: 'dist/styles/index.js', format: 'esm' }],
		plugins: [
			scss({
				output: true,
				fileName: 'style.css',
				failOnError: true,
				outputStyle: 'compressed',
			}),
		],
	},
];

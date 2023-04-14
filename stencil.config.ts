import { Config } from '@stencil/core';
import tailwind, { tailwindHMR } from 'stencil-tailwind-plugin';
import { sass } from '@stencil/sass';

export const config: Config = {
	globalScript: 'src/global/app.ts',
	taskQueue: 'async',
	outputTargets: [
		{
			type: 'www',
			baseUrl: 'https://stenciljs.com/',
			prerenderConfig: './prerender.config.ts',
		},
	],
	plugins: [
		tailwind(),
		tailwindHMR(),
		sass(),
	],
	devServer: {
		reloadStrategy: 'pageReload',
		port: 3000,
	},
};

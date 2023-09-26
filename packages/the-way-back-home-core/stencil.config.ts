import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
import tailwind, { tailwindHMR } from 'stencil-tailwind-plugin';

export const config: Config = {
	namespace: 'the-way-back-home-core',
	taskQueue: 'async',
	plugins: [
    tailwind(),
    tailwindHMR(),
	],
	outputTargets: [
		reactOutputTarget({
			componentCorePackage: 'the-way-back-home-core',
			proxiesFile: '../the-way-back-home-react/src/components.ts',
		}),
		angularOutputTarget({
			componentCorePackage: 'the-way-back-home-core',
			directivesProxyFile: '../the-way-back-home-angular/src/directives/components.ts',
			directivesArrayFile: '../the-way-back-home-angular/src/directives/index.ts',
		}),
		vueOutputTarget({
			componentCorePackage: 'the-way-back-home-core',
			proxiesFile: '../the-way-back-home-vue/src/components.ts',
		}),
		{
			type: 'dist-custom-elements',
			dir: 'components',
		},
		{
			type: 'dist-hydrate-script',
		},
		{
			type: 'dist',
			esmLoaderPath: '../loader',
		},
		{
			type: 'docs-readme',
		},
	],
	extras: {
		initializeNextTick: true,
		scriptDataOpts: true,
		experimentalImportInjection: false,
	},
	devServer: {
		reloadStrategy: 'pageReload',
	},
};
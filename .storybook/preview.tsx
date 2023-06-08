import React from 'react';
import type { Preview } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import results from '../.jest-test-results.json';
import { ThemeProvider } from '@emotion/react';
import theme from '../src/theme';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		a11y: {
			config: {
				rules: [
					{
						// This tells Axe to run the 'autocomplete-valid' rule on selectors
						// that match '*:not([autocomplete="nope"])' (all elements except [autocomplete="nope"]).
						// This is the safest way of ignoring a violation across all stories,
						// as Axe will only ignore very specific elements and keep reporting
						// violations on other elements of this rule.
						id: 'autocomplete-valid',
						selector: '*:not([autocomplete="nope"])',
					},
					{
						// To disable a rule across all stories, set `enabled` to `false`.
						// Use with caution: all violations of this rule will be ignored!
						id: 'autocomplete-valid',
						enabled: false,
					},
				],
			},
		},
	},
	decorators: [
		withTests({
			results,
		}),
		(Story: any) => (
			<ThemeProvider theme={theme}>
				<Story />
			</ThemeProvider>
		),
	],
};
export default preview;

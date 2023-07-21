import type { Meta, StoryObj } from '@storybook/react';
import Heading from './Heading';

const meta = {
	title: 'Atoms/Heading',
	component: Heading,
	tags: ['autodocs'],
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		level: 'h1',
		children: 'Heading Level 1'
	},
};
export const Level1: Story = {
	args: {
		level: 'h1',
		children: 'Heading Level 1'
	},
};
export const Level2: Story = {
	args: {
		level: 'h2',
		children: 'Heading Level 2'
	},
};
export const Level3: Story = {
	args: {
		level: 'h3',
		children: 'Heading Level 3'
	},
};
export const Level4: Story = {
	args: {
		level: 'h4',
		children: 'Heading Level 4'
	},
};
export const Level5: Story = {
	args: {
		level: 'h5',
		children: 'Heading Level 5'
	},
};
export const Level6: Story = {
	args: {
		level: 'h6',
		children: 'Heading Level 6'
	},
};
export const NoHeading: Story = {
	args: {
		level: 'p',
		children: 'No Heading'
	},
};

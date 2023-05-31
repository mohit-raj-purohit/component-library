import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { expect } from '@storybook/jest';
import { within, userEvent } from '@storybook/testing-library';



const meta = {
	title: 'Atoms/Button',
	component: Button,
	argTypes: {
		onClick: { action: true },
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Button'
	},
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		await userEvent.click(canvas.getByRole('button'));
		await expect(args.onClick).toHaveBeenCalled();
	}
};
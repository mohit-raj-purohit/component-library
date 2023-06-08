import { MouseEventHandler } from 'react';

export interface ButtonProps {
	label: string;
	color?: string;
	hoverColor?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

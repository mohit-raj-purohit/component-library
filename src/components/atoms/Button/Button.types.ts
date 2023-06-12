import { MouseEventHandler } from 'react';

export interface ButtonProps {
	children?: any;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	className?: string;
}

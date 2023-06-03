import React, { MouseEventHandler } from 'react';
import { StyledButton } from './ButtonStyles';
export interface ButtonProps {
	label: string;
	customColor?: string;
	hoverColor?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: ButtonProps) => {
	return <StyledButton customColor={props.customColor} hoverColor={props.hoverColor} onClick={props.onClick}>{props.label}</StyledButton>;
};

export default Button;

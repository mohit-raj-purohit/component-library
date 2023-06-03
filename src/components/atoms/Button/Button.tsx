import React, { MouseEventHandler } from 'react';
import { StyledButton } from './ButtonStyles';
export interface ButtonProps {
	label: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: ButtonProps) => {
	return <StyledButton color="white" onClick={props.onClick}>{props.label}</StyledButton>;
};

export default Button;

import React, { MouseEventHandler } from 'react';
import { StyledButton } from './ButtonStyles';
import { useTheme } from '@emotion/react';
export interface ButtonProps {
	label: string;
	color?: string;
	hoverColor?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: ButtonProps) => {
	const theme = useTheme();
	return <StyledButton theme={theme} color={props.color} hoverColor={props.hoverColor} onClick={props.onClick}>{props.label}</StyledButton>;
};

export default Button;

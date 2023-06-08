import React from 'react';
import { ButtonProps } from './Button.types';

const Button = (props: ButtonProps) => {
	return <button onClick={props.onClick}>{props.label}</button>;
};

export default Button;

import React from 'react';
import { ButtonProps } from './Button.types';
import './Button.scss';

const Button = (props: ButtonProps) => {
	return <button className="rcl-btn" onClick={props.onClick}>{props.label}</button>;
};

export default Button;

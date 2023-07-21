import React from 'react';
import { ButtonProps } from './Button.types';
import './Button.scss';

const Button: React.FC<ButtonProps> = ({
	className,
	children,
	onClick,
	...rest
}) => {
	return (
		<button className={`rcl-btn ${className}`} {...rest} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;

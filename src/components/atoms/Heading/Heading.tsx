import React from 'react';
import { HeadingProps } from './Heading.types';
import './Heading.scss';

const Heading: React.FC<HeadingProps> = ({ level, children }) => {
	const HeadingTag = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
		React.createElement(level, props, children);
	return <HeadingTag className='rcl-heading'>{children}</HeadingTag>;
};
export default Heading;

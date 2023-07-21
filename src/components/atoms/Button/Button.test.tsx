import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

describe('Button', () => {
	it('renders with correct text', () => {
		const buttonText = 'Click me';
		const { getByText } = render(<Button>{buttonText}</Button>);
		expect(getByText(buttonText)).toBeInTheDocument();
	});
});

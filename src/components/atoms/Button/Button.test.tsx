import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

describe('Button', () => {
	it('renders with correct text', () => {
		const buttonText = 'Click me';
		const {getByText} = render(<Button label={buttonText} />);
		expect(getByText(buttonText)).toBeInTheDocument();
	});
});

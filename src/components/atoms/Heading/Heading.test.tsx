import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Heading from './Heading';

describe('Heading', () => {
	it('renders the correct heading level', () => {
		const level = 'h2';
		const text = 'Hello, World!';

		const { getByRole } = render(<Heading level={level}>{text}</Heading>);
		const headingElement = getByRole('heading', { level: 2 });

		expect(headingElement).toBeInTheDocument();
		expect(headingElement.textContent).toBe(text);
	});
});

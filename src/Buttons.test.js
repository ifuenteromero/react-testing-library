import { render, screen, within } from '@testing-library/react';
import Buttons from './Buttons';

test('the form displays two buttons', () => {
	render(<Buttons />);
	const form = screen.getByRole('form');
	const buttons = within(form).getAllByRole('button');

	expect(buttons).toHaveLength(2);
});

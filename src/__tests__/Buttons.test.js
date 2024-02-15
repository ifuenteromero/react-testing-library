import { render, screen, within } from '@testing-library/react';
import Buttons from '../Buttons';

test('the form displays two buttons', () => {
	render(<Buttons />);
	const form = screen.getByRole('form');
	expect(form).toContainRole('button', 2);
});

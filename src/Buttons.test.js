import { render, screen } from '@testing-library/react';
import Buttons from './Buttons';

test('the form displays two buttons', () => {
	render(<Buttons />);
	const buttons = screen.getAllByRole('button');

	expect(buttons).toHaveLength(2);
});

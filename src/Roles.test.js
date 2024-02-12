import { render, screen } from '@testing-library/react';
import Roles from './Roles';

test('can find elements by role', () => {
	render(<Roles />);
	// screen.logTestingPlaygroundURL();
	const roles = [
		'link',
		'button',
		'contentinfo',
		'heading',
		'banner',
		'img',
		'checkbox',
		'radio',
		'spinbutton',
		'textbox',
		'listitem',
		'list',
	];
	roles.forEach((role) => {
		const element = screen.getByRole(role);
		expect(element).toBeInTheDocument();
	});
});

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('should show the user on the list when we submitted the form', async () => {
	render(<App />);

	const name = 'Jane';
	const email = 'jane@gmail.com';

	const nameInput = screen.getByRole('textbox', { name: /name/i });
	const emailInput = screen.getByRole('textbox', { name: /email/i });
	const button = screen.getByRole('button');

	await userEvent.click(nameInput);
	await userEvent.keyboard(name);
	await userEvent.click(emailInput);
	await userEvent.keyboard(email);

	await userEvent.click(button);
	// screen.debug()
	// screen.logTestingPlaygroundURL();

	expect(button).toBeInTheDocument();

	const nameCell = screen.getByRole('cell', { name });
	const emailCell = screen.getByRole('cell', { name: email });

	expect(nameCell).toBeInTheDocument();
	expect(emailCell).toBeInTheDocument();
});

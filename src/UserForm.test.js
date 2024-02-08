import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserForm from './UserForm';

test('should show 2 inputs and a button', () => {
	render(<UserForm />);
	const inputs = screen.getAllByRole('textbox');
	const button = screen.getByRole('button');
	expect(inputs).toHaveLength(2);
	expect(button).toBeInTheDocument();
});

test('it calls onUserAdd when the form is submitted', async () => {
	const name = 'Jane';
	const email = 'jane@gmail.com';
	const onUserAddmocked = jest.fn();
	// Try to render my component

	render(<UserForm onUserAdd={onUserAddmocked} />);

	// Find the two inputs
	const nameInput = screen.getByRole('textbox', { name: /name/i });
	const emailInput = screen.getByRole('textbox', { name: /email/i });

	// Simulate typing in the name
	await userEvent.click(nameInput);
	await userEvent.keyboard(name);

	// Simulate typing in the email
	await userEvent.click(emailInput);
	await userEvent.keyboard(email);

	// Find the button
	const button = screen.getByRole('button');

	// Simulate clicking the button
	await userEvent.click(button);

	// Assertion to make sure 'onUserAdd' gets called with email/name
	expect(onUserAddmocked).toHaveBeenCalled();
	expect(onUserAddmocked).toHaveBeenCalledWith({ name, email });
});

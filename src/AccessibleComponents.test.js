import { render, screen } from '@testing-library/react';
import AccessibleComponents from './AccessibleComponents';

test('can select elements by accessible names', () => {
	render(<AccessibleComponents />);
	const submitButton = screen.getByRole('button', { name: /submit/i });
	const cancelButton = screen.getByRole('button', { name: /cancel/i });
	expect(submitButton).toBeInTheDocument();
	expect(cancelButton).toBeInTheDocument();

	const emailInput = screen.getByRole('textbox', { name: /email/i });
	const searchInput = screen.getByRole('textbox', { name: /search/i });
	expect(emailInput).toBeInTheDocument();
	expect(searchInput).toBeInTheDocument();
});

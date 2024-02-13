import { render, screen } from '@testing-library/react';
import ColorList from './ColorList';

test('getByRole, queryByRole, findByRole finding 0 elements', async () => {
	render(<ColorList />);
	expect(() => screen.getByRole('textbox')).toThrow();
	expect(screen.queryByRole('textbox')).toEqual(null);

	let errorThrown = false;
	try {
		await screen.findByRole('textbox');
	} catch (error) {
		errorThrown = true;
	}
	expect(errorThrown).toBe(true);
});

test('getByRole, queryByRole, findByRole when they find 1 element', async () => {
	render(<ColorList />);
	expect(screen.getByRole('list')).toBeInTheDocument();
	// eslint-disable-next-line testing-library/prefer-presence-queries
	expect(screen.queryByRole('list')).toBeInTheDocument();
	expect(await screen.findByRole('list')).toBeInTheDocument();
});

test('getByRole, queryByRole, findByRole when they find > 1 element', async () => {
	render(<ColorList />);
	expect(() => screen.getByRole('listitem')).toThrow();
	expect(() => screen.queryByRole('listitem')).toThrow();

	let thrownError = false;
	try {
		await screen.findByRole('listitem');
	} catch (error) {
		thrownError = true;
	}
	expect(thrownError).toBe(true);
});

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

test('getAllBy, queryAllBy, findAllBy finding 0 elements', async () => {
	render(<ColorList />);
	expect(() => screen.getAllByRole('textbox')).toThrow();
	expect(screen.queryAllByRole('textbox')).toHaveLength(0);

	let thrownError = false;
	try {
		await screen.findAllByRole('textbox');
	} catch (error) {
		thrownError = true;
	}
	expect(thrownError).toBe(true);
});

test('getAllBy, queryAllBy, findAllBy finding 1 element', async () => {
	render(<ColorList />);
	expect(screen.getAllByRole('list')).toHaveLength(1);
	expect(screen.queryAllByRole('list')).toHaveLength(1);
	expect(await screen.findAllByRole('list')).toHaveLength(1);
});

test('getAllBy, queryAllBy, findAllBy finding > 1 elements', async () => {
	render(<ColorList />);
	expect(screen.getAllByRole('listitem')).toHaveLength(3);
	expect(screen.queryAllByRole('listitem')).toHaveLength(3);
	expect(await screen.findAllByRole('listitem')).toHaveLength(3);
});

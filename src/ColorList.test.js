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

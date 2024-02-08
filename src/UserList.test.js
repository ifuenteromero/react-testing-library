import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';
const users = [
	{ name: 'Jane', email: 'jane@gmail.com' },
	{ name: 'Irene', email: 'irene@gmail.com' },
	{ name: 'lala', email: 'lala@gmail.com' },
];
test('render one row per user 1st approach', () => {
	render(<UserList users={users} />);
	// screen.logTestingPlaygroundURL();
	// utilidad para getByRole
	const rows = within(screen.getByTestId('users')).getAllByRole('row');
	expect(rows).toHaveLength(3);
});

test('render one row per user 1st approach 2nd approach', () => {
	const { container } = render(<UserList users={users} />);
	// screen.logTestingPlaygroundURL();

	// 2 approach
	// eslint-disable-next-line
	const rows = container.querySelectorAll('tbody tr');
	expect(rows).toHaveLength(3);
});

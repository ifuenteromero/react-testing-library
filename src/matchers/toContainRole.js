import { within } from '@testing-library/react';

const toContainRole = (container, role, quantity = 1) => {
	const elements = within(container).queryAllByRole(role);

	if (elements.length === quantity) {
		return {
			pass: true,
		};
	}

	return {
		pass: false,
		message: () =>
			`Expected to find ${quantity} ${role} elements. Found ${elements.length} instead.`,
	};
};

export default toContainRole;

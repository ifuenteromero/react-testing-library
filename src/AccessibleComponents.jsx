import React from 'react';

const AccessibleComponents = () => {
	return (
		<div>
			<button>Submit</button>
			<button>Cancel</button>
			<div>
				<label htmlFor='email'>Email</label>
				<input id='email' type='email' />
			</div>
			<div>
				<label htmlFor='search'>Search</label>
				<input id='search' type='text' />
			</div>
			<button aria-label='sign in'>
				<svg />
			</button>
			<button aria-label='sign out'>
				<svg />
			</button>
		</div>
	);
};

export default AccessibleComponents;

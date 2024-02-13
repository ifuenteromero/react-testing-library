import React, { useEffect, useState } from 'react';

const fakeFetchColors = () => Promise.resolve(['green', 'red', 'blue']);

const LoadableColorList = () => {
	const [colors, setColors] = useState([]);
	useEffect(() => {
		fakeFetchColors().then((res) => setColors(res));
	}, []);
	return (
		<ul>
			{colors.map((color) => (
				<li key={color}>{color}</li>
			))}
		</ul>
	);
};

export default LoadableColorList;

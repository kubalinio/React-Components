import { useEffect } from 'react';

export const DarkModeToggle = () => {
	const handleToggle = () => {
		document.body.classList.toggle('dark');
		localStorage.setItem('dark', document.body.className);
	};

	useEffect(() => {
		if (localStorage.getItem('dark')) {
			document.body.classList.add('dark');
		}
	}, []);

	return (
		<label>
			<input type='checkbox' onClick={handleToggle} className='input' />
			<span className='switch'>
				<span className='handle' />
			</span>
		</label>
	);
};

export default DarkModeToggle;

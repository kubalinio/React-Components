import { useEffect, useState } from 'react';

import classes from './dropdownButton.module.scss';

import { RiArrowDownSLine } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineClose, AiOutlineLogout } from 'react-icons/ai';

const menu = [
	{
		name: 'Profile',
		icon: <CgProfile />,
	},
	{
		name: 'Settings',
		icon: <FiSettings />,
	},
	{
		name: 'Logout',
		icon: <AiOutlineClose />,
	},
	//other menu items
];

const MenuButton = ({ icon, name }) => (
	<button className={classes.button}>
		<span className={classes.materialSymbolsOutlined}>{icon}</span>
		<span>{name}</span>
	</button>
);

export const DropdownButton = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = e => {
		e.stopPropagation();
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		document.body.addEventListener('click', () => setIsOpen(false));
	});

	return (
		<section className={classes.section}>
			<div className={classes.dropdown}>
				<div className={`${classes.menu} ${isOpen ? `${classes.open}` : ''} `}>
					{menu.map(item => (
						<MenuButton key={item.name} icon={item.icon} name={item.name} />
					))}
				</div>

				<button onClick={handleClick}>
					Actions
					<span className={classes.materialSymbolsOutlined}>{isOpen ? <AiOutlineLogout /> : <RiArrowDownSLine />}</span>
				</button>
			</div>
		</section>
	);
};

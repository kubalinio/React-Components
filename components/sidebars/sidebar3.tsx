import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import classes from './sidebar3.module.scss';

import {
	AiOutlineHome,
	AiOutlineSetting,
	AiOutlineLock,
	AiOutlineSearch,
	AiOutlineUser,
	AiOutlineMenu,
} from 'react-icons/ai';
import {
	MdOutlineAddBox,
	MdOutlineInventory2,
	MdOutlineFavoriteBorder,
	MdExpandLess,
	MdExpandMore,
} from 'react-icons/md';

const menuItems = [
	{
		name: 'Home',
		icon: <AiOutlineHome />,
	},
	{
		name: 'Settings',
		icon: <AiOutlineSetting />,
		items: ['Display', 'Editor', 'Theme', 'Interface'],
	},
	{
		name: 'Create',
		icon: <MdOutlineAddBox />,
		items: ['Article', 'Document', 'Report'],
	},
	{
		name: 'Account',
		icon: <AiOutlineLock />,
		items: ['Dashboard', 'Logout'],
	},
	{
		name: 'Products',
		icon: <MdOutlineInventory2 />,
	},
	{
		name: 'Favorites',
		icon: <MdOutlineFavoriteBorder />,
	},
	{
		name: 'Search',
		icon: <AiOutlineSearch />,
	},
	{
		name: 'Users',
		icon: <AiOutlineUser />,
	},
];

type Item = {
	name: string;
	icon: ReactNode;
	items: string[];
};

const Icon = ({ icon }: { icon: ReactNode }) => <span className={classes.symbols}>{icon}</span>;

const NavHeader = () => (
	<header className={classes.header}>
		<button type='button'>
			<Icon icon={<AiOutlineMenu />} />
		</button>
		<span>Admin</span>
	</header>
);

type ButtonProps = {
	onClick: (item: string) => void;
	name: string;
	icon?: ReactNode;
	isActive: boolean;
	hasSubNav?: boolean;
};

const NavButton: FC<ButtonProps> = ({ onClick, name, icon, isActive, hasSubNav }) => (
	<button type='button' onClick={() => onClick(name)} className={isActive ? `${classes.active}` : ''}>
		{icon && <Icon icon={icon} />}
		<span>{name}</span>
		{hasSubNav && <Icon icon={isActive ? <MdExpandLess /> : <MdExpandMore />} />}
	</button>
);

type SubMenuProps = {
	item: Item;
	activeItem: string;
	handleClick: (args0: string) => void;
};

const SubMenu: FC<SubMenuProps> = ({ item, activeItem, handleClick }) => {
	const navRef = useRef<HTMLDivElement>(null);

	const isSubNavOpen = (item: string, items: string[]) => items.some(i => i === activeItem) || item === activeItem;

	return (
		<div
			className={`${classes.subNav} ${isSubNavOpen(item.name, item.items) ? `${classes.open}` : ''}`}
			style={{
				height: !isSubNavOpen(item.name, item.items) ? 0 : navRef.current?.clientHeight,
			}}>

			<div ref={navRef} className={classes.navInner}>
				{item?.items.map(subItem => (
					<NavButton onClick={handleClick} name={subItem} isActive={activeItem === subItem} />
				))}
			</div>
		</div>
	);
};

const Sidebar = () => {
	const [activeItem, setActiveItem] = useState<string>('');

	const handleClick = (item: string) => {
		console.log('activeItem', activeItem);
		setActiveItem(item !== activeItem ? item : '');
	};

	return (
		<section className={classes.section}>
			<aside className={classes.sidebar}>
				<NavHeader />

				{menuItems.map(item => (
					<>
						{!item.items && (
							<NavButton
								onClick={handleClick}
								name={item.name}
								icon={item.icon}
								isActive={activeItem === item.name}
								hasSubNav={!!item.items}
							/>
						)}

						{item.items && (
							<>
								<NavButton
									onClick={handleClick}
									name={item.name}
									icon={item.icon}
									isActive={activeItem === item.name}
									hasSubNav={!!item.items}
								/>
								<SubMenu activeItem={activeItem} handleClick={handleClick} item={item} />
							</>
						)}
					</>
				))}
			</aside>
		</section>
	);
};

export default Sidebar;

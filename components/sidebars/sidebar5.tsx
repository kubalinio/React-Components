import { FC, ReactNode, useState } from 'react';

import classes from './sidebar5.module.scss';

import {
	AiFillLock,
	AiOutlineMenu,
	AiOutlineUser,
	AiOutlineAppstore,
	AiOutlineSetting,
	AiOutlineSearch,
} from 'react-icons/ai';
import { RiAddBoxLine, RiAccountCircleLine } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineInventory2, MdOutlineFavoriteBorder, MdOutlineEmail } from 'react-icons/md';

const menuItems = [
	{
		name: 'Home',
		icon: <AiOutlineUser />,
	},
	{
		name: 'Apps',
		icon: <AiOutlineAppstore />,
	},
	{
		name: 'Create',
		icon: <RiAddBoxLine />,
	},
	{
		name: 'Profile',
		icon: <AiOutlineUser />,
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
		icon: <CgProfile />,
	},
];

const Icon = ({ icon }: { icon: ReactNode }) => <span className={classes.symbols}>{icon}</span>;

const tabs = [
	{
		name: 'Menu',
		icon: <AiOutlineMenu />,
	},

	{
		name: 'Lock',
		icon: <AiFillLock />,
	},
	{
		name: 'Users',
		icon: <AiOutlineSetting />,
	},
];

type HeaderProps = {
	activeTab: number;
	onTabClicked: (tab: number) => void;
};

const NavHeader: FC<HeaderProps> = ({ activeTab, onTabClicked }) => (
	<header className={classes.sidebarHeader}>
		{tabs.map((tab, index) => (
			<button
				key={tab.name + index}
				type='button'
				onClick={() => onTabClicked(index)}
				className={`${activeTab === index ? `${classes.active}` : ''}`}>
				<Icon icon={tab.icon} />
			</button>
		))}
		<div
			className={classes.underline}
			style={{
				translate: `${activeTab * 100}% 0`,
			}}
		/>
	</header>
);

type ButtonProps = {
	name: string;
	icon?: ReactNode;
};

const NavButton: FC<ButtonProps> = ({ name, icon }) => (
	<button type='button'>
		{icon && <Icon icon={icon} />}
		<span>{name}</span>
	</button>
);

const Tab = ({ children, isActive }: { children: ReactNode; isActive: boolean }) => {
	return <div className={isActive ? `${classes.active}` : ''}>{children}</div>;
};

const Sidebar = () => {
	const [activeTab, setActiveTab] = useState<number>(0);

	const handleTabClicked = (tab: number) => {
		setActiveTab(tab);
	};

	return (
		<section className={classes.section}>
			<aside className={classes.sidebar}>
				<div>
					<NavHeader activeTab={activeTab} onTabClicked={handleTabClicked} />
					<div className={classes.tabs}>
						<Tab isActive={activeTab === 0}>
							<div>
								{menuItems.map(item => (
									<NavButton name={item.name} icon={item.icon} />
								))}
							</div>
						</Tab>

						<Tab isActive={activeTab === 1}>
							<div>
								<form>
									<div className={classes.textbox}>
										<span className={classes.symbols}>
											<RiAccountCircleLine />
										</span>
										<input placeholder='Name' type='text' required />
									</div>
									<div className={classes.textbox}>
										<span className={classes.symbols}>
											<AiFillLock />
										</span>
										<input placeholder='Password' type='password' required />
									</div>
									<div className={classes.textbox}>
										<span className={classes.symbols}>
											<MdOutlineEmail />
										</span>
										<input placeholder='Email' type='text' required />
									</div>
								</form>
							</div>
						</Tab>

						<Tab isActive={activeTab === 2}>
							<div>
								<form>
									<div className={classes.row}>
										<div className={classes.switchLabel}>Dark Mode</div>
										<span className={classes.switch}>
											<input id='switch-round' type='checkbox' />
											<label htmlFor='switch-round'></label>
										</span>
									</div>

									<div className={classes.row}>
										<div className={classes.switchLabel}>Accessibility Mode</div>
										<span className={classes.switch}>
											<input id='switch-round2' type='checkbox' />
											<label htmlFor='switch-round2'></label>
										</span>
									</div>

									<div className={classes.row}>
										<div className={classes.switchLabel}>Quirks Mode</div>
										<span className={classes.switch}>
											<input id='switch-round3' type='checkbox' />
											<label htmlFor='switch-round3'></label>
										</span>
									</div>
								</form>
							</div>
						</Tab>
					</div>
				</div>
			</aside>
		</section>
	);
};

export default Sidebar;

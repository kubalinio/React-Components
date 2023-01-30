import Link from 'next/link';

import Logo from './logo';
import classes from './main-navigation.module.scss';

const MainNavigation = () => {
	return (
		<header className={classes.header}>
			<Link href='/'>
				<Logo />
			</Link>
			<nav>
				<ul>
					<li>
						<Link href='/sidebars'>Sidebars</Link>
					</li>
					<li>
						<Link href='/controls'>Controls</Link>
					</li>
					<li>
						<Link href='/buttons'>Buttons</Link>
					</li>
					<li>
						<Link href='/image-gallery'>Image Gallery</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;

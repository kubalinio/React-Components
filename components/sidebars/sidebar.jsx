import classes from './sidebarsTT.module.scss';

import { AiOutlineHome, AiFillPlusCircle, AiOutlineMore } from 'react-icons/ai';
import { BsTwitter, BsHash, BsArrowDownCircle, BsFillBookmarkFill } from 'react-icons/bs';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { RxEnvelopeClosed } from 'react-icons/rx';
import { FaUserAlt } from 'react-icons/fa';

const Siderbar = () => {
	return (
		<section className={classes.body}>
			<aside className={classes.sidebar}>
				<header>
					<div className={classes.logo}>
						<BsTwitter />
					</div>
					<i className={classes.icon}></i>
				</header>
				<nav>
					<button>
						<span>
							<i className={classes.symbols}>
								<AiOutlineHome />
							</i>
							<span>Home</span>
						</span>
					</button>
					<button>
						<span>
							<i className={classes.symbols}>
								<BsHash />
							</i>
							<span>Explore</span>
						</span>
					</button>
					<button>
						<span>
							<i className={classes.symbols}>
								<IoMdNotificationsOutline /> <span>10+</span>
							</i>
							<span>Notification</span>
						</span>
					</button>
					<button>
						<span>
							<i className={classes.symbols}>
								<RxEnvelopeClosed />
							</i>
							<span>Messages</span>
						</span>
					</button>
					<button>
						<span>
							<i className={classes.symbols}>
								<BsFillBookmarkFill />
							</i>
							<span>Bookmarks</span>
						</span>
					</button>
					<button>
						<span>
							<i className={classes.symbols}>
								<FaUserAlt />
							</i>
							<span>Profile</span>
						</span>
					</button>
					<button>
						<span>
							<i className={classes.symbols}>
								<BsArrowDownCircle />
							</i>
							<span>More</span>
						</span>
					</button>
					<button className={classes.tweet}>
						<span>
							<i className={classes.symbols}>
								<AiFillPlusCircle />
							</i>
							<span>Tweet</span>
						</span>
					</button>
					<button className={classes.user}>
						<span>
							<img src='/jakub.png' />
							<span>
								<span className={classes.fullname}>Jakub</span>
								<span className={classes.username}>@frontendjakub</span>
							</span>
							<i className={classes.symbols}>
								<AiOutlineMore />
							</i>
						</span>
					</button>
				</nav>
			</aside>
		</section>
	);
};

export default Siderbar;

import { useState } from 'react';

import classes from './deleteButton.module.scss';

const DeleteButton = () => {
	const [isDeleting, setIsDeleting] = useState(false);

	const handleClick = () => {
		setIsDeleting(true);

		setTimeout(() => {
			setIsDeleting(false);
		}, 3000);
	};

	return (
		<div className={classes.buttonContainer}>
			<button onClick={handleClick} className={isDeleting ? `${classes.deleting}` : ''} disabled={isDeleting}>
				<span className={classes.buttonText}>{isDeleting ? 'Deleting...' : 'Delete User'}</span>
				<span className={classes.animation}>
					<span className={classes.paperWrapper}>
						<span className={classes.paper} />
					</span>
					<span className={classes.shreddedWrapper}>
						<span className={classes.shredded} />
					</span>
					<span className={classes.lid} />
					<span className={classes.can}>
						<span className={classes.filler} />
					</span>
				</span>
			</button>
		</div>
	);
};

export default DeleteButton;

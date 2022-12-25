import { useState } from 'react';

import classes from './deleteButton2.module.scss';

const DeleteButton2 = () => {
	const [isDeleting, setIsDeleting] = useState(false);
	const [isDeleted, setIsDeleted] = useState(false);

	const handleClick = () => {
		// setIsDeleting(true);
		//const res = await deleteUser()
		// setIsDeleting(false);
		// setIsDeleted(true);
		// setTimeout(() => setIsDeleted(false), 2000);

		setIsDeleting(true);
		setIsDeleted(true);

		setTimeout(() => {
			setIsDeleting(false);
			setTimeout(() => {
				setIsDeleted(false);
			}, 2000);
		}, 2000);
	};

	return (
		<div className={classes.buttonContainer}>
			<button
				className={isDeleting || isDeleted ? `${classes.deleting}` : ''}
				disabled={isDeleting || isDeleted}
				onClick={handleClick}>
				<span className={classes.text}>{isDeleting || isDeleted ? 'Deleting' : 'Delete'}</span>
				<span className={classes.animation}>
					<span className={classes.balls}></span>
					<span className={classes.lid}></span>
					<span className={classes.can}>
						<span className={classes.filler}></span>
					</span>
				</span>
			</button>
		</div>
	);
};

export default DeleteButton2;

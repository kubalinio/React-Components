import { useState } from 'react';
import classes from './paymentButton.module.scss';

const PaymentButton = () => {
	const [isPaying, setIsPaying] = useState(false);
	const [isPaid, setIsPaid] = useState(false);

	const handleClick = () => {
		setIsPaying(true);
		setTimeout(() => {
			setIsPaying(false);
			setIsPaid(true);
			setTimeout(() => {
				setIsPaid(false);
			}, 1700);
		}, 2000);
	};

	return (
		<div className={classes.buttonContainer}>
			<button disabled={isPaying || isPaid} onClick={handleClick}>
				<span className={classes.rail}></span>
				<span className={classes.icon}></span>
				<span className={classes.text}>{isPaying ? 'Processing' : isPaid ? 'Complete' : 'Buy Product Now'}</span>
			</button>
		</div>
	);
};

export default PaymentButton;

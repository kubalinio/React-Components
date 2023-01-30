import { useState } from 'react';

import classes from './sendButton.module.scss';

import { CiPaperplane } from 'react-icons/ci';
import { FiCheck } from 'react-icons/fi';

const SendButton = () => {
	const [isSending, setIsSending] = useState(false);
	const [isSent, setIsSent] = useState(false);

	const handleClick = () => {
		setIsSending(true);
		setTimeout(() => {
			setIsSending(false);
			setIsSent(true);
			setTimeout(() => setIsSent(false), 2500);
		}, 2000);
	};

	return (
		<div className={classes.buttonContainer}>
			<button onClick={handleClick} className={isSending || isSent ? classes.sending : ''}>
				<span className={`${classes.icon} ${classes.MaterialSymbolsOutlined}`}>
					{isSent ? <FiCheck /> : <CiPaperplane />}
				</span>
				<span className={classes.text}>{isSending ? 'Sending...' : isSent ? 'Sent' : 'Send Message'}</span>
			</button>
		</div>
	);
};

export default SendButton;

import { useState } from 'react';
import { AiFillSetting } from 'react-icons/ai';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// Dodane style do global.css
const LoadingButton = () => {
	const [isLoading, setIsLoading] = useState(false)

	const handleClick = async () => {
		// setIsLoading(!isLoading)
		setIsLoading(true)
		// Make Api Call
		await delay(3500)
		setIsLoading(false)
	}

	return (
		<button onClick={handleClick} className={`relative overflow-hidden text-xl text-left text-white bg-red-700 border-none cursor-pointer rounded-xl w-[200px] h-16 gap-3 flex items-center justify-center [transform:translateZ(0)] [&>*]:relative [&>*]:z-30 button-loading ${isLoading ? 'loading' : ''} `}>
			<AiFillSetting className='w-6 h-6 icon' />
			<span className='last:w-[106px]'>Deploy Site</span>
		</button>
	);
};

export default LoadingButton;

import { FC, PropsWithChildren, useState } from 'react';

import { FiPlus } from 'react-icons/fi';
import { BsHeartFill, BsFillTabletFill } from 'react-icons/bs'
import { AiFillSetting } from 'react-icons/ai'


import classes from './fabButton.module.scss';

const Icon: FC<PropsWithChildren> = ({ children }) => <span>{children}</span>;

const FabButton = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleButtonOpen = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className={`group/fab fixed right-4 bottom-4 rounded-full  ${isOpen ? 'open' : ''}`}>

			<div className='relative flex items-center justify-center'>

				<button onClick={handleButtonOpen} className='z-10 shadow-sm shadow-black/10  flex items-center justify-center w-16 h-16 text-white transition-all duration-200 rotate-0 bg-red-800 rounded-full group-[.open]/fab:rotate-45'>
					<Icon>
						<FiPlus className='text-3xl' />
					</Icon>
				</button>

				<div className='z-1 absolute w-[300px] h-[300px] border-[80px] border-white/5 rounded-full rotate-[-220deg] scale-75 opacity-0 transition-all duration-500 ease-in-out group-[.open]/fab:rotate-0 group-[.open]/fab:scale-100 group-[.open]/fab:opacity-100'>

					<button className='absolute text-white transition duration-300 hover:scale-125 hover:text-red-800 left-[40px] top-[-60px]' >
						<BsHeartFill className='text-4xl' />
					</button>

					<button className='absolute text-white transition duration-300 hover:scale-125 left-[-25px] top-[-20px] hover:text-red-800' >
						<BsFillTabletFill className='text-4xl rotate-[135deg]' />
					</button>

					<button className='absolute text-white transition duration-300 hover:scale-125 hover:text-red-800 left-[-60px] top-[40px]' >
						<AiFillSetting className='text-4xl' />
					</button>

				</div>
			</div>

		</div>


	);
};

export default FabButton;

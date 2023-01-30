import { FC, PropsWithChildren, useState } from 'react';

import { FiPlus } from 'react-icons/fi';
import { FaUserPlus } from 'react-icons/fa'
import { HiDocumentText } from 'react-icons/hi'
import { AiFillSetting } from 'react-icons/ai'

import classes from './fabButton2.module.scss';

const Icon: FC<PropsWithChildren> = ({ children }) => (
	<i className='text-3xl '>
		{children}
	</i>
)

const FabButton2 = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const handleButtonOpen = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className={`${classes.fab} group fixed right-9 bottom-10 rounded-full ${isOpen ? 'open' : ''}`}>

			<button onClick={handleButtonOpen} className='relative z-10 grid w-16 h-16 rounded-full text-[#f9f9f9] bg-red-700 place-items-center transition-all duration-200 group-[.open]:rotate-45'>
				<Icon>
					<FiPlus />
				</Icon>
			</button>

			{/* Menu */}
			<div className={`absolute left-0 grid invisible w-16 gap-3 transition-all duration-300 origin-center scale-0 translate-x-0 opacity-0  bottom-20 place-content-center translate-y-3/4 group-[.open]:scale-100 group-[.open]:translate-x-0 group-[.open]:translate-y-0 group-[.open]:opacity-100 group-[.open]:visible `} >


				<button className='relative grid w-12 h-12 rounded-full bg-white/10 place-items-center text-[#e0e0e0] transition-all duration-300 hover:bg-white/20 group/edit'>
					<Icon >
						<FaUserPlus className='p-1' />
					</Icon>
					<span className='absolute invisible text-sm transition duration-300 translate-x-4 translate-y-0 opacity-0 right-16 whitespace-nowrap group-hover:translate-x-0 group-hover:opacity-100 group-hover/edit:visible '>Add User</span>
				</button>
				<button className='relative grid w-12 h-12 rounded-full bg-white/10 place-items-center text-[#e0e0e0] transition-all duration-300 hover:bg-white/20 group/edit'>
					<Icon>
						<HiDocumentText className='p-1' />
					</Icon>
					<span className='absolute invisible text-sm transition duration-300 translate-x-3 translate-y-0 opacity-0 right-16 whitespace-nowrap group-hover:translate-x-0 group-hover:opacity-100 group-hover/edit:visible '>Documents</span>
				</button>

				<button className='relative grid w-12 h-12 rounded-full bg-white/10 place-items-center text-[#e0e0e0] transition-all duration-300 hover:bg-white/20 group/edit'>
					<Icon>
						<AiFillSetting className='p-1' />
					</Icon>
					<span className='absolute invisible text-sm transition duration-300 translate-x-3 translate-y-0 opacity-0 right-16 whitespace-nowrap group-hover:translate-x-0 group-hover:opacity-100 group-hover/edit:visible '>Settings</span>
				</button>
			</div>
		</div >
	);
};

export default FabButton2
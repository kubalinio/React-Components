import { useState, useRef, useEffect, FC, PropsWithChildren, RefObject, MouseEventHandler } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { BsFillPersonFill, BsPersonCircle } from 'react-icons/bs'
import { CgChevronDown } from "react-icons/cg";
import { AiFillSetting, AiFillLock } from "react-icons/ai";

const Icon: FC<PropsWithChildren> = ({ children }) => (
	<i className="first:text-xl">{children}</i>
)

const useOnClickOutside = (refDropdown: RefObject<HTMLDivElement>, handler: MouseEventHandler<HTMLButtonElement>) => {

	useEffect(() => {

		const listener = (event: any) => {
			if (!refDropdown.current || refDropdown.current.contains(event.target)) { return }
			handler(event)
		}

		document.addEventListener('mousedown', listener)
		document.addEventListener('touchstart', listener)

		return () => {
			document.removeEventListener('mousedown', listener)
			document.removeEventListener('touchstart', listener)
		}

	}, [refDropdown, handler])
}

const DropdownButton3 = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const refDropdown = useRef<HTMLDivElement>(null)

	const handleIsOpen = () => setIsOpen(!isOpen)

	useOnClickOutside(refDropdown, () => setIsOpen(false))

	return (
		<div ref={refDropdown} className={`relative text-white ${isOpen ? 'open' : ''} group/dropdown`} >

			<button onClick={handleIsOpen} className="relative z-[2] flex items-center gap-2 p-4 h-16 rounded-md border-none cursor-pointer text-lg  bg-[#211d26] hover:bg-[#2d2834] group-[.open]/dropdown:bg-red-800">
				<Icon><BsPersonCircle /></Icon>
				<span>Jason Smith</span>
				<Icon>{isOpen ? <AiOutlineClose /> : <CgChevronDown />}</Icon>
			</button>

			{/* Menu */}
			<div className="absolute overflow-hidden z-[1] top-16 left-0 w-full rounded-bl-md rounded-br-md translate-y-[-20px] transition-all duration-300 opacity-0 invisible group-[.open]/dropdown:opacity-100 group-[.open]/dropdown:visible group-[.open]/dropdown:translate-y-[-3px]">

				<button className="w-full rounded-none h-14 flex items-center  gap-2 p-4 border-none cursor-pointer text-lg bg-[#211d26] hover:bg-[#2d2834]">
					<Icon><BsFillPersonFill /></Icon>
					<span>Profile</span>
				</button>

				<button className="w-full rounded-none h-14 flex items-center gap-2 p-4 border-none cursor-pointer text-lg bg-[#211d26] hover:bg-[#2d2834]">
					<Icon><AiFillSetting /></Icon>
					<span>Settings</span>
				</button>
				<button className="w-full rounded-none h-14 flex items-center gap-2 p-4 border-none cursor-pointer text-lg bg-[#211d26] hover:bg-[#2d2834]">
					<Icon><AiFillLock /></Icon>
					<span>Account</span>
				</button>
			</div>
		</div>
	);
};

export default DropdownButton3;

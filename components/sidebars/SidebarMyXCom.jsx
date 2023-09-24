import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg';
import { BiHelpCircle } from 'react-icons/bi'
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { SlBasket } from 'react-icons/sl'
import { RxHamburgerMenu } from 'react-icons/rx'
import { HiOutlineDesktopComputer } from 'react-icons/hi'

const menuItems = [
	{
		name: 'Pomoc i kontakt',
		icon: <BiHelpCircle />
	},
	{
		name: 'Twoje konto',
		icon: <CgProfile />
	},
	{
		name: 'Twoje listy',
		icon: <MdOutlineFavoriteBorder />
	},
	{
		name: 'Koszyk',
		icon: <SlBasket />
	},
]

const categorieItems = [
	{
		name: 'Laptop i komputer',
		icon: <HiOutlineDesktopComputer />
	},
	{
		name: 'Smartfony i smartwatche',
		icon: <HiOutlineDesktopComputer />
	},
	{
		name: 'Gaming i streaming',
		icon: <HiOutlineDesktopComputer />
	},
	{
		name: 'Podzespoły komputerowe',
		icon: <HiOutlineDesktopComputer />
	},
	{
		name: 'Urządzenia peryferyjne',
		icon: <HiOutlineDesktopComputer />
	},
	{
		name: 'TV i audio',
		icon: <HiOutlineDesktopComputer />
	},
	{
		name: 'Smarthome i lifestyle',
		icon: <HiOutlineDesktopComputer />
	},
	{
		name: 'Akcesoria',
		icon: <HiOutlineDesktopComputer />
	},
	{
		name: <p className="whitespace-nowrap">Trendy, promocje<br />i nowości</p>,
		icon: <HiOutlineDesktopComputer />
	},
]



const Hamburger = () => (
	<button className="flex flex-col items-center justify-center w-8 px-8 md:h-10 md:px-11 lg:h-14" >
		<span className="flex items-center justify-center w-5 h-5 text-xl md:text-2xl md:w-6 md:h-6"><RxHamburgerMenu /></span>
		<span className="text-[10px]">Menu</span>
	</button>
)

const Icon = ({ icon }) => <span>{icon}</span>;



const SidebarMyXCom = () => {

	const [isScrollDown, setIsScrollDown] = useState(false)

	useEffect(() => {

		const listener = (event) => {
			if (event.target.scrollingElement.scrollTop >= 35 && window.innerWidth > 1027) {
				setIsScrollDown(true)
			} else {
				setIsScrollDown(false)
			}

		}
		document.addEventListener('scroll', listener)

		return () => {
			document.removeEventListener('scroll', listener)
		}
	}, [])

	return (
		<header className="relative top-0 left-0 z-20 w-full mt-10 text-black bg-white shadow-md">
			{/* Navbar Top */}
			<div className="flex relative flex-wrap items-center justify-between h-full max-w-full ml-4 md:ml-6 lg:mx-auto lg:max-w-[1024px] lg:w-[calc(100%+64px)] xl:max-w-screen-xl 2xl:max-w-[1444px]">

				{/* Logo Box */}
				<div className="flex items-center h-full shrink-0 lg:pl-2 lg:pr-2 2xl:pl-4" >
					{/* Hamburger */}
					<div className={`${!isScrollDown ? 'scale-0 opacity-0 w-0 h-14' : 'h-14 w-20 2xl:w-24'} absolute top-0 left-0 z-10 outline-transparent hidden transition-all duration-300 bg-white lg:block`}>
						<Hamburger />
					</div>

					{/* Logo */}
					<Link href='/sidebars/sidebarXCom' className={`flex items-center overflow-hidden transition-all duration-300 ${!isScrollDown ? '' : ''}`} >
						{/* Logo Big Screen */}
						<span className={`hidden lg:inline-flex`} >
							<Image src='https://assets.x-kom.pl/public-spa/xkom/7cbf82dd32ab7e88.svg' alt='x-kom sklep komputerowy' width={225} height={40} />
						</span>
						{/* Logo Mobile */}
						<span className={`relative inline-flex items-center justify-start h-7 lg:hidden`} >
							<Image src='https://assets.x-kom.pl/public-spa/xkom/064948e3bac8c6d5.svg' alt='x-kom sklep komputerowy' width={102} height={30} className='relative inline-block w-auto h-auto max-w-full max-h-full' />
						</span>
					</Link>

				</div>

				{/* Hamburger bottom nav & Searchbar Box*/}
				<div className="flex items-center flex-grow order-4 w-full py-1 pr-2 ml-[-16px] md:ml-[-24px] lg:w-auto lg:order-2 lg:ml-0 lg:px-4 " >
					{/* Hamburger */}
					<div className="lg:hidden">
						<Hamburger />
					</div>

					{/* Searchbar */}
					<div className="w-full bg-white border border-gray-400 rounded-2xl" >
						<div className="flex items-center justify-between h-[30px] md:h-[35px]">
							<button className="flex p-1">
								<span className="text-xl"><AiOutlineSearch /></span>
							</button>

							<div className="flex-1 pr-4" >
								<input type="text" placeholder="Czego szukasz?" className="w-full py-1 text-sm text-gray-900 bg-transparent border-transparent border-none whitespace-nowrap" />
							</div>


							{/* <button></button> */}
							{/* <div></div> */}
						</div>
					</div>
				</div>

				{/* Navigation */}
				<div className={`${!isScrollDown ? 'lg:h-16 xl:h-[78px]' : 'lg:h-14'} lg:transition-all lg:duration-300 flex order-3  pt-1`} >

					{/* Pomoc */}
					<div className='hidden md:flex min-w-[64px] md:min-w-[88px]'>
						<Link href='/' className="flex flex-col items-center justify-center " >
							<div className="text-2xl 2xl:text-3xl">
								<Icon icon={menuItems[0].icon} />
							</div>
							<span className={`${!isScrollDown ? 'lg:scale-100 lg:opacity-100 lg:translate-y-0' : 'lg:scale-0 lg:opacity-0 lg:translate-y-[-20px] lg:h-0'} text-[10px] whitespace-nowrap mt-1 transition-all duration-500`}>{menuItems[0].name}</span>
						</Link>
					</div>

					<span className="hidden md:flex self-center border-r-[1px] border-gray-400 h-9 ml-2 mr-3 mb-1" />

					{menuItems.slice(1, 4).map(item => (
						<div className='min-w-[64px] md:min-w-[88px]' >
							<Link href='/' className="flex flex-col items-center justify-center h-full" >
								<div className="text-2xl 2xl:text-3xl" ><Icon icon={item.icon} /></div>
								<span className={`${!isScrollDown ? 'lg:scale-100 lg:opacity-100 lg:translate-y-0' : 'lg:scale-0 lg:opacity-0 lg:translate-y-[-20px] lg:h-0 '} transition-all duration-500 text-[10px] whitespace-nowrap mt-1`}>{item.name}</span>
							</Link>
						</div>
					))}

				</div>
			</div>

			{/*Navbar Bottom min-screen 1028px */}
			<div className="relative z-10 hidden w-full bg-gray-200 shadow-sm lg:block ">

				{/* Product Categories Container */}
				<div className="z-10 flex items-center justify-center w-full mx-auto max-w-[1024px] xl:max-w-screen-xl 2xl:max-w-[1444px] lg:w-[calc(100%+64px)]" >

					{/* Product Categories */}
					<nav className={`w-full ${!isScrollDown ? 'h-12 opacity-100' : 'h-0 opacity-0'} transition-all duration-300 `}>
						<ul className={`flex items-center justify-between text-[13px] leading-4 ${!isScrollDown ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 `}>
							{categorieItems.map(item => (
								<li className="z-30 flex-grow last:text-pink-800" >
									<Link href='/' className='flex items-center h-12 px-1 w-min'>

										<div className="hidden mr-2 text-xl 2xl:text-2xl xl:block">
											<Icon icon={item.icon} />
										</div>
										<span>{item.name}</span>
									</Link>

									{/* Flying dropdown */}
									<section></section>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>


			<div></div>
		</header>
	);
};

export default SidebarMyXCom;

// https://assets.x-kom.pl/public-spa/xkom/064948e3bac8c6d5.svg


// https://assets.x-kom.pl/public-spa/xkom/7cbf82dd32ab7e88.svg
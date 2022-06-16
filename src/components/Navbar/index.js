import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { links, icons } from './data';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [navBg, setNavBg] = useState('transparent');
	const [linkColor, setLinkColor] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
				setNavBg('#ecf1f3');
				setLinkColor('#000');
			} else {
				setShadow(false);
				setNavBg('transparent');
				setLinkColor('#fff');
			}

			// if (window.scrollY >= 90) {
			// 	setShadow(true);
			// 	setNavBg('#17171f');
			// 	setLinkColor('#fff');
			// } else {
			// 	setShadow(false);
			// 	setNavBg('transparent');
			// 	setLinkColor('#fff');
			// }
		};
		window.addEventListener('scroll', handleShadow);
	}, []);

	return (
		// main nav

		<nav
			style={{ backgroundColor: `${navBg}` }}
			className={
				shadow
					? 'fixed z-[100] h-20 w-full  shadow-lg'
					: 'fixed z-[100] h-20 w-full '
			}>
			<div className='mx-auto flex h-full w-11/12 items-center justify-between px-2 lg:max-w-[1240px] '>
				<h1 className='text-xl lg:text-2xl'>
					<Link href='/'>
						<a style={{ color: `${linkColor}` }} className='text-white'>
							King Tax Accounting Services
						</a>
					</Link>
				</h1>
				<div>
					<ul
						style={{ color: `${linkColor}` }}
						className='hidden text-white md:flex'>
						{links.map((link, index) => (
							<li
								key={index}
								className='ml-10 text-sm font-semibold uppercase '>
								<Link href={link.link}>
									<a className='pb-2 border-sky-500 hover:border-b-2'>
										{link.name}
									</a>
								</Link>
							</li>
						))}
					</ul>
					<div
						style={{ color: `${linkColor}` }}
						onClick={handleNav}
						className='md:hidden'>
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>
			{/* Mobile nav  */}
			<div
				onClick={() => setNav(false)}
				className={
					nav ? 'fixed left-0 top-0 h-screen w-full bg-black/70 md:hidden' : ''
				}>
				<div
					className={
						nav
							? ' fixed left-0 top-0 h-screen w-[75%] bg-[#ecf1f3] p-10 duration-500 ease-in sm:w-[60%] md:w-[45%]'
							: 'fixed left-[-100%] top-0 p-10 duration-500 ease-in'
					}>
					<div>
						<div className='flex items-center justify-between w-full'>
							<h1 className='text-base lg:text-2xl'>
								<Link href='/'>
									<a>King Tax Accounting Services</a>
								</Link>
							</h1>
							<div
								onClick={handleNav}
								className='p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400'>
								<AiOutlineClose />
							</div>
						</div>
						<div className='my-4 border-b border-gray-300'>
							<p className='w-[85%] py-4 md:w-[90%]'>
								Let's build something legendary together
							</p>
						</div>
					</div>
					<div className='flex flex-col py-4'>
						<ul className='uppercase'>
							{links.map((link, index) => (
								<li
									key={index}
									onClick={() => setNav(false)}
									className='py-4 text-sm font-semibold'>
									<Link href={link.link}>
										<a>{link.name}</a>
									</Link>
								</li>
							))}
						</ul>
						<div className='pt-40'>
							<p className='uppercase tracking-widest text-[#5651e5]'>
								Let's Connect
							</p>

							<div className='my-4 flex w-full items-center justify-between sm:w-[80%]'>
								{icons.map((icon, index) => (
									<a
										href={icon.link}
										target='_blank'
										key={index}
										className='p-4 duration-300 ease-in rounded-full shadow-md cursor-pointer shadow-gray-400 hover:scale-110'>
										{icon.icon}
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

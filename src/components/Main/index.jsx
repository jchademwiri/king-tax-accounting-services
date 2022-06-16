import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { icons } from '../Navbar/data';

const Main = () => {
	return (
		<div id='services' className='w-full h-screen text-center'>
			<div className='mx-auto flex h-full w-full max-w-[1240px] items-center justify-center p-2'>
				<div>
					<p className='text-sm tracking-widest text-gray-600 uppercase'>
						LET'S BUILD SOMETHING TOGETHER
					</p>
					<h1 className='py-4 text-gray-700'>
						Hi, I'm <span className='text-[#5651e5]'> Clint</span>
					</h1>
					<h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
					<p className='m-auto max-w-[70%] py-4 text-gray-600'>
						I’m a front-end web developer specializing in building (and
						occasionally designing) exceptional digital experiences. Currently,
						I’m focused on building responsive front-end web applications while
						learning back-end technologies.
					</p>
					<div className='m-auto flex max-w-[330px] items-center justify-between py-4'>
						{icons.map((icon, index) => (
							<a
								href={icon.link}
								target='_blank'
								key={index}
								className='p-6 duration-300 ease-in rounded-full shadow-md cursor-pointer shadow-gray-400 hover:scale-110'>
								{icon.icon}
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;

import { BsGear } from 'react-icons/bs';

const Hero = () => {
	return (
		<div
			id='home'
			className="box-shadow  bg-[url('/images/hero-bg.jpg')] bg-cover bg-no-repeat text-white">
			<div className='max-height-screen box mx-auto  grid h-screen w-full  max-w-[1240px] content-center gap-4 p-8 '>
				<div className='grid content-center w-full '>
					<div>
						<h3 className='py-2 text-xs uppercase'>Call us now</h3>
						<a className='py-2 text-accent' href='tel:+27740491433'>
							+27 740 491 433
						</a>
						<h1 className='py-2 leading-tight text-gray-200'>
							Register your company today.
						</h1>
						<h3 className='py-2 my-3 text-selected'>
							Includes everything you need to start an official company.
						</h3>

						<div className='py-5 my-3'>
							<a
								className='p-4 px-6 font-semibold rounded bg-theme '
								href='mailto:info@kingtax.co.za'>
								FREE CONSULTATION
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;

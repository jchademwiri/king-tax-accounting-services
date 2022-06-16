import { BsGear } from 'react-icons/bs';

const Hero = () => {
	return (
		<div
			id='home'
			className="box-shadow  bg-[url('/images/hero-bg-2.jpg')] bg-cover bg-no-repeat text-white">
			<div className='max-height-screen box mx-auto  grid h-screen w-full  max-w-[1240px] content-center gap-4 p-8 '>
				<div className='grid content-center w-full '>
					<div>
						<h3 className='py-2'>Call us now</h3>
						<a className='py-2 text-accent' href='tel:+27740491433'>
							+27 740 491 433
						</a>
						<h1 className='py-2 text-theme'>Because Money</h1>
						<h3 className='py-2'>Doesen't come with instructions</h3>
						<div className='py-2'>
							<a>info@kingtax.co.za</a>
						</div>
						<div className='my-2 '>
							<a className='p-2 bg-accent' href='mailto:info@kingtax.co.za'>
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

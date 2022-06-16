import { BsGear } from 'react-icons/bs';

const Hero = () => {
	return (
		<div
			id='home'
			className="box-shadow bg-[url('/images/hero-bg-2.jpg')] bg-cover bg-no-repeat text-white ">
			<div className='max-height-screen box mx-auto  grid h-screen w-full  max-w-[1240px] content-center gap-4 p-8 '>
				<div className='grid content-center w-full '>
					<div>
						<h3>Call us now</h3>
						<a href='tel:+27740491433'>+27 740 491 433</a>
						<h1>Because Money</h1>
						<h3>Doesen't come with instructions</h3>
						<div>
							<a href='mailto:info@kingtax.co.za'>FREE CONSULTATION</a>
						</div>
						<div>
							<a href='mailto:info@kingtax.co.za'>info@kingtax.co.za</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;

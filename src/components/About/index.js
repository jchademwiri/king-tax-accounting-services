import Image from 'next/image';

const About = () => {
	return (
		<>
			<section id='about' className='xs:my-8 xs:place-items-center xs:py-8'>
				<div className='grid md:grid-cols-2 mx-auto gap-4 w-11/12  max-w-[1240px]'>
					<div className='py-8'>
						<h1 className='my-4 text-left p-2'>About Us</h1>
						<p className='px-2 mb-7 '>
							<h3 className='text-accent'>
								We deliver our work efficiently and effectiveley.
							</h3>
							King Tax Accounting is based in Centurion, Johannesburg. The
							company directors have more than 20 years combined experience.
							These are dedicated and hardworking individuals with many years of
							collective experience, having also worked in the public and
							private sectors of South Africa.
						</p>
						<div className='px-2'>
							<a
								target='_blank'
								rel='noreferrer'
								className='py-4  px-6 font-semibold rounded bg-primary uppercase'
								href='https://wa.me/message/GN3V7YGW4CIDO1'>
								GET IN TOUCH NOW
							</a>
						</div>
					</div>
					<div className="md:bg-[url('/images/king-tax-about.jpg')] bg-cover bg-no-repeat"></div>
				</div>
			</section>
		</>
	);
};

export default About;

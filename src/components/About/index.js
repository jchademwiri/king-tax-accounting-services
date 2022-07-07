const About = () => {
	return (
		<section
			id='about'
			className='grid min-h-screen p-4 xs:my-8 xs:place-items-center xs:p-8'>
			{/* <h1 className='my-4 text-left'>About Us</h1> */}
			<div className='max-w-[1240px] w-11/12'>
				<div className='grid gap-4 xs:grid-cols-2 md:grid-cols-4 '>
					<h2 className='self-center text-2xl font-bold xs:col-span-2 xs:grid xs:grid-cols-2 xs:gap-4 md:col-span-3 md:text-5xl md:grid-cols-3'>
						<span className='md:col-span-2'>
							We deliver our work efficiently and effectiveley
						</span>
					</h2>
					<p className='text-gray-400 xs:row-start-2 xs:col-start-2 xs:self-center md:col-start-1 md:col-span-2 md:pr-12 md:text-lg'>
						King Tax Accounting is based in Centurion, Johannesburg. The company
						directors have more than 20 years combined experience.
					</p>
					<div className='hidden h-10 p-4 text-2xl font-bold rounded md:text-3xl bg-accent xs:h-auto xs:square xs:grid place-items-center'>
						Why choose us?
					</div>
					<div className='hidden h-10 p-4 text-2xl font-bold rounded md:text-3xl bg-primary xs:h-auto xs:square xs:grid place-items-center'>
						Flexible Pricing Structure
					</div>
					<div className='hidden h-10 text-2xl font-bold rounded md:text-3xl bg-primary/60 xs:h-auto xs:square xs:grid place-items-center'>
						One Stop Solution
					</div>
					<div className='hidden h-10 p-4 text-2xl font-bold bg-blue-500 rounded md:text-3xl xs:h-auto xs:square xs:grid place-items-center'>
						No Lengthy Contracts
					</div>
					<div className='hidden h-10 text-2xl font-bold rounded bg-secondary md:text-3xl xs:h-auto xs:square xs:grid place-items-center '>
						Fast and Reliable
					</div>
					<div className='text-gray-400 xs:row-start-4 md:row-start-3 md:col-start-3 xs:h-auto md:col-span-2 xs:grid place-items-center md:px-4'>
						These are dedicated and hardworking individuals with many years of
						collective experience, having also worked in the public and private
						sectors of South Africa.
					</div>
					<div className='hidden h-10 text-2xl font-bold rounded bg-primary/20 md:text-3xl xs:h-auto xs:square xs:grid place-items-center'>
						CSD
					</div>
					<div className='h-10 row-start-7 p-2 text-2xl font-bold rounded bg-accent xs:row-start-6 md:row-start-4 md:col-start-4 md:text-3xl xs:h-auto xs:square xs:grid place-items-center'>
						We Got Your Back
					</div>
					<p className='text-gray-400 xs:col-start-2 xs:row-start-6 xs:self-center md:col-start-1 md:row-start-4 md:col-span-2 md:pr-12 md:text-lg'>
						At King Tax Accounting we understand that no two clients are the
						same. Our services are therefore designed for the specific needs of
						each client, no two clients are ever treated the same.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;

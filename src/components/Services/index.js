import { services } from './data';
const Services = () => {
	return (
		<section id='services' className=''>
			<div className=' mx-auto grid w-11/12  max-w-[1240px] '>
				<h2 className='pb-4 my-4 sm:text-center'>Our Services</h2>
				<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
					{services.map((service, index) => (
						<div key={index} className='p-5 rounded bg-primary/5'>
							<div className='mb-1 border-b-2'>
								<h3 className='my-2 text-2xl '>{service.name}</h3>
							</div>
							<div className='text-gray-400'>
								{service.items.map((item, index) => (
									<div key={index} className=''>
										<p className=''>{item}</p>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;

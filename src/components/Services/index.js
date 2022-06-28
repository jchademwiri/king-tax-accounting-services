import { services } from './data';
const Services = () => {
	return (
		<section id='services'>
			<div className=' mx-auto grid w-11/12  max-w-[1240px] p-4 py-8'>
				<h2 className='py-2 my-2 text-center'>Our Services </h2>
				<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
					{services.map((service, index) => (
						<div key={index} className='py-2'>
							<div className=''>
								<h3 className='my-2 text-2xl'>{service.name}</h3>
							</div>
							<div className=''>
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

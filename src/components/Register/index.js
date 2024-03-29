import Image from 'next/image';
import { steps } from './data';

const Register = () => {
	return (
		<section className='w-full py-4 my-4 '>
			<div className='mx-auto   grid w-11/12 max-w-[1240px]  '>
				<div className='mb-4 text-center '>
					<h2>How to register a company</h2>
					<p className='p-2 text-accent'>
						All you need is your ID document. No paperwork required.
					</p>
				</div>
				<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
					{steps &&
						steps.map((step, index) => (
							<div
								key={index}
								className='p-4 rounded-md service-box bg-primary/5'>
								<div>
									<div>
										<Image
											src={step.icon}
											alt={step.title}
											width={60}
											height={60}
										/>
									</div>
									<div className='box-title'>
										<h3 className='uppercase text-secondary/80'>
											{step.title}
										</h3>
									</div>
									<div className='box-content my-6'>
										<p>{step.description}</p>
									</div>
									{step.link && (
										<div className='py-2 my-2 text-center box-footer'>
											<a
												href={step.link}
												target='_blank'
												rel='noreferrer'
												className='block p-2 font-semibold rounded bg-primary/70'>
												{step.linkText && <>{step.linkText}</>}
											</a>
										</div>
									)}
								</div>
							</div>
						))}
				</div>
			</div>
		</section>
	);
};

export default Register;

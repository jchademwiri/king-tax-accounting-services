import Image from 'next/image';
import { steps } from './data';

const Register = () => {
	return (
		<section>
			<div className='mx-auto grid w-full  max-w-[1240px] p-8  '>
				<div className='mb-4 text-center '>
					<h2>How to register a company</h2>
					<p className='p-2 text-accent'>
						All you need is your ID document. No paperwork required.
					</p>
				</div>
				<div className='grid grid-cols-1 gap-4 my-8 sm:grid-cols-2 lg:grid-cols-4'>
					{steps &&
						steps.map((step, index) => (
							<div
								key={index}
								className='p-5 rounded-md service-box bg-theme/5'>
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
										<h3 className='uppercase text-selected/80'>{step.title}</h3>
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
												className='block p-2 font-semibold rounded bg-theme/70'>
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

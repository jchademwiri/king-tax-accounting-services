import {
	MdLocationPin,
	MdOutlineMarkEmailRead,
	MdLocalPhone,
} from 'react-icons/md';

import CTA from '../CTA';

const Contact = () => {
	const desc =
		'Talk to an export now to get the help you need for your business needs.';
<<<<<<< HEAD
	const text = 'Call Us Now - +27 740 491 433';
	const link = 'tel:+27740491433';
	const bgcolor = 'hsla(240, 100%, 62%, 0.05)';

=======
	const text = 'Call Us Now - +27 72 724 7569';
	const link = 'tel:+27727247569';
	const color = 'hsla(240, 100%, 62%, 0.05)';
>>>>>>> dev
	return (
		<section id='contact'>
			<div className='grid py-8 mx-auto '>
				<CTA
					CTAText={text}
					CTADescription={desc}
					bgcolor={bgcolor}
					link={link}
				/>
			</div>
			<div className='grid place-items-center max-w-[1240px] w-11/12  mx-auto xs:grid-cols-2 md:grid-cols-3 gap-4'>
				<div className='grid w-full py-10 rounded place-items-center bg-primary/5 '>
					<div className='grid gap-4 p-4 text-center place-items-center'>
						<MdLocationPin className='text-4xl text-accent' />
						<h4>Physical Address</h4>
						<address>12 Bauhinia Street, Centurion</address>
					</div>
				</div>
				<div className='grid w-full py-10 rounded place-items-center bg-primary/5 '>
					<div className='grid gap-4 p-4 text-center place-items-center'>
						<MdOutlineMarkEmailRead className='text-4xl text-accent' />

						<h4>Email Address</h4>
						<a
							href='mailto:info@kingtaxaccounting.co.za'
							target='_blank'
							rel='noreferrer'>
							info@kingtaxaccounting.co.za
						</a>
					</div>
				</div>
				<div className='grid w-full py-10 rounded place-items-center bg-primary/5 '>
					<div className='grid gap-4 p-4 text-center place-items-center'>
						<MdLocalPhone className='text-4xl text-accent' />

						<h4>Phone Numbers</h4>
						<a href='tel:+27727247569' target='_blank' rel='noreferrer'>
							+27 740 491 433
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;

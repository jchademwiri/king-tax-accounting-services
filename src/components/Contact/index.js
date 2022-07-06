import CTA from '../CTA';

const Contact = () => {
	const desc =
		'Talk to an export now to get the help you need for your business needs.';
	const text = 'Call Us Now - +27 740 491 433';
	const link = 'tel:+27740491433';
	const bgcolor = 'hsla(240, 100%, 62%, 0.05)';

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
		</section>
	);
};

export default Contact;

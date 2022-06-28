const CTA = ({ CTADescription, CTAText, link }) => {
	return (
		<div>
			<div className='grid w-full my-10 text-center bg-primary/30 '>
				<div className='mx-auto w-11/12 max-w-[1240px]   py-10'>
					<h2>Ready to get started?</h2>
					<p className='py-2 my-2 '>{CTADescription}</p>
					<div className='py-2 my-2'>
						<a
							className='p-4 px-6 font-semibold rounded bg-primary '
							href={link}>
							{CTAText}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CTA;

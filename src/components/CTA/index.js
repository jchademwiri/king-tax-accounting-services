const CTA = ({ CTADescription, CTAText, link, color }) => {
	return (
		<div>
			<div
				className='grid w-full my-10 text-center bg-primary/30 '
				style={{ backgroundColor: color }}>
				<div className='mx-auto w-11/12 max-w-[1240px]   py-10'>
					<h2>Ready to get started?</h2>
					<p className='py-2 my-2 '>{CTADescription}</p>
					<div className='py-2 my-2'>
						<a
							className='p-4 px-6 font-semibold rounded bg-primary/70'
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

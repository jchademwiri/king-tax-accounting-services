import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Register from '../components/Register';
import CTA from '../components/CTA';

export default function Home() {
	const desc =
		'Join thousands of entrepreneurs who trust us to start an official company';
	const text = 'Start Registration';
	const link = 'https://wa.me/message/AQCSRA3QZVK7G1';
	return (
		<>
			<Hero />
			<Register />
			<CTA CTAText={text} CTADescription={desc} link={link} />
			<Services />
			<About />
			<Contact />
		</>
	);
}

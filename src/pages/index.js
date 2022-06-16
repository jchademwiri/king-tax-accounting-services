import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Register from '../components/Register';
import Cta from '../CTA';

export default function Home() {
	return (
		<>
			<Hero />
			<Register />
			<Cta />
			<Services />
			<About />
			<Contact />
		</>
	);
}

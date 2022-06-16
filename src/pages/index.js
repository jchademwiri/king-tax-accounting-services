import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Register from '../components/Register';

export default function Home() {
	return (
		<>
			<Hero />
			<Register />
			<Services />
			<About />
			<Contact />
		</>
	);
}

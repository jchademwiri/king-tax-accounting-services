import Image from 'next/image';
import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Main from '../components/Main';

export default function Home() {
	return (
		<>
			<Hero />
			<Main />
			<About />
			<Contact />
		</>
	);
}

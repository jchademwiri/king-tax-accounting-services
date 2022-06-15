import '../styles/globals.scss';
import Layout from '../components/Layout';
import Router from 'next/router';
import '../styles/nprogress.scss';
import nProgress from 'nprogress';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

function MyApp({ Component, pageProps }) {
	return (
		<Layout className='bg-body'>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;

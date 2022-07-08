import '../styles/globals.scss';
import Layout from '../components/Layout';
import Router from 'next/router';
import '../styles/nprogress.scss';
import nProgress from 'nprogress';
import Script from 'next/script';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			{/* Global Site Tag (gtag.js) - Google Analytics */}
			<Script
				id='ga-mesurement-id'
				strategy='lazyOnload'
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>

			<Script id='ga-mesurement-code' strategy='lazyOnload'>
				{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
			</Script>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;

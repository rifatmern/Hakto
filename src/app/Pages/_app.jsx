// pages/_app.js
import '../styles/globals.css';
import 'slick-carousel/slick/slick.css'; // Slick CSS
import 'slick-carousel/slick/slick-theme.css'; // Slick theme CSS
import useScrollToTop from '../hooks/useScrollToTop';

function MyApp({ Component, pageProps }) {
    useScrollToTop();

    return <Component {...pageProps} />;
}

export default MyApp;

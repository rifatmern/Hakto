// pages/_app.js
import '../styles/globals.css';
import 'slick-carousel/slick/slick.css'; // Slick CSS
import 'slick-carousel/slick/slick-theme.css'; // Slick theme CSS

function MyApp({ Component, pageProps }) {

    return <Component {...pageProps} />;
}

export default MyApp;

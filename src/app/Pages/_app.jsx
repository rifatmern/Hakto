// pages/_app.js
import '../styles/globals.css';
import 'slick-carousel/slick/slick.css'; // Slick CSS
import 'slick-carousel/slick/slick-theme.css'; // Slick theme CSS
import { Provider } from 'react-redux';
import store from '../redux/store';
import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;

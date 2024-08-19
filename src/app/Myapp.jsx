import ContextApi from '@/components/ContextApi';
import '../styles/globals.css';  // or your global stylesheet


function MyApp({ Component, pageProps }) {
    return (
        <ContextApi>
            <Component {...pageProps} />
        </ContextApi>
    );
}

export default MyApp;

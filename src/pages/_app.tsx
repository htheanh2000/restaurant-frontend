import '../styles/global.css';

import type { AppProps } from 'next/app';
import { store } from '../store/store'
import { Provider } from 'react-redux'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
     <Component {...pageProps} />
  </Provider>
);

export default MyApp;

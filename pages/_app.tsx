import { Provider } from 'react-redux';
import { AppProps } from 'next/dist/next-server/lib/router/router';

import { useStore } from '@src/store/createStore';

import '@src/styles/reset.scss';

const CustomApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default CustomApp;

import { Provider } from 'react-redux';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { useStore } from 'store/createStore';

import 'tailwindcss/tailwind.css';

const CustomApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default CustomApp;

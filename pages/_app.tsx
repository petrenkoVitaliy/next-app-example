import { AppProps } from 'next/dist/next-server/lib/router/router';

const CustomApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default CustomApp;

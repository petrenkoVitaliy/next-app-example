import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title: string;
};

const Layout: React.FunctionComponent<Props> = (props) => {
  const { children, title } = props;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">home</Link>
          <br />
          <Link href="/store">store</Link>
          <br />
        </nav>
      </header>
      {children}
      <footer>
        <hr />
        <span>I&apos;m here to stay ©Footer</span>
      </footer>
    </div>
  );
};

export default Layout;

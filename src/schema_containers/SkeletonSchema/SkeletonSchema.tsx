import React, { ReactNode } from 'react';
import Head from 'next/head';

import NavBar from 'components/NavBar/NavBar';
import { NavBarList } from 'constants/navbar';
import Footer from 'components/Footer/Footer';

type Props = {
  children?: ReactNode;
  title: string;
};

export const SkeletonSchema: React.FunctionComponent<Props> = (props) => {
  const { children, title } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="w-full h-screen bg-green-500 flex flex-col">
        <NavBar items={NavBarList} />
        <div className="w-full bg-yellow-400 flex-grow">{children}</div>
        <Footer />
      </div>
    </>
  );
};

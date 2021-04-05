import React, { ReactNode } from 'react';
import Head from 'next/head';

import { NavBar } from '@src/components/NavBar/NavBar';
import { NavBarList } from '@src/constants/navbar';
import { Footer } from '@src/components/Footer/Footer';

import classnames from './index.module.scss';

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

      <div className={classnames.page}>
        <NavBar items={NavBarList} />
        <div className={classnames.content}>{children}</div>
        <Footer items={NavBarList} />
      </div>
    </>
  );
};

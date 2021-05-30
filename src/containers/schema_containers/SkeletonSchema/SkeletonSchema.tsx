import React, { ReactNode, useEffect, useRef } from 'react';
import Head from 'next/head';

import { NavBar } from '@src/components/NavBar/NavBar';
import { NavBarList } from '@src/constants/navbar';
import { Footer } from '@src/components/Footer/Footer';

import classnames from './index.module.scss';
import { useWindowSize } from '@src/utils/hooks/useWindowSize';
import { commonStore } from '@src/store';
import { useDispatch } from 'react-redux';

type Props = {
  children?: ReactNode;
  title: string;
};

export const SkeletonSchema: React.FunctionComponent<Props> = (props) => {
  const dispatch = useDispatch();

  const { children, title } = props;

  const pageContainerRef = useRef<HTMLDivElement>(null);

  const { windowSize } = useWindowSize(pageContainerRef);

  useEffect(() => {
    if (windowSize) {
      dispatch(commonStore.actions.updateWindowSize({ windowSize }));
    }
  }, [windowSize, dispatch]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={classnames.page} ref={pageContainerRef}>
        <NavBar items={NavBarList} />
        <div className={classnames.content}>{children}</div>
        <Footer items={NavBarList} />
      </div>
    </>
  );
};

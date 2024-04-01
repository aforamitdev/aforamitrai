import { AnimateSharedLayout } from 'framer-motion';
import { AppProps } from 'next/app';
import React from 'react';

type Props = {};

const Layout = ({ Component, pageProps }: AppProps) => {
  return (
    <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
  );
};

export default Layout;

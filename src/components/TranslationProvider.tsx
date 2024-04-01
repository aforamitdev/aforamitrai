'use client';

import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';
import React, { Children, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

const slideUp = {
  name: 'Slide Up',
  variants: {
    initial: {
      opacity: 0,
      top: '100vh',
      scale: 0.4,
    },
    animate: {
      opacity: 1,
      top: '0vh',
      scale: 1,
    },
    exit: {
      opacity: 0,
      top: '100vh',
      scale: 0.4,
    },
  },
  transition: {
    duration: 0.7,
  },
};
const TranslationProvider = ({
  children,
  Component,
  pageProps,
  router,
}: Props & AppProps) => {
  return <AnimatePresence mode='wait'>{children}</AnimatePresence>;
};

export default TranslationProvider;

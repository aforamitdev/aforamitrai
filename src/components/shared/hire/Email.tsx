'use client';
import { Button } from '@radix-ui/themes';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { GoCopy } from 'react-icons/go';

type Props = {};

const Email = (props: Props) => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    setCopied(true);
    navigator.clipboard.writeText('aforamitrai@gmail.com');
  };

  useEffect(() => {
    if (copied) {
      const tm = setTimeout(() => {
        setCopied(false);
      }, 1000);
      return () => {
        clearTimeout(tm);
      };
    }
  }, [copied]);

  return (
    <Button size={'2'} variant='soft' onClick={copyToClipboard}>
      <GoCopy />
      {!copied ? <EmailText /> : <Copiede />}
    </Button>
  );
};

const Copiede = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      Copied !!
    </motion.div>
  );
};

const EmailText = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      Copy Email
    </motion.div>
  );
};

export default Email;

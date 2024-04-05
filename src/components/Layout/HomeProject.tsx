'use client';
import { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import ProfileContainer from '../profile/ProfileContainer';
import { AnimatePresence, Variant, Variants, motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';

const homePageVariant = {
  start: { height: 0 },
  end: { height: 320 },
};

const projectPageVariant = {
  start: { heigh: 320, opacity: 1 },
  end: { height: 0, opacity: 0 },
};

function HomeProject({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [variant, setVariant] = useState('');
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <>
      <div className='w-full'>
        <div className='flex  flex-col'>
          <AnimatePresence>
            <motion.div
              variants={path === '/' ? homePageVariant : projectPageVariant}
              initial='start'
              animate='end'
            >
              <ProfileContainer show={false} />
            </motion.div>
          </AnimatePresence>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}

export default HomeProject;

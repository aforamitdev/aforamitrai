'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { useParams, usePathname } from 'next/navigation';

type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      <AnimatePresence mode='popLayout' initial>
        <main className='mx-auto  font-poppins flex'>asa </main>
      </AnimatePresence>
    </div>
  );
};

export default Page;

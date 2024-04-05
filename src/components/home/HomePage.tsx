'use client';
import React, { Children } from 'react';

import LetsWorkTogether from '../shared/work/LetsWorkTogether';

type Props = {
  children: React.ReactNode;
};

const HomePage = ({ children }: Props) => {
  return (
    <div className='flex flex-col w-full'>
      <div className='flex  flex-col '>{children}</div>
      <div className='flex flex-col'>
        <div className='py-10  '>
          <LetsWorkTogether />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

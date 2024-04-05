'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import ProjectPage from '@/components/projects/ProjectPage';
import HomeProject from '@/components/Layout/HomeProject';

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <AnimatePresence mode='popLayout' initial>
        <main className='mx-auto  font-poppins flex'>
          <HomeProject>
            <ProjectPage> Project Page</ProjectPage>
          </HomeProject>
        </main>
      </AnimatePresence>
    </div>
  );
};

export default page;

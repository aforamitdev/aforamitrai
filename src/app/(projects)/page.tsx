'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import ProjectPage from '@/components/projects/ProjectPage';
import HomeProject from '@/components/Layout/HomeProject';

const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AnimatePresence mode='popLayout' initial>
        <main className='mx-auto  font-poppins flex '>
          <HomeProject>
            <ProjectPage>
              <div className='h-screen'>{children}</div>
            </ProjectPage>
          </HomeProject>
        </main>
      </AnimatePresence>
    </div>
  );
};

export default Page;

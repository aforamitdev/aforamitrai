'use client';
import HomeProject from '@/components/Layout/HomeProject';
import HomePage from '@/components/home/HomePage';
import ProjectContainer from '@/components/projects/ProjectContainer';
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {
  return (
    <AnimatePresence mode='popLayout' initial>
      <main className='  mx-auto  font-poppins flex'>
        {/* <ThemePanel /> */}
        <HomeProject>
          <HomePage>
            <ProjectContainer />
          </HomePage>
        </HomeProject>
      </main>
    </AnimatePresence>
  );
}

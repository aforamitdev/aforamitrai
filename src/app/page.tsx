'use client';
import HomePage from '@/components/home/HomePage';
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {
  return (
    <AnimatePresence mode='popLayout' initial>
      <motion.div initial={{ y: '-20vw' }} animate={{ y: 0 }}>
        <main className='  mx-auto  font-poppins flex'>
          {/* <ThemePanel /> */}
          <HomePage />
        </main>
      </motion.div>
    </AnimatePresence>
  );
}

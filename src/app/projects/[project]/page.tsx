'use client';
import Footer from '@/components/footer/Footer';
import Email from '@/components/hire/Email';
import HireMe from '@/components/hire/HireMe';
import ProfileContainer from '@/components/profile/ProfileContainer';
import ProjectContainer from '@/components/projects/ProjectContainer';
import { Text } from '@radix-ui/themes';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <AnimatePresence mode='popLayout' initial>
        <main className='  mx-auto  font-poppins flex'>
          {/* <ThemePanel /> */}

          <div className='flex flex-col w-full'>
            <div className='flex  flex-col '>
              <motion.div
                initial={{ height: '300px' }}
                animate={{ height: 0 }}
                exit={{ height: 0 }}
              >
                <ProfileContainer />
              </motion.div>

              <ProjectContainer />
            </div>
            <div className='flex flex-col'>
              <div className='py-10  '>
                <div className='flex justify-center flex-col items-center'>
                  <div>
                    <Text color='gray' size={'8'} weight={'medium'}>
                      Lets work together.
                    </Text>
                  </div>
                  <div className='text-gray-700  tracking-widest'>
                    Creating unmatched product experience.
                  </div>
                  <div className='mt-5 flex gap-x-3'>
                    <HireMe />
                    <Email />
                  </div>
                </div>
              </div>

              <Footer />
            </div>
          </div>
        </main>
      </AnimatePresence>
    </div>
  );
};

export default page;

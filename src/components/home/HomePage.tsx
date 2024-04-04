import React from 'react';
import ProfileContainer from '../profile/ProfileContainer';
import ProjectContainer from '../projects/ProjectContainer';
import HireMe from '../hire/HireMe';
import Email from '../hire/Email';
import Footer from '../footer/Footer';
import { Text } from '@radix-ui/themes';

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className='flex flex-col w-full'>
      <div className='flex  flex-col '>
        <ProfileContainer show />
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
  );
};

export default HomePage;

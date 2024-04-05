import React, { Children } from 'react';
import ProfileContainer from '../profile/ProfileContainer';
import ProjectContainer from '../projects/ProjectContainer';
import HireMe from '../shared/hire/HireMe';
import Email from '../shared/hire/Email';
import Footer from '../footer/Footer';
import { Text } from '@radix-ui/themes';
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

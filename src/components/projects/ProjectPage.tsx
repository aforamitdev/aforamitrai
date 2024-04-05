import React from 'react';
import ProfileContainer from '../profile/ProfileContainer';
import ProjectContainer from './ProjectContainer';
import { motion } from 'framer-motion';
import { Text } from '@radix-ui/themes';
import HireMe from '../shared/hire/HireMe';
import Email from '../shared/hire/Email';
import LetsWorkTogether from '../shared/work/LetsWorkTogether';

type Props = {
  children: React.ReactNode;
};

function ProjectPage({ children }: Props) {
  return (
    <div className='flex flex-col w-full'>
      <div className='flex flex-col'>
        <div className='flex  flex-col '>{children}</div>

        <div className='py-10  '>
          <LetsWorkTogether />
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;

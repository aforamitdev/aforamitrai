import React from 'react';
import { GoDotFill } from 'react-icons/go';
import Profile from './Profile';
import { Card, Flex } from '@radix-ui/themes';
import HireMe from '../hire/HireMe';
import Email from '../hire/Email';
import GithubFeed from './github/GithubFeed';
import ActivityFeed from './ActivityFeed';

type Props = {
  show: boolean;
};

function ProfileContainer({ show }: Props) {
  return (
    <>
      <div className='flex justify-between gap-x-4 '>
        <Card className='w-full'>
          <div className='flex justify-between py-3'>
            <div className='flex items-center text-base text-gray-700'>
              <GoDotFill />
              Product Developer
            </div>
            <div
              className='text-xs uppercase  items-center flex px-2 rounded-full text-green-700  font-bold'
              style={{ background: 'rgba(40, 199, 128, 0.15)' }}
            >
              <GoDotFill />
              Available for work
            </div>
          </div>
          <Profile />
          {/* hire me  */}
          <Flex className='flex gap-x-3  items-center'>
            <HireMe />
            <Email />
          </Flex>
        </Card>
        <Card className='w-full'>
          <ActivityFeed />
        </Card>
      </div>
    </>
  );
}

export default ProfileContainer;

import React from 'react';
import { GoDotFill } from 'react-icons/go';
import Profile from './Profile';
import { Card, Flex, Text } from '@radix-ui/themes';
import HireMe from '../shared/hire/HireMe';
import Email from '../shared/hire/Email';
import ActivityFeed from './ActivityFeed';

type Props = {
  show: boolean;
};

function ProfileContainer({ show }: Props) {
  return (
    <>
      <div className='flex justify-between gap-x-4 px-2 flex-col md:flex-row gap-y-3 md:gap-y-0 '>
        <Card className='w-full'>
          <div className='flex justify-between py-3'>
            <div className='flex items-center text-base text-gray-900'>
              <GoDotFill />
              <Text>Product Developer</Text>
            </div>
            <div
              className='text-xs uppercase  items-center flex px-2 rounded-full text-green-700  font-semibold'
              style={{ background: 'rgba(40, 199, 128, 0.15)' }}
            >
              <GoDotFill />
              <Text>Available for work</Text>
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

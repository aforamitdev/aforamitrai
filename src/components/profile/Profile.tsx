import { Avatar, Flex, Text } from '@radix-ui/themes';
import Image from 'next/image';
import React from 'react';

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className='w-full flex justify-between pt-10 '>
      <Flex direction={'column'} className='w-4/5 py-4'>
        <Text size={'8'} weight={'medium'}>
          {"I'm Amit Rai"}
        </Text>
        <div className='py-3 flex flex-col space-y-1'>
          <Text size={'2'}>Full-Stack developer.</Text>
          <Text size={'2'}>
            Currently, fulltime {'<div/>'} operator at KatantaPIM.
          </Text>
        </div>
      </Flex>
      <Flex className='flex justify-between items-center '>
        <div className='relative h-32 w-32'>
          <Image
            src='/projects/profile2.jpg'
            alt='profike'
            className='rounded-full object-cover object-top'
            fill
          />
        </div>
      </Flex>
    </div>
  );
};

export default Profile;

import { Avatar } from '@radix-ui/themes';
import React from 'react';
import { BsLinkedin, BsTwitter, BsTwitterX } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className='bg-gray-200 rounded-lg flex justify-between px-4 py-5'>
      <div className='flex items-center text-base text-gray-700'>
        <GoDotFill />
        Follow Me
      </div>
      <div className='flex  items-center gap-x-3'>
        <Avatar
          className='border bg-white'
          radius='full'
          fallback={<BsTwitterX />}
        />

        <Avatar
          className='border bg-white'
          fallback={<BsLinkedin />}
          radius='full'
        />
      </div>
    </div>
  );
};

export default Footer;

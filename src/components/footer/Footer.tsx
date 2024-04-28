import { Avatar } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';
import { BsLinkedin, BsTwitter, BsTwitterX } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className='bg-white  shadow-sm rounded-lg flex justify-between px-4 py-2 mx-4'>
      <div className='flex items-center text-base text-gray-900'>
        <GoDotFill />
        Follow me
      </div>
      <div className='flex  items-center gap-x-3'>
        <Link href='https://twitter.com/aforamitrai' target='_blank'>
          <Avatar
            size={'2'}
            className='border bg-white'
            fallback={<BsTwitterX />}
          />
        </Link>

        <Link href='https://www.linkedin.com/in/aforamit/' target='_blank'>
          <Avatar
            size={'2'}
            className='border bg-white'
            fallback={<BsLinkedin />}
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;

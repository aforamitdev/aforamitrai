import { Avatar, Box, Button, Card, Flex, Text } from '@radix-ui/themes';
import React from 'react';
import { BiHome } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { GoProjectSymlink } from 'react-icons/go';
import { RiHome6Line } from 'react-icons/ri';
import HeaderLink from './HeaderLink';
import HireMe from '../hire/HireMe';

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <div className='flex justify-between  w-full  border mt-10 px-3 py-2 rounded-lg items-center  mx-4 md:mx-0'>
        <div className='gap-x-2 flex items-center'>
          <Avatar fallback='AR' />
          {/*           
          <Text weight={'bold'}>
            AMIT <Text color='iris'> RAI</Text>
          </Text> */}
        </div>
        <div className='flex gap-x-6'>
          <HeaderLink Icon={<RiHome6Line size='22' />} title='Amit Rai' />
          <HeaderLink Icon={<CgProfile size='22' />} title='about' />
          <HeaderLink Icon={<GoProjectSymlink size='22' />} title='Projects' />
        </div>
        <div>
          <HireMe />
        </div>
      </div>
    </>
  );
};

export default Header;

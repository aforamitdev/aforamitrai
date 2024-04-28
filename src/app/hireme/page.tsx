/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Avatar, Button, Text, TextArea, TextField } from '@radix-ui/themes';
import React from 'react';
import { BsTelegram } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { MdContactMail, MdContacts } from 'react-icons/md';

type Props = {};

const page = (props: Props) => {
  return (
    <div className=' flex flex-col md:flex-row' style={{ height: '80vh' }}>
      <div className='w-full relative   -inset-y-5  -inset-x-5'>
        <img
          src={'/projects/preview.webp'}
          alt='boy staring at universe'
          style={{ height: '105%' }}
          width={'100%'}
          className='  absolute object-cover  md:h-[105%]'
        />
      </div>
      <div className='w-full flex  items-center justify-center flex-col '>
        {/*  */}

        {/*  */}
        {/* <div className=' justify-between py-3  '>
          <div className='flex items-center text-base text-gray-700'>
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
         */}
        <div>
          <div className='flex items-center gap-x-3'>
            <div>
              <Avatar fallback={<FaTelegramPlane />} radius='full' size={'4'} />
            </div>
            <div className='py-5'>
              <div>
                <Text className='text-3xl text-gray-800  font-semibold'>
                  Let's get started
                </Text>
              </div>
              <div>
                <Text>
                  Go an idea needs to be developed ? React out now ...
                </Text>
              </div>
            </div>
          </div>
          <div className=' flex flex-col gap-y-4'>
            <form name='contact' method='POST' data-netlify='true'>
              <div className='flex justify-between gap-x-3'>
                <TextField.Root
                  variant='soft'
                  size={'3'}
                  placeholder='Name'
                  className='w-full'
                  name='name'
                />
                <TextField.Root
                  variant='soft'
                  size={'3'}
                  placeholder='Email'
                  className='w-full'
                  name='email'
                />
              </div>
              <div className='py-5'>
                <TextArea
                  placeholder='Message'
                  variant='soft'
                  className='h-32'
                  name='message'
                />
              </div>
              <Button size={'3'} type='submit' className='w-full'>
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

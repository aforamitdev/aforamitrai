import ContactForm from '@/components/contact/ContactForm';
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Avatar, Button, Text, TextArea, TextField } from '@radix-ui/themes';
import React, { useEffect, useState } from 'react';
import { BsTelegram } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';

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
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

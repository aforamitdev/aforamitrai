import Image from 'next/image';
import React from 'react';

type Props = {
  title: string;
  imageUrl: string;
};

const PIntro = ({ title, imageUrl }: Props) => {
  return (
    <div className=' text-gray-900 '>
      <div className='relative h-14 w-14   '>
        <Image src={imageUrl} fill alt={title} className='rounded-full w-30 ' />
      </div>
      <h1 className='text-3xl font-bold my-5'>{title}</h1>
    </div>
  );
};

export default PIntro;

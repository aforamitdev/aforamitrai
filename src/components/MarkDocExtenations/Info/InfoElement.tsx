import * as React from 'react';
import { Callout, Card } from '@radix-ui/themes';
import { FaInfo } from 'react-icons/fa';

function InfoElement({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className='grid grid-cols-9 text-sm my-1.5'>
      <div className='col-span-3 text-gray-700'>{title}</div>
      <div className='col-span-6 text-gray-900'>{children}</div>
    </div>
  );
}

export default InfoElement;

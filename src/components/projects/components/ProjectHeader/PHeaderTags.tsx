import React from 'react';

type Props = {
  title: string;
  value: string;
};

const PHeaderTags = (props: Props) => {
  return (
    <div className='flex py-1 text-sm'>
      <div className='w-40 text-gray-700'>{props.title}</div>
      <div className='text-gray-900'>{props.value}</div>
    </div>
  );
};

export default PHeaderTags;

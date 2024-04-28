import React from 'react';
import HireMe from '../hire/HireMe';
import Email from '../hire/Email';
import { Text } from '@radix-ui/themes';

type Props = {};

const LetsWorkTogether = (props: Props) => {
  return (
    <div className='flex justify-center flex-col items-center'>
      <div>
        <Text className='text-gray-900' size={'8'} weight={'medium'}>
          Lets work together.
        </Text>
      </div>
      <div className='text-gray-900 '>
        Creating unmatched product experience.
      </div>
      <div className='mt-5 flex gap-x-3'>
        <HireMe />
        <Email />
      </div>
    </div>
  );
};

export default LetsWorkTogether;

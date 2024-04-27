/* eslint-disable react/no-unescaped-entities */
import { Text } from '@radix-ui/themes';
import React from 'react';

type Props = {};

function page({}: Props) {
  return (
    <div>
      <Text size={'5'} weight='bold'>
        It's me , Amit
      </Text>
    </div>
  );
}

export default page;

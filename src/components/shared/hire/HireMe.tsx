import { Button } from '@radix-ui/themes';
import React from 'react';
import { GoPlusCircle } from 'react-icons/go';

type Props = {};

function HireMe({}: Props) {
  return (
    <>
      <Button size={'2'}>
        <GoPlusCircle />
        Hire Me
      </Button>
    </>
  );
}

export default HireMe;

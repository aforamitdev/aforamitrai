import { Button, Link } from '@radix-ui/themes';
import React from 'react';
import { GoPlusCircle } from 'react-icons/go';

type Props = {};

function HireMe({}: Props) {
  return (
    <>
      <Link href='/hireme'>
        <Button size={'2'}>
          <GoPlusCircle />
          Hire Me
        </Button>
      </Link>
    </>
  );
}

export default HireMe;

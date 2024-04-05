import { Button } from '@radix-ui/themes';
import React from 'react';
import { GoCopy } from 'react-icons/go';

type Props = {};

const Email = (props: Props) => {
  return (
    <Button size={'2'} variant='soft'>
      <GoCopy />
      Copy Email
    </Button>
  );
};

export default Email;

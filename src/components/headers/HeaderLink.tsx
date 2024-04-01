import { Avatar, IconButton, Tooltip } from '@radix-ui/themes';
import React from 'react';
import { IconType } from 'react-icons';

type Props = {
  Icon: React.ReactElement;
  title: string;
};

const HeaderLink = ({ Icon, title }: Props) => {
  return (
    <Tooltip content={title}>
      <IconButton radius='full' variant='ghost'>
        {Icon}
      </IconButton>
    </Tooltip>
  );
};

export default HeaderLink;

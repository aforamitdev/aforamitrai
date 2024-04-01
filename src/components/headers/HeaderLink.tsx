import { Avatar, IconButton, Tooltip } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';

type Props = {
  Icon: React.ReactElement;
  title: string;
  link: string;
};

const HeaderLink = ({ Icon, title, link }: Props) => {
  return (
    <Tooltip content={title}>
      <Link href={link}>
        <IconButton radius='full' variant='ghost'>
          {Icon}
        </IconButton>
      </Link>
    </Tooltip>
  );
};

export default HeaderLink;

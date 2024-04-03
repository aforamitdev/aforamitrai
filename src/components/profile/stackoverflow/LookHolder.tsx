import { Avatar, Tooltip } from '@radix-ui/themes';
import React from 'react';

type Props = {
  title: string;
  Icon: React.ReactElement;
};

const LookHolder = ({ title, Icon }: Props) => {
  return (
    <Tooltip content={title}>
      <div>
        <Avatar size={'2'} fallback={Icon}></Avatar>
      </div>
    </Tooltip>
  );
};

export default LookHolder;

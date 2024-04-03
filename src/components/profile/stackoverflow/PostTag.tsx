import { Badge } from '@radix-ui/themes';
import React from 'react';

type Props = {
  title: string;
  Icon: React.ReactElement;
};

function PostTag({ title, Icon }: Props) {
  return (
    <Badge color='iris' variant='soft'>
      <p className='text-xs flex text-end'>
        &nbsp;{Icon} &nbsp;
        {title}
      </p>
    </Badge>
  );
}

export default PostTag;

import * as React from 'react';
import { Callout } from '@radix-ui/themes';
import { FaInfo } from 'react-icons/fa';

function InfoRenderer({ children }: { children: React.ReactNode }) {
  console.log(children);
  return <div>{children}</div>;
}

export default InfoRenderer;

import * as React from 'react';
import { Callout } from '@radix-ui/themes';
import { FaInfo } from 'react-icons/fa';

function CalloutRenderer({
  title,
  children,
  type,
}: {
  title: string;
  children: React.ReactNode;
  type: string;
}) {
  console.log(children);
  console.log(title);
  return (
    <Callout.Root>
      <Callout.Icon>
        <FaInfo />
      </Callout.Icon>
      <Callout.Text>{children}</Callout.Text>
    </Callout.Root>
  );
}

export default CalloutRenderer;

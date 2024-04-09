import * as React from 'react';
import { Card } from '@radix-ui/themes';

function InfoRenderer({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative'>
      <Card className='bg-slate-200'>
        <div>{children}</div>
      </Card>
    </div>
  );
}

export default InfoRenderer;

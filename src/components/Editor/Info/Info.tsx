import * as React from 'react';
import { Card } from '@radix-ui/themes';

function Info({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Card>{children}</Card>
    </div>
  );
}

export default Info;

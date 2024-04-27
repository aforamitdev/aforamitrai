'use client';
import * as Popover from '@radix-ui/react-popover';
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  Inset,
  Text,
  TextArea,
} from '@radix-ui/themes';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title: string;
};

const ExpertisePop = ({ children, title }: Props) => {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Avatar fallback={children as NonNullable<ReactNode>} />
      </Popover.Trigger>
      <Popover.Content>
        <Card className='inset-x-10 inset-y-2'>
          <Box>
            <Text as='div' size='2' weight='bold'>
              {title}
            </Text>
            <Text as='div' size='2' color='gray'>
              Engineering
            </Text>
          </Box>
        </Card>
      </Popover.Content>
    </Popover.Root>
  );
};

export default ExpertisePop;

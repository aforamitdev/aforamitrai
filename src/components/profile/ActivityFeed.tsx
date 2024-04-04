import { Box, Inset, ScrollArea, Tabs, Text } from '@radix-ui/themes';
import React from 'react';
import { BsGithub, BsStackOverflow } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import StackOverflow from './stackoverflow/StackOverflow';
import GithubFeed from './github/GithubFeed';

type Props = {};

const ActivityFeed = (props: Props) => {
  return (
    <div>
      <Tabs.Root defaultValue='github' onChange={(e) => console.log(e)}>
        <Inset>
          <Tabs.List color='iris'>
            <Tabs.Trigger value='github'>
              <div className='flex items-center gap-x-2'>
                <BsGithub />
                <Text color='gray'> Github</Text>
              </div>
            </Tabs.Trigger>
            <Tabs.Trigger value='stackoverflow'>
              <div className='flex items-center gap-x-2'>
                <BsStackOverflow />
                <Text color='gray'>Stack Overflow</Text>
              </div>
            </Tabs.Trigger>
            <Tabs.Trigger value='blog'>
              <div className='flex items-center gap-x-2'>
                <CgWebsite />
                <Text color='gray'>Blog</Text>
              </div>
            </Tabs.Trigger>
          </Tabs.List>

          <Box>
            <Tabs.Content value='github'>
              <ScrollArea
                type='always'
                scrollbars='vertical'
                style={{ height: '300px' }}
              >
                <GithubFeed />
              </ScrollArea>
            </Tabs.Content>

            <Tabs.Content value='stackoverflow'>
              <StackOverflow />
            </Tabs.Content>

            <Tabs.Content value='blog'>
              <ScrollArea
                type='always'
                scrollbars='vertical'
                style={{ height: '300px' }}
              >
                Under construction
              </ScrollArea>
            </Tabs.Content>
          </Box>
        </Inset>
      </Tabs.Root>
    </div>
  );
};

export default ActivityFeed;

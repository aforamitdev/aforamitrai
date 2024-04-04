import React from 'react';
import { Box, ScrollArea, Text } from '@radix-ui/themes';

import Commits from './Commits';

import { useAppProvide } from '@/Providers/AppProvider';

type Props = {};

const GithubFeed = (props: Props) => {
  const { githubFeed } = useAppProvide();
  return (
    <div>
      <Box>
        <Text size='2'>
          <ScrollArea
            type='always'
            scrollbars='vertical'
            style={{ height: '300px' }}
          >
            {githubFeed?.length &&
              githubFeed?.map((feed, index) => {
                return (
                  <div key={feed.id}>
                    <Commits commit={feed} index={index} />
                  </div>
                );
              })}
          </ScrollArea>
        </Text>
      </Box>
    </div>
  );
};

export default GithubFeed;

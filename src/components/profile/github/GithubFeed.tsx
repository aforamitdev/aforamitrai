import React, { useEffect, useState } from 'react';
import { IGithubFeed } from '../../../../types/type';
import {
  Badge,
  Box,
  Button,
  IconButton,
  Inset,
  ScrollArea,
  SegmentedControl,
  Tabs,
  Text,
} from '@radix-ui/themes';
import { GoDotFill } from 'react-icons/go';
import Comments from './Commits';
import Commits from './Commits';
import { BsGithub, BsStackOverflow } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import StackOverflow from '../stackoverflow/StackOverflow';
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

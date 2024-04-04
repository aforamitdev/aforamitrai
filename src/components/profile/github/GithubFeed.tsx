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
import { BsGithub, BsNewspaper, BsStackOverflow } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import StackOverflow from '../stackoverflow/StackOverflow';

type Props = {};

const GithubFeed = (props: Props) => {
  const [feedData, setData] = useState<IGithubFeed[]>([]);
  const getData = async () => {
    const response = await fetch(
      '  https://api.github.com/users/aforamitdev/events',
      {
        headers: new Headers({
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        }),
      }
    );
    const feed = await response.json();
    setData(feed);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {/* <div className='flex items-center text-base text-gray-700 pt-3'>
        <GoDotFill />
        Current Activities
      </div> */}
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
              <Text size='2'>
                <ScrollArea
                  type='always'
                  scrollbars='vertical'
                  style={{ height: '300px' }}
                >
                  {feedData?.length &&
                    feedData?.map((feed, index) => {
                      return (
                        <div key={feed.id}>
                          <Commits commit={feed} index={index} />
                        </div>
                      );
                    })}
                </ScrollArea>
              </Text>
            </Tabs.Content>

            <Tabs.Content value='stackoverflow'>
              <StackOverflow />
            </Tabs.Content>

            <Tabs.Content value='blog'>
              <Text size='2'>Under construction..</Text>
            </Tabs.Content>
          </Box>
        </Inset>
      </Tabs.Root>
    </div>
  );
};

export default GithubFeed;

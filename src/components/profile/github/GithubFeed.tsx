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
      <Tabs.Root defaultValue='github'>
        <Inset>
          <Tabs.List>
            <Tabs.Trigger value='github'>
              <Button variant='ghost'>
                <BsGithub />
                <Text color='gray'> Github</Text>
              </Button>
            </Tabs.Trigger>
            <Tabs.Trigger value='stackoverflow'>
              <Button variant='ghost'>
                <BsStackOverflow />
                <Text color='gray'>Stack Overflow</Text>
              </Button>
            </Tabs.Trigger>
            <Tabs.Trigger value='blog'>
              <Button variant='ghost'>
                <CgWebsite />
                <Text color='gray'>Blog</Text>
              </Button>
            </Tabs.Trigger>
          </Tabs.List>

          <Box>
            <Tabs.Content value='github'>
              <Text size='2'>
                <ScrollArea
                  type='always'
                  scrollbars='vertical'
                  style={{ height: '242px' }}
                >
                  {feedData.length &&
                    feedData.map((feed, index) => {
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

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
import { BsGithub } from 'react-icons/bs';

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
                Github
              </Button>
            </Tabs.Trigger>
            <Tabs.Trigger value='comments'>Comments</Tabs.Trigger>
            <Tabs.Trigger value='settings'>Settings</Tabs.Trigger>
          </Tabs.List>

          <Box>
            <Tabs.Content value='github'>
              <Text size='2'>
                <ScrollArea
                  type='always'
                  scrollbars='vertical'
                  style={{ height: '288px' }}
                >
                  {feedData.length &&
                    feedData.map((feed, index) => {
                      console.log(feed);
                      return (
                        <div key={feed.id}>
                          <Commits commit={feed} index={index} />
                        </div>
                      );
                    })}
                </ScrollArea>
              </Text>
            </Tabs.Content>

            <Tabs.Content value='comments'>
              <Text size='2'>Access and update your documents.</Text>
            </Tabs.Content>

            <Tabs.Content value='settings'>
              <Text size='2'>
                Edit your profile or update contact information.
              </Text>
            </Tabs.Content>
          </Box>
        </Inset>
      </Tabs.Root>
    </div>
  );
};

export default GithubFeed;

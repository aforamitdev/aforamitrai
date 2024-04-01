import React, { useEffect, useState } from 'react';
import { GithubFeed } from '../../../types/type';
import {
  Box,
  Inset,
  ScrollArea,
  SegmentedControl,
  Tabs,
  Text,
} from '@radix-ui/themes';
import { GoDotFill } from 'react-icons/go';

type Props = {};

const GithubFeed = (props: Props) => {
  const [feedData, setData] = useState<GithubFeed[]>([]);
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
      <div className='flex items-center text-base text-gray-700 pt-3'>
        <GoDotFill />
        Current Activities
      </div>
      <Tabs.Root defaultValue='commits'>
        <Tabs.List>
          <Tabs.Trigger value='commits'>Commits</Tabs.Trigger>
          <Tabs.Trigger value='comments'>Comments</Tabs.Trigger>
          <Tabs.Trigger value='settings'>Settings</Tabs.Trigger>
        </Tabs.List>

        <Box pt='3'>
          <Tabs.Content value='commits'>
            <Text size='2'>Make changes to your account.</Text>
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
      </Tabs.Root>
      <Inset>
        <ScrollArea
          type='always'
          scrollbars='vertical'
          style={{ height: '288px' }}
        >
          {feedData.length &&
            feedData?.map((feed) => {
              return (
                <div key={feed.id}>
                  {feed.payload.commits?.map((s) => s.message)}
                </div>
              );
            })}
        </ScrollArea>
      </Inset>
    </div>
  );
};

export default GithubFeed;

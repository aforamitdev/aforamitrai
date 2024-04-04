import React, { useEffect, useState } from 'react';
import { IStackOverFlow } from '../../../../types/stackoverflow';
import { BiBadge, BiQuestionMark, BiSolidCommentEdit } from 'react-icons/bi';
import { MdQuestionAnswer } from 'react-icons/md';
import { SiAnswer } from 'react-icons/si';
import { RiMedalLine, RiQuestionAnswerFill } from 'react-icons/ri';
import {
  Avatar,
  Blockquote,
  Tooltip,
  Badge,
  ScrollArea,
} from '@radix-ui/themes';
import Link from 'next/link';
import { BsFillPatchQuestionFill, BsStackOverflow } from 'react-icons/bs';
import LookHolder from './LookHolder';
import PostTag from './PostTag';
import { FaMedal } from 'react-icons/fa';
import { time_ago } from '@/helpers/timeago';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';

type Props = {};

function StackOverflow({}: Props) {
  const [feedData, setData] = useState<IStackOverFlow[]>([]);
  const getData = async () => {
    const response = await fetch(
      'https://api.stackexchange.com/2.3/users/10148612/timeline?sort=creation&page=1&pagesize=100&site=stackoverflow'
    );
    const feed = await response.json();
    setData(feed.items);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <ScrollArea
        type='always'
        scrollbars='vertical'
        style={{ height: '300px' }}
      >
        {feedData
          ?.filter((s) => s.timeline_type !== 'revision')
          .map((post, i) => {
            return (
              <div key={i} className=' border-t px-5'>
                <StackSwitch post={post} />
              </div>
            );
          })}
      </ScrollArea>
    </div>
  );
}

const StackSwitch = ({ post }: { post: IStackOverFlow }) => {
  switch (post.timeline_type) {
    case 'answered':
      return <Answer answer={post} />;
      break;
    case 'accepted':
      return <Accepted accepted={post} />;
      break;
    case 'asked':
      return <Aasked asked={post} />;
      break;
    case 'badge':
      return <StackBadge badge={post} />;
      break;
    case 'commented':
      return <Commented commented={post} />;
      break;
    default:
      return <>{post.timeline_type}</>;
      break;
  }
};

const Answer = ({ answer }: { answer: IStackOverFlow }) => {
  return (
    <div className='flex items-center gap-x-3 h-full py-3 relative'>
      <TimeLog time={answer.creation_date} />
      <LookHolder title='Amit answered on stackoverflow' Icon={<SiAnswer />} />

      <div>
        <PostTag
          title='New answer on stackoverflow '
          Icon={<BsStackOverflow />}
        />

        <div className='text-xs  py-2 font-poppins'>
          <Link
            href={`https://stackoverflow.com/a/${answer.post_id}/10148612`}
            target='_blank'
          >
            <Blockquote size={'1'}>{answer.title}</Blockquote>
          </Link>
        </div>
      </div>
    </div>
  );
};

const StackBadge = ({ badge }: { badge: IStackOverFlow }) => {
  return (
    <div className='flex items-center gap-x-3 h-full py-3 relative'>
      <TimeLog time={badge.creation_date} />

      <LookHolder
        title='Amit earnd new badge in stackoverflow '
        Icon={<FaMedal />}
      />
      <Link
        href={`https://stackoverflow.com/users/10148612/amit-rai?tab=badges&sort=recent`}
        target='_blank'
      >
        <PostTag
          title='Amit earn new badge on stackoverflow'
          Icon={<RiMedalLine />}
        />
      </Link>
    </div>
  );
};

const Accepted = ({ accepted }: { accepted: IStackOverFlow }) => {
  return (
    <div className='flex items-center gap-x-3 h-full py-3 relative'>
      <TimeLog time={accepted.creation_date} />

      <LookHolder
        title='Amit answer accepted for a question  '
        Icon={<IoCheckmarkDoneCircle />}
      />
      <Link
        href={`https://stackoverflow.com/a/${accepted.post_id}/10148612`}
        target='_blank'
      >
        <PostTag
          title='Amit"s answer accepted on a stackoverflow answer'
          Icon={<RiMedalLine />}
        />
      </Link>
    </div>
  );
};

const Aasked = ({ asked }: { asked: IStackOverFlow }) => {
  return (
    <div className='flex items-center gap-x-3 h-full py-3 relative'>
      <TimeLog time={asked.creation_date} />
      <LookHolder
        title='Amit asked a questions  '
        Icon={<BsFillPatchQuestionFill />}
      />{' '}
      <div className='text-xs pt-1'>
        <Link
          href={`https://stackoverflow.com/a/${asked.post_id}/10148612`}
          target='_blank'
        >
          {asked.title}
        </Link>
      </div>
    </div>
  );
};

const Commented = ({ commented }: { commented: IStackOverFlow }) => {
  return (
    <div className='flex items-center gap-x-3 h-full py-3 relative'>
      <LookHolder
        title='Amit commented on a stackoverflow post '
        Icon={<BiSolidCommentEdit />}
      />
      <TimeLog time={commented.creation_date} />
      <div className='relative'>
        <div className='text-xs  py-2 font-poppins'>
          <Link
            href={`https://stackoverflow.com/a/${commented.post_id}/10148612`}
            target='_blank'
          >
            {commented.title}
          </Link>
        </div>
        <div>
          <Blockquote size={'1'}>{commented.detail}</Blockquote>
        </div>
      </div>
    </div>
  );
};

const TimeLog = ({ time }: { time: number }) => {
  return (
    <div className=' text-xs flex  top-0 right-0 justify-end absolute pt-1 '>
      <div>{time_ago(Number(time * 1000))}</div>
    </div>
  );
};

export default StackOverflow;

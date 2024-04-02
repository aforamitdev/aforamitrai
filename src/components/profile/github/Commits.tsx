import React from 'react';
import { Commit, IGithubFeed } from '../../../../types/type';
import Image from 'next/image';
import { Badge, Text } from '@radix-ui/themes';
import { BsGithub } from 'react-icons/bs';
import { GiBranchArrow } from 'react-icons/gi';
import { GoGitBranch } from 'react-icons/go';
import { IoMdGitBranch } from 'react-icons/io';
import Link from 'next/link';
import { time_ago } from '@/helpers/timeago';
import PushEvent from './PushEvent';

type Props = {
  commit: IGithubFeed;
  index: number;
};

function Commits({ commit, index }: Props) {
  return (
    <div
      className={`px-5  flex gap-x-2   items-center ${
        index % 2 === 0 ? 'bg-gray-100' : ''
      }`}
    >
      {commit.type === 'PushEvent' && <PushEvent event={commit} />}
    </div>
  );
}

function CreateEvent() {
  return <div>create event</div>;
}

{
  /* <div className='relative h-10 w-10 '>
        <Image
          src={commit.actor.avatar_url}
          alt={commit.actor.id || 'a'}
          className=' absolute  rounded-full'
          fill
        />
      </div>
      <div>
        {commit.actor.display_login} commited on {commit.payload.ref}
        <CommitTexts commits={commit.payload.commits} />
        {commit.repo.name}
      </div> */
}

export default Commits;

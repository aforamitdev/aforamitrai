import { time_ago } from '@/helpers/timeago';
import { Avatar, Badge, Inset, Text } from '@radix-ui/themes';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { IoMdGitBranch } from 'react-icons/io';
import { IGithubFeed } from '../../../../types/type';
import { RiGitRepositoryCommitsFill } from 'react-icons/ri';

function PushEvent({ event }: { event: IGithubFeed }) {
  return (
    <>
      <div className='flex   px-2 w-full '>
        <div className='mx-auto flex  w-full'>
          <div className='relative border-l-[1.5px] border-gray-400 leading-loose h-16'>
            <div className='absolute w-7 h-7 my-3  border-indigo-600 rounded-full -left-[13px]  '>
              <Link href={'/'}>
                <Avatar
                  src={event.actor.avatar_url}
                  // alt={event.actor.id.toString() || 'a'}
                  className=' absolute  rounded-full border-purple-400 border-2'
                  // fill
                  variant='soft'
                  fallback='A'
                  size={'1'}
                  radius='full'
                />
              </Link>
            </div>
          </div>
          <div className='pl-6 pt-2.5 w-full'>
            <div className='flex justify-between'>
              <Text weight={'medium'} className='flex items-center gap-x-1'>
                {(event?.payload.commits &&
                  event?.payload?.commits[0]?.author.name) ||
                  'Amit'}{' '}
              </Text>
              <Text className='text-xs'>
                {time_ago(new Date(event.created_at).toUTCString())}
              </Text>
            </div>
            <div className='text-xs items-center flex'>
              <Badge color='iris' radius='full'>
                <RiGitRepositoryCommitsFill size={'10'} />
              </Badge>
              {event.payload.size} changes in{' '}
              <Link
                href={`https://github.com/${event.repo.name}`}
                target='_blank'
              >
                <Badge color='iris'>
                  <BsGithub size={'10'} />
                  {event.repo.name.split('/')[1]}
                </Badge>
              </Link>
              on
              <Badge color='iris'>
                <IoMdGitBranch size={'10'} /> {event.payload.ref}
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PushEvent;

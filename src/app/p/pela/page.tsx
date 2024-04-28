/* eslint-disable @next/next/no-img-element */
import PIntro from '@/components/projects/components/Intro/PIntro';
import PHeaderTags from '@/components/projects/components/ProjectHeader/PHeaderTags';
import LetsWorkTogether from '@/components/shared/work/LetsWorkTogether';
import { Button } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      <div className='bg-slate-100 rounded-sm px-5 py-3'>
        <PHeaderTags title='Company' value='Pela Inc' />
        <PHeaderTags title='Tech Stack' value='React Native' />
        <PHeaderTags title='Year' value='2023' />
        <PHeaderTags title='Project Type' value='Android, IOS' />
      </div>

      <div className='px-4 pt-5'>
        <PIntro title='Pela' imageUrl='/projects/pela.webp' />

        <div>
          <p>
            With Pela you create a group centered around a loved one needing
            care so everyone involved can share, gets notified and stays
            informed. Family members and professional caregivers come together
            in a private group in the Pela app to share information and fun or
            important moments with each other.
          </p>
          <div className='py-5'>
            <Link
              href={'https://apps.apple.com/in/app/pela/id1527780655'}
              target='_blank'
            >
              <Button>
                Pela App <BsArrowRight />
              </Button>
            </Link>
          </div>
          {/* image */}

          <div className='bg-slate-100 px-2 py-2 rounded-sm my-5 flex justify-center'>
            <img src={'/projects/pela/pela.png'} alt='katana pim' />
          </div>

          {/* content */}
          <div>
            <h2 className='text-2xl font-bold'>Creating Pela App</h2>
            <div>
              <p className='py-2'>Pela app is targeted to wards </p>
            </div>
          </div>
        </div>
        <div className='py-20'>
          <LetsWorkTogether />
        </div>
      </div>
    </div>
  );
};

export default Page;

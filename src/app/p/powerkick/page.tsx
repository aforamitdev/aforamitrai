/* eslint-disable @next/next/no-img-element */
import PIntro from '@/components/projects/components/Intro/PIntro';
import PHeaderTags from '@/components/projects/components/ProjectHeader/PHeaderTags';
import LetsWorkTogether from '@/components/shared/work/LetsWorkTogether';
import { Button } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <div>
        <div className='bg-slate-100 rounded-sm px-5 py-3'>
          <PHeaderTags title='Company' value='Powerkick ' />
          <PHeaderTags title='Tech Stack' value='Vue.Js, Typescript' />
          <PHeaderTags title='Year' value='2019' />
          <PHeaderTags
            title='Project Type'
            value='Product Development, PWA, SPA'
          />
        </div>

        <div className='px-4 pt-5'>
          <PIntro title='Powerkick' imageUrl='/projects/powerkickcorp.jpg' />

          <div>
            <p>
              POWER KICK was a South Korean SVC startup that provides charge
              on-the-go service for mobile phones & electronic gadgets. Lets
              users rent one of the powerkick Power bank.
            </p>
            <div className='py-5'>
              <Link
                href={'https://vimeo.com/692122715?share=copy'}
                target='_blank'
              >
                <Button>
                  Power kick <BsArrowRight />
                </Button>
              </Link>
            </div>
            <div>
              <div className='bg-slate-100 px-2 py-2 rounded-sm my-5 flex justify-center'>
                <img
                  src='/projects/powerkick/powerkickcorp_cover.jpeg'
                  alt=''
                  className='w-full object-cover h-[550px]'
                />
              </div>
            </div>
            {/* content */}
            <div>
              <h2 className='text-2xl font-bold'>The Powerkick Problem </h2>
              <p className='py-2'>
                Imagine you are in busy metropolis of south korea, Seol. Your
                Phone is running out of battery and you need to immediately
                charge it.
              </p>
              <p className='py-2'>
                Here comes the <b> powerkick;</b> with a single QR scan you can
                rent a power bank from any of the 800+ mini powerkick power
                stations across south korea.
              </p>
            </div>

            <div>
              <h2 className='text-2xl font-bold'>The Catch</h2>
              <p>
                The phone have 2% juce, you got to install a application enter
                card info and then rent a powerbank ???? Imagine the stress.
              </p>
            </div>

            <div className='py-5'>
              <h2 className='text-2xl font-bold'>The Solution</h2>

              {/* images */}
              <div className='flex gap-x-3 justify-center'>
                <div className='img-container'>
                  <img
                    src='/projects/powerkick/powerkick_1.png'
                    alt='powerkick_1'
                    className='h-[550px]'
                  />
                </div>
                <div className='img-container'>
                  <img
                    src='/projects/powerkick/powerkick_2.png'
                    alt='powerkick_3'
                    className='h-[550px]'
                  />
                </div>
                <div className='img-container'>
                  <img
                    src='/projects/powerkick/powerkick_3.png'
                    alt='powerkick_2'
                    className='h-[550px]'
                  />
                </div>
              </div>
              <p className='pt-3'>
                Instead of the application , A user can visit a PWA on their
                phone browser and scan code which would get you a power bank
                with in a second.
              </p>
              <p className='pt-3'>
                <b>The Challenge;</b> The Application needed to have
                authentication(Auth 2.0) With kakao which would allow users to
                have their payment information in the PWA.
              </p>
              <p className='pt-3'>
                Application would the display the nearest power stations to the
                user, with number of powerbank in each power stations.
              </p>
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

export default page;

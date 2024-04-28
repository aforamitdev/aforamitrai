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
        <PHeaderTags title='Company' value='Tuktu' />
        <PHeaderTags title='Tech Stack' value='React Native, Python, Android' />
        <PHeaderTags title='Year' value='2020' />
        <PHeaderTags title='Project Type' value='Web app, Android, IOS' />
      </div>

      <div className='px-4 pt-5'>
        <PIntro title='Tuktu' imageUrl='/projects/tuktuk.webp' />

        <div>
          <p>
            Tuktu is an on demand support service for everyone - you, your
            parents, your friends, and your neighbors, anyone who needs a little
            bit of support. Our innovative AI technology connects you with the
            ideal local talent, ensuring greater satisfaction at significantly
            reduced costs.
          </p>
          <div className='py-5'>
            <Link href={'https://web.tuktuapi.com/getstarted'} target='_blank'>
              <Button>
                Tuktu Web App <BsArrowRight />
              </Button>
            </Link>
          </div>
          {/* image */}

          <div className='bg-slate-100 px-2 py-2 rounded-sm my-5 flex justify-center'>
            <img src={'/projects/tuktuk/screen.png'} alt='katana pim' />
          </div>

          {/* content */}
          <div>
            <h2 className='text-2xl font-bold'>Running Tuktu on Web</h2>
            <div>
              <p className='py-2'>
                A rapidly growing startup with an app built on top of
                <b> React Native</b> wanted to have an interface where their
                users could use their service without even installing the
                application.
              </p>
              <div className='py-2 '>
                <div className='flex justify-center w-full gap-x-3 '>
                  <div className='bg-slate-100 px-2 py-2 rounded-sm my-5 '>
                    <img
                      src={'/projects/tuktuk/main.png'}
                      alt='main'
                      className='object-cover h-[600px]'
                    />
                  </div>

                  <div className='bg-slate-100 px-2 py-2 rounded-sm my-5 '>
                    <img
                      src={'/projects/tuktuk/tuktuk.png'}
                      alt='one'
                      className='object-cover h-[600px]'
                    />
                  </div>
                </div>
              </div>
              <p className='py-2'>
                The idea was to run the current React native application on web
                using{' '}
                <Link
                  href='https://necolas.github.io/react-native-web/'
                  className='text-indigo-900'
                >
                  React Native web.{' '}
                </Link>
                Using react React native web we were able to run the current
                implementation on web as well.
              </p>
              <p className='py-2'>
                <b> Challenges;</b> Running some module such as Google maps,
                Notification turns out to be challenging in it original
                implementation as it does;t compile on web . Webpack
                configurations allowed us to replace each naive component with
                web component.{' '}
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

export default Page;

/* eslint-disable react/no-unescaped-entities */
import Footer from '@/components/footer/Footer';
import PHeaderTags from '@/components/projects/components/ProjectHeader/PHeaderTags';
import LetsWorkTogether from '@/components/shared/work/LetsWorkTogether';
import { Arrow } from '@radix-ui/react-popover';
import { Button } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiArrowFromRight } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <div>
        <div className='bg-slate-100 rounded-sm px-5 py-3'>
          <PHeaderTags title='Company' value='KatanaPIM' />
          <PHeaderTags title='Tech Stack' value='ReactJS, .Net Core, MSSQL' />
          <PHeaderTags title='Year' value='2023' />
          <PHeaderTags title='Project Type' value='Web App, SaaS, PIM' />
        </div>
        <div className='px-4 text-gray-900'>
          <h1 className='text-3xl font-bold my-5'>Katana PIM</h1>
          <div>
            <p>
              KatanaPIM's Centralize all your product data and give your entire
              team a seamless way of working. A collaborative tool that empowers
              teamwork Transform the way you manage product information: make it
              a team effort and let users seamlessly work together
            </p>
            <div className='py-5'>
              <Link href={'https://www.katanapim.com/'} target='_blank'>
                <Button>
                  {' '}
                  Visit KatanaPIM <BsArrowRight />
                </Button>
              </Link>
            </div>
            <div className='py-4'>
              <video
                height={'100px'}
                autoPlay
                loop
                className='bg-slate-100 px-2 py-2 rounded-sm'
              >
                <source src='/projects/workflow.mp4' type='video/mp4'></source>
              </video>
            </div>
          </div>

          {/* content */}
          <div>
            <h2 className='text-2xl font-bold'>The katanaPIM's Story</h2>
            <div>
              <p className='py-2'>
                Once upon a time, in a busy digital kingdom called Productoria,
                there was a magical tool named Katana PIM. This tool helped
                merchants manage their product information easily.
              </p>
              <p className='py-2'>
                Merchants in Productoria use, Katana PIM to gather all the
                details about products, make them better, check if they were
                correct, and share them with other sellers so they can sell the
                right product across other Kingdoms.
              </p>
              <p className='py-2'>
                {' '}
                <b> The Update;</b> KatanaPIM walls were getting old, streets
                became hard to navigate, new age feature needed to be developed.
              </p>
            </div>
          </div>

          {/* my role */}
          <div className='bg-slate-100 px-2 py-2 rounded-sm my-5'>
            <img src={'/projects/katanad.png'} />
          </div>
          <div>
            <h2 className='text-2xl font-bold'>Me at katanaPIM</h2>
            <p className='text-xs pb-1'>
              The tale of Katana PIM's upgrade from Razor MVP to ReactJS.
            </p>
            <p className='pb-2'>
              As KatanaPIM need serious upgrade, My job was to clean old
              order(Razor Pages) and update katanaPIM for new age with ReactJS
              on frontend.
            </p>
            <p className='pb-2'>
              For the Project which involved over 20 different micro-frontend,
              it was evident it would require a Strict type system for a
              reliable and scalable codebase. (Hi, Typescript 👋 )
            </p>
            <p className='pb-2'>
              My Role, was to update and add new feature to the application
              using
              <b> ReactJs and Typescript</b>,
              <b>
                {' '}
                updating existing javascript codebase to typescript modules
              </b>
              , <b> Migrating Razor pages to ReactJS SPA.</b>
            </p>
          </div>
          <div className='pt-10'>
            <LetsWorkTogether />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

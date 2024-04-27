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
        <PHeaderTags title='Company' value='Valores' />
        <PHeaderTags title='Tech Stack' value='VueJS, NFTs, Blockchain' />
        <PHeaderTags title='Year' value='2019' />
        <PHeaderTags title='Project Type' value='NFTs, Product Development' />
      </div>

      <div className='px-4 pt-5'>
        <PIntro title='Valores' imageUrl='/projects/valoris.webp' />

        <div>
          <p>
            Valores is an NFT marketplace where we value what you value - what
            you celebrate, what you create, and on what you collaborate.
          </p>
          <div className='py-5'>
            <Link href={'https://valores.cc/'} target='_blank'>
              <Button>
                Visit Valores <BsArrowRight />
              </Button>
            </Link>
          </div>
          {/* image */}

          <div className='bg-slate-100 px-2 py-2 rounded-sm my-5 flex justify-center'>
            <img src={'/projects/valores/valores.png'} alt='valoris' />
          </div>

          {/* content */}
          <div>
            <h2 className='text-2xl font-bold'>
              Creating Valores Market Place{' '}
            </h2>
            <div>
              <p className='py-2'>as</p>
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

/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import ExpertisePop from '@/components/shared/ExpertisePop';
import { Box, Inset, Text } from '@radix-ui/themes';
import React from 'react';

type Props = {};

function page({}: Props) {
  return (
    <div className='flex'>
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css'
      />

      <div className='w-full relative   md:-inset-y-5  md:-inset-x-5'>
        <img
          src='/projects/profile.jpg'
          // style={{ height: '105%' }}
          className='  object-cover md:h-[105%]  h-[60vh] w-[110%]  object-bottom '
        />
      </div>
      <div className='  relative flex flex-col  md:h-[80vh]'>
        {/* photo */}
        <div>
          <div className=' py-10  -inset-9 '>
            <div className='text-3xl font-bold'>
              <Text>It's me Amit</Text>
            </div>

            <div>
              <Text>
                I'm Amit Rai, Product developer with over 4 years of experience,
                currently working at KatanaPIM a world wide Product Managment
                system .
              </Text>
              <br />
            </div>

            <div>
              <Text>
                I'm a Dynamic and detail-oriented Developer with a knack for
                conceptualizing and delivering elegant, user-friendly solutions
                effectively and efficiently. Enjoy building powerful web
                applications, learning new technologies, and improving overall
                knowledge.
              </Text>
              <br />
            </div>
          </div>

          {/* image */}

          <div className='text-3xl font-bold pt-3'>More about Amit</div>
          <div>
            <Text>
              He holds a bachelor;s degrees in Information technologies from
              University of Mumbai. He love to explore new places, new food and
              Of course new cultures.
            </Text>
          </div>
        </div>

        <div className='pt-5'>
          <Text size={'4'} weight={'bold'}>
            Expertise
          </Text>
        </div>
        <div className='flex gap-x-3 pt-4 '>
          <ExpertisePop title='Typescript' details=''>
            <i className='devicon-typescript-plain colored text-2xl'></i>
          </ExpertisePop>

          <ExpertisePop title='Javascript' details=''>
            <i className='devicon-javascript-plain colored'></i>
          </ExpertisePop>
          <ExpertisePop title='Dot net ' details=''>
            <i className='devicon-dotnetcore-plain colored'></i>
          </ExpertisePop>

          <ExpertisePop title='Kubernetes' details=''>
            <i className='devicon-kubernetes-plain colored'></i>
          </ExpertisePop>

          <ExpertisePop title='Docker' details=''>
            <i className='devicon-docker-plain colored'></i>
          </ExpertisePop>

          <ExpertisePop title='GoLang' details=''>
            <i className='devicon-go-original-wordmark colored'></i>
          </ExpertisePop>

          <ExpertisePop title='Webpack' details=''>
            <i className='devicon-webpack-plain colored'></i>
          </ExpertisePop>

          <ExpertisePop title='Git' details=''>
            <i className='devicon-git-plain colored'></i>
          </ExpertisePop>
        </div>
      </div>
    </div>
  );
}

export default page;

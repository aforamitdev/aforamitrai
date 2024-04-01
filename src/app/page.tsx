'use client';
import Footer from '@/components/footer/Footer';
import Header from '@/components/headers/Header';
import Email from '@/components/hire/Email';
import HireMe from '@/components/hire/HireMe';
import ScreenCard from '@/components/home/ScreenCard';
import Profile from '@/components/profile/Profile';
import ProfileContainer from '@/components/profile/ProfileContainer';
import Project from '@/components/projects/Project';
import ProjectContainer from '@/components/projects/ProjectContainer';
import SmoothScrolling from '@/components/scroll/SmootScroll';
import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Inset,
  Text,
  ThemePanel,
} from '@radix-ui/themes';
import Link from 'next/link';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';

import {
  GoChevronRight,
  GoCopy,
  GoDotFill,
  GoPlusCircle,
} from 'react-icons/go';

export default function Home() {
  return (
    <main className='flex max-w-7xl mx-auto  font-poppins'>
      {/* <ThemePanel /> */}
      <div className='flex w-full flex-col'>
        <div className='flex w-full '>
          <Header />
        </div>
        <div className='mx-4 py-2'>
          <Card className='flex '>
            <div className='flex  flex-col '>
              <ProfileContainer />
              <ProjectContainer />
            </div>

            <div className='py-10  '>
              <div className='flex justify-center flex-col items-center'>
                <div>
                  <Text color='gray' size={'8'} weight={'medium'}>
                    Lets work together.
                  </Text>
                </div>
                <div className='text-gray-700  tracking-widest'>
                  Creating unmatched product experience.
                </div>
                <div className='mt-5 flex gap-x-3'>
                  <HireMe />
                  <Email />
                </div>
              </div>
            </div>

            <Footer />
          </Card>
        </div>
      </div>
      {/* <Flex className=' ' height={'85vh'}></Flex> */}
    </main>
  );
}

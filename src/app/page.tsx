'use client';
import Footer from '@/components/footer/Footer';
import Header from '@/components/headers/Header';
import Email from '@/components/hire/Email';
import HireMe from '@/components/hire/HireMe';
import ScreenCard from '@/components/home/ScreenCard';
import Profile from '@/components/profile/Profile';
import Project from '@/components/projects/Project';
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
        <div className='flex w-full'>
          <Header />
        </div>
        <div className='mx-4 py-2'>
          <Card className='flex flex-col'>
            <div className='flex justify-between py-3'>
              <div className='flex items-center text-base text-gray-700'>
                <GoDotFill />
                Product Developer
              </div>
              <div
                className='text-xs uppercase  items-center flex px-2 rounded-full text-green-700  font-bold'
                style={{ background: 'rgba(40, 199, 128, 0.15)' }}
              >
                <GoDotFill />
                Available for work
              </div>
            </div>
            <Profile />
            {/* hire me  */}
            <Flex className='flex gap-x-3 justify-between items-center'>
              <HireMe />
              <Email />
            </Flex>

            <div className='flex pt-10  items-center'>
              <Card className='w-full '>
                <Inset className='bg-gray-200 px-5'>
                  <Box
                    // style={{ backgroundColor: '#5151CD', opacity: 0.2 }}
                    className='w-full  py-2  '
                    // inset={'2'}
                  >
                    <div className='flex justify-between items-center'>
                      <div className='flex items-center text-base text-gray-700'>
                        <GoDotFill /> <Text> Projects </Text>
                      </div>
                      <Button>
                        View All <GoChevronRight />{' '}
                      </Button>
                    </div>
                  </Box>

                  <div>
                    <Project />
                  </div>
                </Inset>
              </Card>
            </div>
            {/* Projects  */}
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

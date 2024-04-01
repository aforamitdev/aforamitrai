import { Box, Button, Card, Inset, Text } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';
import { GoChevronRight, GoDotFill } from 'react-icons/go';
import Project from './Project';

type Props = {};

function ProjectContainer({}: Props) {
  return (
    <div className='flex pt-10  items-center '>
      <Card className='w-full '>
        <Inset className='bg-gray-200 px-5 py-4'>
          <Box
            // style={{ backgroundColor: '#5151CD', opacity: 0.2 }}
            className='w-full  py-2  '
            // inset={'2'}
          >
            <div className='flex justify-between items-center'>
              <div className='flex items-center text-base text-gray-700'>
                <GoDotFill /> <Text>Projects</Text>
              </div>
              <Link href={'/projects/'}>
                <Button>
                  View All <GoChevronRight />{' '}
                </Button>
              </Link>
            </div>
          </Box>

          <div>
            <Project />
          </div>
        </Inset>
      </Card>
    </div>
  );
}

export default ProjectContainer;

import { Avatar, Card, Inset, Text } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';
import { GoChevronRight } from 'react-icons/go';

type Props = {
  title: string;
  metaData: string[];
  link: string;
};

const ProjectCard = ({ title, metaData, link }: Props) => {
  return (
    <Card className=' shadow-xl hover:ring-4'>
      <Link href={'/projects/project-one'}>
        <Inset className='py-4 px-4  '>
          <div className='flex justify-between items-center '>
            <div className='flex items-center gap-x-5'>
              <div>
                <Avatar
                  fallback='K'
                  radius='full'
                  size={'5'}
                  src={link}
                  className='hover:ring-8 ring-gray-100'
                />
              </div>
              <div>
                <div className='font-medium'>
                  <Text color='iris'>{title}</Text>
                </div>
                <div>
                  <Text color='gray' className='text-sm'>
                    {metaData.join(',')}{' '}
                  </Text>
                </div>
              </div>
            </div>
            <div>
              <GoChevronRight />
            </div>
          </div>
        </Inset>
      </Link>
    </Card>
  );
};

const Project = () => {
  return (
    <div className='space-y-4 py-3'>
      <ProjectCard
        title='KatanaPIM'
        metaData={['Product Development', 'Webapps']}
        link='/projects/katana.jpg'
      />
      <ProjectCard
        title='Tuktu'
        metaData={['Product Development', 'NFT']}
        link='/projects/tuktuk.webp'
      />
      <ProjectCard
        title='Pela'
        metaData={['Product Development', 'NFT']}
        link='/projects/pela.webp'
      />
      <ProjectCard
        title='Powerkick'
        metaData={['Product Development', 'SPA', 'PWA']}
        link='/projects/powerkickcorp.jpg'
      />{' '}
      <ProjectCard
        title='Valores'
        metaData={['Product Development', 'NFT']}
        link='/projects/valoris.webp'
      />
    </div>
  );
};

export default Project;

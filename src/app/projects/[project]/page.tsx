'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import ProjectPage from '@/components/projects/ProjectPage';
import HomeProject from '@/components/Layout/HomeProject';
import Markdoc from '@markdoc/markdoc';
import { ContainerWithChildren } from 'postcss/lib/container';
import ContentRenderer from '@/components/blog/ContentRenderer';
import { useParams, usePathname } from 'next/navigation';

type Props = {};

const Page = (props: Props) => {
  const path = useParams();
  console.log(path);
  const [content, setContent] = useState(undefined);

  const getData = async () => {
    const response = await fetch(`/api/projects/${path.project}`);
    const data = await response.json();
    console.log(data, 'CONTENT');
    setContent(data.response);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!content) {
    return <>Loadinf...</>;
  }

  // const ast = Markdoc.parse(doc);

  // const content = Markdoc.transform(ast);

  // const html = Markdoc.renderers.html(content);
  // console.log(html, 'A');
  // console.log(html);
  return (
    <div>
      <AnimatePresence mode='popLayout' initial>
        <main className='mx-auto  font-poppins flex'>
          <HomeProject>
            <ProjectPage>
              {' '}
              Project Page <ContentRenderer content={content} />
            </ProjectPage>
          </HomeProject>
        </main>
      </AnimatePresence>
    </div>
  );
};

export default Page;

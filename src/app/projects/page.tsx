'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import ProjectPage from '@/components/projects/ProjectPage';
import HomeProject from '@/components/Layout/HomeProject';
import ContentRenderer from '@/components/blog/ContentRenderer';
import { useParams, usePathname } from 'next/navigation';
import { Editor } from '@monaco-editor/react';
import Markdoc from '@markdoc/markdoc';
import config from '@/schema/config';

type Props = {};

const Page = (props: Props) => {
  const path = useParams();
  console.log(path);
  const [content, setContent] = useState(undefined);
  const [liveEditor, setLiveEditor] = useState<string>('');
  const [l, setL] = useState({});
  const getData = async () => {
    const response = await fetch(`/api/projects?snapped=true`);
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

  return (
    <div>
      <AnimatePresence mode='popLayout' initial>
        <main className='mx-auto  font-poppins flex'>
          <ContentRenderer content={content} />
        </main>
      </AnimatePresence>
    </div>
  );
};

export default Page;

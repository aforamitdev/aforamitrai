'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import ProjectPage from '@/components/projects/ProjectPage';
import HomeProject from '@/components/Layout/HomeProject';
import { useParams, usePathname } from 'next/navigation';
import { Editor } from '@monaco-editor/react';
import Markdoc from '@markdoc/markdoc';
import config from '@/schema/config';

type Props = {};

const Page = (props: Props) => {
  const path = useParams();
  const [content, setContent] = useState(undefined);
  const [liveEditor, setLiveEditor] = useState<string>('');
  const [l, setL] = useState({});
  //   const getData = async () => {
  // const response = await fetch(`/api/projects/${path.project}`);
  // const data = await response.json();
  // console.log(data, 'CONTENT');
  // setContent(data.response);
  //   };

  useEffect(() => {
    // getData();
  }, []);

  //   useEffect(() => {
  //     const ast = Markdoc.parse(liveEditor);
  //     const content = Markdoc.transform(ast, config);
  //     setL(content || {});
  //   }, [liveEditor]);

  //   if (!content) {
  //     return <>Loadinf...</>;
  //   }

  return (
    <div>
      <AnimatePresence mode='popLayout' initial>
        <main className='mx-auto  font-poppins flex'>
          <HomeProject>
            <ProjectPage>
              {/* <ContentRenderer content={content} /> */}
              as
            </ProjectPage>
          </HomeProject>
        </main>
      </AnimatePresence>
    </div>
  );
};

export default Page;

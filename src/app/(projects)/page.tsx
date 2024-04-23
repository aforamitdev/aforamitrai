'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import ProjectPage from '@/components/projects/ProjectPage';
import HomeProject from '@/components/Layout/HomeProject';
import { useParams, usePathname } from 'next/navigation';
import { Editor } from '@monaco-editor/react';
import { MDXEditor } from '@mdxeditor/editor';

const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AnimatePresence mode='popLayout' initial>
        <main className='mx-auto  font-poppins flex'>
          <HomeProject>
            <ProjectPage>
              <div className='h-screen'>{children}</div>
            </ProjectPage>
          </HomeProject>
        </main>
      </AnimatePresence>
    </div>
  );
};

export default Page;

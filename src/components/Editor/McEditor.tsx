'use client';
import React, { useState } from 'react';
import { Editor } from '@monaco-editor/react';
import ContentRenderer from '../blog/ContentRenderer';
import { RenderableTreeNodes } from '@markdoc/markdoc';

type Props = {};

const McEditor = (props: Props) => {
  const [content, setContent] = useState<RenderableTreeNodes>('');
  return (
    <div className='flex justify-between'>
      <div className='h-screen w-full'>
        <Editor height='85vh' onChange={(e) => setContent(e)} />
      </div>
      <div className='w-full'>
        {content && <ContentRenderer content={content} />}
      </div>
    </div>
  );
};

export default McEditor;

'use client';
import React, { useState } from 'react';
import { Editor } from '@monaco-editor/react';
import ContentRenderer from '../blog/ContentRenderer';
import { RenderableTreeNodes } from '@markdoc/markdoc';
import { Card } from '@radix-ui/themes';

type Props = {};

const McEditor = (props: Props) => {
  const [content, setContent] = useState<RenderableTreeNodes>('');
  return (
    <div className='flex justify-between'>
      <Card className='h-screen w-full'>
        <Editor height='85vh' onChange={(e) => setContent(e)} />
      </Card>
      <Card className='w-full'>
        {content && <ContentRenderer content={content} />}
      </Card>
    </div>
  );
};

export default McEditor;

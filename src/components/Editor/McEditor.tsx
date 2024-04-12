'use client';
import React, { useState } from 'react';
import ContentRenderer from '../blog/ContentRenderer';
import { RenderableTreeNodes } from '@markdoc/markdoc';
import { Card } from '@radix-ui/themes';
import { editor } from "monaco-editor";
import MonacoEditor from "./MonacoEditor";

type Props = {};



const McEditor = (props: Props) => {
  const [content, setContent] = useState<RenderableTreeNodes>('');


  return (
    <div className='flex justify-between'>
      <Card className='h-[68vh] w-full'>
        <MonacoEditor setContent={setContent} />

      </Card>
      <Card className='w-full'>
        {content && <ContentRenderer content={content} />}
      </Card>
    </div>
  );
};

export default McEditor;

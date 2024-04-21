'use client';
import React, { useEffect, useRef, useState } from 'react';
import { RenderableTreeNodes } from '@markdoc/markdoc';
import { Avatar, Button, Card, Inset } from '@radix-ui/themes';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '../ui/ResizablePanel';
import * as Toolbar from '@radix-ui/react-toolbar';
import './style.css';

import { cn } from '@/lib/utils';
import { LiaSaveSolid } from 'react-icons/lia';
import { BsSave2, BsSave2Fill } from 'react-icons/bs';
import { IoSaveSharp } from 'react-icons/io5';
import {
  BiBold,
  BiItalic,
  BiSolidImage,
  BiStrikethrough,
} from 'react-icons/bi';
import MonacoEditor from './MonacoEditor/index';
import ContentRenderer from './MonacoEditor/ContentRenderer';
import PopDialog from '../Dialog/PopDialog';
import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '@/firebase/config';
import { slugify } from '@/helpers/slugify';
import FileList from './MonacoEditor/FileList';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { getFileContent } from '@/firebase/storage/getFileContent';
type Props = {};

const McEditor = (props: Props) => {
  const { slug } = useParams();
  const [path, setPath] = useState('');
  const search = useSearchParams();
  const [content, setContent] = useState<RenderableTreeNodes>('');
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const defaultLayout = [265, 440, 655];
  const navCollapsedSize = 5;

  const onSave = () => {
    const textEncoder = new TextEncoder();
    if (content) {
      const onBytes = textEncoder.encode(content as string);
      console.log(onBytes);
      const fileRef = ref(storage, path);
      uploadBytes(fileRef, onBytes)
        .then((snapShot) => {
          console.log(snapShot);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(path);
    }
  };

  useEffect(() => {
    // const storeRef = ref(storage,);
    const path = search.get('path');
    if (path) {
      setPath(path);
      getFileContent(path).then((res) => setContent(res));
    }
  }, [slug, search]);

  return (
    <>
      <div className='py-2 gap-y-1.5 flex flex-col'>
        <div className=' px-2 flex  items-center gap-x-3'>
          <ToolsBar />
          <div onClick={onSave}>
            <SaveBar />
          </div>
        </div>
        <div className='mx-2 '>
          <Card>
            <Inset className='h-96'>
              <ResizablePanelGroup
                direction='horizontal'
                onLayout={(sizes: number[]) => {
                  document.cookie = `react-resizable-panels:layout=${JSON.stringify(
                    sizes
                  )}`;
                }}
                className=' max-h-screen items-stretch '
              >
                <ResizablePanel defaultSize={defaultLayout[1]} minSize={15}>
                  <MonacoEditor setContent={setContent} />
                </ResizablePanel>
                <ResizableHandle withHandle />

                <ResizablePanel defaultSize={defaultLayout[2]} minSize={15}>
                  <ContentRenderer content={content} />
                </ResizablePanel>
              </ResizablePanelGroup>
            </Inset>
          </Card>
        </div>
      </div>
    </>
  );
};

export default McEditor;

const ToolsBar = () => {
  return (
    <Toolbar.Root className='ToolbarRoot' aria-label='Formatting options'>
      <Toolbar.ToggleGroup type='multiple' aria-label='Text formatting'>
        <Toolbar.ToggleItem
          className='ToolbarToggleItem'
          value='bold'
          aria-label='Bold'
        >
          <BiBold />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem
          className='ToolbarToggleItem'
          value='italic'
          aria-label='Italic'
        >
          <BiItalic />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem
          className='ToolbarToggleItem'
          value='strikethrough'
          aria-label='Strike through'
        >
          <BiStrikethrough />
        </Toolbar.ToggleItem>
      </Toolbar.ToggleGroup>
      <Toolbar.Separator className='ToolbarSeparator' />
      <Toolbar.ToggleGroup
        type='single'
        defaultValue='center'
        aria-label='Text alignment'
      >
        <Toolbar.ToggleItem
          className='ToolbarToggleItem'
          value='left'
          aria-label='Left aligned'
        >
          {/* < /> */}
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem
          className='ToolbarToggleItem'
          value='center'
          aria-label='Center aligned'
        >
          {/* <TextAlignCenterIcon /> */}
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem
          className='ToolbarToggleItem'
          value='right'
          aria-label='Right aligned'
        >
          {/* <TextAlignRightIcon /> */}
        </Toolbar.ToggleItem>
      </Toolbar.ToggleGroup>
      <Toolbar.Separator className='ToolbarSeparator' />
      <Toolbar.Link
        className='ToolbarLink'
        href='#'
        target='_blank'
        style={{ marginRight: 10 }}
      >
        Edited 2 hours ago
      </Toolbar.Link>
    </Toolbar.Root>
  );
};

const SaveBar = () => {
  return (
    <Button>
      <BsSave2 /> Save
    </Button>
  );
};

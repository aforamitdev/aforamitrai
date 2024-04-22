'use client';
import { storage } from '@/firebase/config';
import { addFile } from '@/firebase/storage/addFile';
import { getAllProjects } from '@/firebase/storage/getAllProjects';
import {
  Button,
  Dialog,
  Flex,
  Inset,
  Select,
  Text,
  TextField,
} from '@radix-ui/themes';
import { FullMetadata, list, ref } from 'firebase/storage';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { GiArtificialHive } from 'react-icons/gi';

type Props = {};

const getData = async () => {
  const refProjects = ref(storage, 'amitrai.me/projects');
  const allProjects = await list(refProjects);
  console.log(allProjects);
  // listAll(blogs).then((res) => {
  //   res.prefixes.forEach((folder) => {
  //     console.log(folder);
  //   });
  // });
  return allProjects.items;
};

const Index = (props: Props) => {
  // useEffect(() => {
  //   getData().then((data) => {
  //     setProjects(data);
  //   });
  // }, []);
  const [fileList, setFileList] = useState<FullMetadata[]>([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    getAllProjects().then((response) => {
      Promise.all(response).then((res) => {
        setFileList(res);
      });
    });
  }, [open]);

  return (
    <div>
      <Inset className='rounded-none '>
        <div className='flex w-full border border-b-[1px] '>
          <div className='w-1/6  border-r-[1px]'>
            <div className='flex items-center py-3'>
              <div className='px-2 '>
                <GiArtificialHive size={'25'} />
              </div>
              <div>
                <div>Amit rai</div>
                <div className='text-xs'>Blogs</div>
              </div>
            </div>
          </div>
          <div className='w-full flex items-center px-2'>
            <div className='flex justify-between w-full'>
              <div>
                <div>Welcome Back, Amit</div>
                <div className='text-xs'>Whats cooking !!!</div>
              </div>
              <div>
                <AddNew open={open} setOpen={setOpen} />
              </div>
            </div>
          </div>
        </div>
        {/* main sections */}
        <div>
          <div className='flex'>
            <div className='w-1/6 border-r-[1px]'>as</div>
            <div className='w-full'>
              {fileList.length &&
                fileList.map((file) => {
                  return (
                    <Link
                      key={file.timeCreated}
                      href={`/editor/${file.name}?path=${file.fullPath}`}
                    >
                      <div
                        key={file.timeCreated}
                        className='cursor-pointer mx-2 py-2'
                      >
                        <div>{file.name}</div>
                        <div className='text-xs'>
                          {new Date(file.timeCreated).toUTCString()}
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </Inset>
    </div>
  );
};

const AddNew = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [title, setTitle] = useState('');
  const [postType, setPostType] = useState<'posts' | 'projects'>('posts');
  const [uniqueId, setUnique] = useState('');
  const [folder, setFolder] = useState('');

  const saveFile = () => {
    addFile(title, uniqueId, postType, '', folder).then((e) => {
      setOpen(false);
    });
  };

  return (
    <Dialog.Root open={open}>
      <Dialog.Trigger onClick={() => setOpen(true)}>
        <Button>New</Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth='450px'>
        <Dialog.Title>File Information</Dialog.Title>
        <Dialog.Description size='2' mb='4'>
          Fill some basic information for the file
        </Dialog.Description>

        <Flex direction='column' gap={'2'}>
          <div>
            <Text as='div' size='2' mb='1' weight='bold'>
              Title
            </Text>
            <TextField.Root
              defaultValue='Post Title'
              placeholder='A post title, unique'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <Text as='div' size='2' mb='1' weight='bold'>
              Id
            </Text>
            <TextField.Root
              value={uniqueId}
              placeholder='16b7cea1-f4e6-4091-99ab-2e99b969907b'
              onChange={(e) => setUnique(e.target.value)}
            />
          </div>
          <div>
            <Text as='div' size='2' mb='1' weight='bold'>
              Folder
            </Text>
            <TextField.Root
              value={folder}
              placeholder='Folder'
              onChange={(e) => setFolder(e.target.value)}
            />
          </div>

          <div className='flex flex-col'>
            {/* select */}
            <Text size={'2'} weight='bold'>
              Post Type
            </Text>
            <Select.Root
              value={postType}
              defaultValue='posts'
              size={'2'}
              onValueChange={(e) => setPostType(e)}
            >
              <Select.Trigger />
              <Select.Content>
                <Select.Group>
                  <Select.Item value='posts'>Posts</Select.Item>
                  <Select.Item value='projects'>Projects</Select.Item>
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </div>
        </Flex>

        <Flex gap='3' mt='4' justify='end'>
          <Dialog.Close>
            <Button variant='soft' color='gray' onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button onClick={saveFile}>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

// const getFile = async (f: StorageReference) => {
//   const data = await getBlob(f);
//   console.log(data);
// };
// const FilesList = async (fileRef: StorageReference) => {
//   return <div>fielList</div>;
// };

export default Index;

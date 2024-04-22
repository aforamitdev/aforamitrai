'use client';
import { metadata } from '@/app/layout';
import { storage } from '@/firebase/config';
import { Card } from '@radix-ui/themes';
import {
  getDownloadURL,
  getMetadata,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from 'firebase/storage';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FileDrop } from 'react-file-drop';

type Props = {};

function FileZone({}: Props) {
  const onTargetClick = () => {};
  const [files, setFiles] = useState<FileList | null>(null);
  const searchPath = useSearchParams();
  const [metadata, setMetadata] = useState<{ folder?: string } | any>({
    folder: undefined,
  });
  const [filePath, setFilePath] = useState('');

  useEffect(() => {
    const path = searchPath.get('path');
    if (path) {
      const fileRef = ref(storage, path);
      getMetadata(fileRef).then((res) => {
        setMetadata(res.customMetadata);
      });
    }
  }, []);

  const fileDrop = (files: FileList | null) => {
    // console.log(files);
    // const imageRef = ref(storage, '');
    // uploadBytes(imageRef, files[0])
    if (files && metadata.folder) {
      const imageRef = ref(
        storage,
        `amitrai.me/media/${metadata.folder}/${files[0].name}`
      );
      const uploadTask = uploadBytesResumable(imageRef, files[0]);
      uploadTask.on(
        'state_changed',
        (snap) => {
          console.log(snap);
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (res) => {
            setFilePath(res);
          });
        }
      );
    }
  };
  return (
    <>
      <FileDrop
        onFrameDragLeave={(event) => console.log('onFrameDragLeave', event)}
        onFrameDrop={(event) => console.log('onFrameDrop', event)}
        onDragOver={(event) => console.log('onDragOver', event)}
        onDragLeave={(event) => console.log('onDragLeave', event)}
        onDrop={(files, event) => fileDrop(files)}
      >
        <div className='flex justify-center w-full px-3 py-2 mb-2 transition-all border-dashed border-2 border-gray-200 rounded-md outline-blue-600/50 hover:border-blue-600/30'>
          Drag and drop
        </div>
      </FileDrop>
      <div onClick={() => navigator.clipboard.writeText(filePath)}>
        {filePath}
      </div>
      {/* <img src={filePath} alt='' /> */}

      <div>{/* {Array.from(files).map(r => console.log(r.))} */}</div>
    </>
  );
}

export default FileZone;

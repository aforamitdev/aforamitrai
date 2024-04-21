import { slugify } from '@/helpers/slugify';
import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../config';

export const addFile = async (
  fileName: string,
  uniqueId: string,
  postType: 'posts' | 'projects',
  content: ''
) => {
  if (!fileName && !uniqueId && !postType) {
    alert('missing file ');
    return;
  }
  return new Promise((response, reject) => {
    const filepath = `/amitrai.me/${postType}/${slugify(fileName)}.md`;
    const storeRef = ref(storage, filepath);

    const textEncoder = new TextEncoder();
    const onBytes = textEncoder.encode(content as string);
    const Meta = {
      id: uniqueId,
      postType,
    };
    const meta = {
      uniqueId,
      contentType: 'text/markdown',
    };
    uploadBytes(storeRef, onBytes, { ...meta, customMetadata: Meta })
      .then((res) => {
        response(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

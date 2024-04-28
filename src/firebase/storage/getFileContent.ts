import { getBytes, ref } from 'firebase/storage';
import { storage } from '../config';

export const getFileContent = (file: string): Promise<string> => {
  return new Promise(async (response, reject) => {
    let binary = '';
    const fileRef = ref(storage, file);
    const data = await getBytes(fileRef);
    const bytes = new Uint8Array(data);
    const len = bytes.byteLength;

    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    response(binary);
  });
};

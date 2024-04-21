import {
  FullMetadata,
  getBlob,
  getBytes,
  getMetadata,
  listAll,
  ref,
} from 'firebase/storage';
import { storage } from '../config';

export const getAllProjects = async () => {
  const projectsRef = ref(storage, '/amitrai.me/projects');

  const projectsRefs = await listAll(projectsRef);

  const metadata = projectsRefs.items.map((file) => {
    return getMetadata(file);
  });
  return metadata;
};

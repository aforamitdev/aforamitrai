// 'use client';
import HomeProject from '@/components/Layout/HomeProject';
import HomePage from '@/components/home/HomePage';
import ProjectContainer from '@/components/projects/ProjectContainer';
import '../firebase/config';

async function getData() {
  return [{ title: 'tets' }];
}

export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <main className='  mx-auto flex  '>
      {/* <ThemePanel /> */}
      <HomeProject>
        <HomePage>
          <ProjectContainer />
        </HomePage>
      </HomeProject>
    </main>
  );
}

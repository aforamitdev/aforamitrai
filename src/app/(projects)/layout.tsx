'use client';
import AppContextProvider from '@/Providers/AppProvider';
import React from 'react';

const ProjectLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return (
    <section>
      <AppContextProvider>{children}</AppContextProvider>
    </section>
  );
};

export default ProjectLayout;

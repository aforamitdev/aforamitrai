import React from 'react';

type Props = {};

const ProjectsLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return <section>{children}</section>;
};

export default ProjectsLayout;

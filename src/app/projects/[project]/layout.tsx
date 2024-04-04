import ProfileContainer from '@/components/profile/ProfileContainer';
import React from 'react';

type Props = {};

const ProjectLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return <section>{children}</section>;
};

export default ProjectLayout;

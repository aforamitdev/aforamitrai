import React from 'react';

const ShowCase = ({
  children,
  title,
  techStack,
}: {
  children: React.ReactNode;
  title: string;
  techStack: string[];
}) => {
  return (
    <div>
      {children} {title} {techStack}
    </div>
  );
};

export default ShowCase;

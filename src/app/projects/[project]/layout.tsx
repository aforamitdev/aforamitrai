import React from 'react';

type Props = {};

const ProjectLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return (
    <section>
      <nav>NAV SAS</nav>

      {children}
    </section>
  );
};

export default ProjectLayout;

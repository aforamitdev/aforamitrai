import React from 'react';

type Props = {};

function Page(props: Props) {
  return <div>dynamic {JSON.stringify(props)}</div>;
}

export default Page;

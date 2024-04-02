import React, { useEffect, useState } from 'react';
import { IStackOverFlow } from '../../../../types/stackoverflow';

type Props = {};

function StackOverflow({}: Props) {
  const [feedData, setData] = useState<IStackOverFlow[]>([]);
  const getData = async () => {
    const response = await fetch(
      'https://api.stackexchange.com/2.3/users/10148612/timeline?sort=creation&page=1&pagesize=100&site=stackoverflow'
    );
    const feed = await response.json();
    setData(feed.items);
  };
  useEffect(() => {
    getData();
  }, []);
  return <div>{feedData.map((post) => post.detail)}</div>;
}

export default StackOverflow;

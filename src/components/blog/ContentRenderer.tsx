import Markdoc, { Node, RenderableTreeNodes, Tag } from '@markdoc/markdoc';
import React, { Children, useEffect, useState } from 'react';
import CalloutRenderer from '../MarkDocExtenations/Callout/CalloutRender';
import InfoRenderer from '../MarkDocExtenations/Info/InfoRenderer';
import config from '@/schema/config';
import InfoElement from '../MarkDocExtenations/Info/InfoElement';

type Props = {
  content: RenderableTreeNodes;
};

const ContentRenderer = (props: Props) => {
  const components = {
    CalloutRenderer,
    InfoRenderer,
    InfoElement,
  };
  if (!props.content) {
    return <></>;
  }
  const ast = Markdoc.parse(props.content || '');

  const content = Markdoc.transform(ast, config);

  // console.log(content, 'content');
  return (
    <div className='px-2'>
      {Markdoc.renderers.react(content, React, { components })}
    </div>
  );
};

export default ContentRenderer;

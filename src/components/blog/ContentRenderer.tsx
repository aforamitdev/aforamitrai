import Markdoc, { RenderableTreeNodes } from '@markdoc/markdoc';
import React from 'react';
import CalloutRenderer from './element/CalloutRender';
import InfoRenderer from './element/InfoRenderer';
import config from '@/schema/config';

type Props = {
  content: RenderableTreeNodes;
};

const ContentRenderer = (props: Props) => {
  const components = {
    CalloutRenderer,
    InfoRenderer,
  };
  const ast = Markdoc.parse(props.content);
  const content = Markdoc.transform(ast, config);
  // console.log(content, 'content');
  return (
    <div className='px-2'>
      {Markdoc.renderers.react(content, React, { components })}
    </div>
  );
};

export default ContentRenderer;

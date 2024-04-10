import React from 'react';
import Markdoc, { RenderableTreeNodes, Tag } from '@markdoc/markdoc';
import CalloutRenderer from '../Editor/Callout/CalloutRender';
import Info from '../Editor/Info/Info';
import InfoList from '../Editor/Info/InfoList';
import MImage from '../Editor/Image/MImage';
import config from '@/schema/config';

type Props = {
  content: RenderableTreeNodes;
};

const ContentRenderer = (props: Props) => {
  const components = {
    CalloutRenderer,
    Info,
    InfoList,
    MImage,
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
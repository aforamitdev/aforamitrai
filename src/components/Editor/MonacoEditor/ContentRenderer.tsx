import React from 'react';
import Markdoc, { RenderableTreeNodes, Tag } from '@markdoc/markdoc';
import CalloutRenderer from '../Callout/CalloutRender';
import Info from '../Info/Info';
import InfoList from '../Info/InfoList';
import MImage from '../Image/MImage';
import MAvatar from "../Image/MAvatar"
import Break from "../Break"
import config from '@/schema/config';
import FileZone from "../FileZone/FileZone"

type Props = {
  content: RenderableTreeNodes;
};

const ContentRenderer = (props: Props) => {
  const components = {
    CalloutRenderer,
    InfoList,
    Info,
    MImage,
    MAvatar,
    Break,
    FileZone
  };

  const ast = Markdoc.parse(props.content || '');
  const content = Markdoc.transform(ast, config);

  // console.log(content, 'content');
  return (
    <div className='px-2 py-2'>
      {Markdoc.renderers.react(content, React, { components })}
    </div>
  );
};

export default ContentRenderer;

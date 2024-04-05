import Markdoc, { RenderableTreeNodes } from '@markdoc/markdoc';
import React from 'react';
import CalloutRenderer from './element/CalloutRender';

type Props = {
  content: RenderableTreeNodes;
};

const ContentRenderer = (props: Props) => {
  const components = {
    CalloutRenderer,
  };

  // const ast = Markdoc.parse(props.content);
  // const content = Markdoc.transform(ast, {
  //   tags: {
  //     callout,
  //   },
  // });
  // console.log(content, 'content');

  return Markdoc.renderers.react(props.content, React, { components });
};

export default ContentRenderer;

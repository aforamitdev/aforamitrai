import { Node, Tag } from '@markdoc/markdoc';

const Info: Node = {
  render: 'InfoRenderer',
  transform(node, config: any) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);
    console.log(children, attributes);
    return new Tag('awas', { ...attributes }, children);
  },
};

module.exports = Info;

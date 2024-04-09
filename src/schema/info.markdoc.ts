import { Node, Tag, NodeType } from '@markdoc/markdoc';

const Info: Node = {
  render: 'InfoRenderer',
  type: 'item',
  attributes: {
    name: {
      type: String,
    },
  },
};

module.exports = Info;

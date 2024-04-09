import { Node, Tag, NodeType } from '@markdoc/markdoc';

const InfoElement: Node = {
  render: 'InfoElement',
  attributes: {
    description: {
      type: String,
    },
    title: {
      type: String,
    },
  },
};

module.exports = InfoElement;

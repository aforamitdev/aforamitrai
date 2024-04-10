import { Schema } from '@markdoc/markdoc';

const InfoElement: Schema = {
  render: 'InfoList',
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

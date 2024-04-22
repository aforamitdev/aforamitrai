import { Schema } from '@markdoc/markdoc';

const InfoElement: Schema = {
  render: 'ShowCase',
  attributes: {
    title: {
      type: String,
    },
    techStack: {
      type: Array,
    },
  },
};

module.exports = InfoElement;

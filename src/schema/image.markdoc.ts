import { Schema } from '@markdoc/markdoc';

const Image: Schema = {
  render: 'MImage',
  attributes: {
    height: {
      type: String,
    },
    width: {
      type: String,
    },
    row: {
      type: Boolean,
    },
    altText: {
      type: String,
    },
    src: {
      type: String,
    },
    tw: {
      type: String,
    },
  },
};

module.exports = Image;

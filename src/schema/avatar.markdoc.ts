import { Schema } from '@markdoc/markdoc';

const Avatar: Schema = {
  render: 'MAvatar',
  attributes: {
    src: {
      type: String,
    },
    size: {
      type: String,
    },
    fallback: {
      type: String,
    },
  },
  selfClosing: true,
};

module.exports = Avatar;

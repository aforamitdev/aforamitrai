import { Schema } from '@markdoc/markdoc';

const fileZone: Schema = {
  render: 'FileZone',
  attributes: {
    fileName: {
      type: String,
      required: true,
    },
    folder: {
      type: String,
      matches: ['posts', 'projects'],
      required: true,
    },
  },
  selfClosing: true,
};

module.exports = fileZone;

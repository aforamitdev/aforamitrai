import { Config, Schema } from '@markdoc/markdoc';

class ImageScr {
  validate(value: string, config: Config) {
    if (value.startsWith('https://')) {
      return [
        {
          id: 'image-src',
          level: 'error',
          message: 'all image should containe full ',
        },
      ];
    }
    return [];
  }
}

const Image: Schema = {
  render: 'MImage',
  attributes: {
    height: {
      type: Number,
    },
    width: {
      type: Number,
    },
    row: {
      type: Boolean,
    },
    altText: {
      type: String,
    },
    src: {
      type: String,
      required: true,
    },
    tw: {
      type: String,
    },
  },
};

module.exports = Image;

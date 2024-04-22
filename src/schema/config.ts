const callout = require('./callout.markdoc');
const infolist = require('./infolist.markdoc');
const info = require('./info.markdoc');
const image = require('./image.markdoc');
const avatar = require('./avatar.markdoc');
const b = require('./break.markdoc');
const upload = require('./filezone.markdoc');
const showcase = require('./showcase.markdoc');
const config = {
  tags: {
    callout,
    ilist: infolist,
    card: info,
    image,
    avatar,
    br: b,
    upload: upload,
    showcase,
  },
};

export default config;

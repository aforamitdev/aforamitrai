// import callout from './callout.markdoc.ts';

const callout = require('./callout.markdoc');
const projectinfo = require('./info.markdoc');

const config = {
  tags: {
    info: projectinfo,
    callout,
  },
};

export default config;

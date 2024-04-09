// import callout from './callout.markdoc.ts';

import InfoElement from '@/components/MarkDocExtenations/Info/InfoElement';

const callout = require('./callout.markdoc');
const projectinfo = require('./info.markdoc');
const infoElement = require('./infoelement.markdown');

const config = {
  tags: {
    info: projectinfo,
    element: infoElement,
    callout,
  },
};

export default config;

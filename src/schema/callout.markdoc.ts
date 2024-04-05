module.exports = {
  render: 'CalloutRenderer',
  children: ['paragraph', 'tag', 'list'],
  attributes: {
    type: {
      type: String,
      default: 'note',
      matches: ['check', 'error', 'note', 'warning'],
    },
  },
};

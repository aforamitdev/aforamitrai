module.exports = {
  render: 'FileZone',
  attributes: {
    fileName: {
      type: String,
      require: true,
    },
    folder: {
      type: String,
      matches: ['posts', 'projects'],
      require: true,
    },
  },
};

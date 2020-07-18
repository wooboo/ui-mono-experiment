const uiUtils = require('ui-utils');
module.exports = {
    ...uiUtils.config,
    purge: {
        enabled: true,
        content: ['./*.html'],
      }
  };
const { registerPlugin } = require('@scullyio/scully');
const { ampPlugin } = require('./amp');

const validator = async () => [];
registerPlugin('render', 'amp', ampPlugin, validator);

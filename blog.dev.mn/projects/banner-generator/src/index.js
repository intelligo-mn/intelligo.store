const { registerPlugin } = require('@scullyio/scully');
const { bannerGeneratorPlugin } = require('./banner-generator');

const validator = async () => [];
registerPlugin('render', 'bannerGenerator', bannerGeneratorPlugin, validator);

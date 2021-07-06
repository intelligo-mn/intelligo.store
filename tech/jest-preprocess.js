// See: https://www.gatsbyjs.org/docs/unit-testing/#2-creating-a-configuration-file-for-jest

const babelOptions = {
  presets: ['babel-preset-gatsby'],
}

module.exports = require('babel-jest').createTransformer(babelOptions)

require('dotenv').config()
const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');
const copyFile = promisify(fs.copyFile);
const withCSS = require('@zeit/next-css')

const prod = process.env.APP_ENV === 'production'
const assetPrefix = prod ? '/KevinBal/' : ''

module.exports = withCSS({
  assetPrefix: assetPrefix,
  publicRuntimeConfig: {
    assetPrefix
  },
  exportPathMap: async function(
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      if (dev) {
        return defaultPathMap;
      }
      // This will copy robots.txt from your project root into the out directory
      await copyFile(join(dir, '.nojekyll'), join(outDir, '.nojekyll'));
      return defaultPathMap;
    }
})
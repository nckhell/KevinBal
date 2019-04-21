require('dotenv').config()
const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');
const copyFile = promisify(fs.copyFile);
const withCSS = require('@zeit/next-css')

const ghPages = process.env.APP_ENV === 'gh-pages'
const assetPrefix = ghPages ? '/KevinBal/' : ''

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
      await copyFile(join(dir, 'CNAME'), join(outDir, 'CNAME'));
      await copyFile(join(dir, 'robots.txt'), join(outDir, 'robots.txt'));
      return defaultPathMap;
    }
})
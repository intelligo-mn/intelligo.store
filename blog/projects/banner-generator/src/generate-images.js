const puppeteer = require('puppeteer');
const { resolve } = require('path');

const generateImage = async (route, size) => {
  const outDir = './dist/static/assets/banners'
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    `file://${resolve(`${outDir}/${route.route}/index.html`)}`
  );
  await page.screenshot({
    path: resolve(`${outDir}/${route.route}/${size.name}.png`),
    fullPage: true
  });

  await browser.close();
};

module.exports = { generateImage };

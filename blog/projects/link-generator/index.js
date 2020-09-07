const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
const prompt = question =>
  new Promise(resolve => {
    readline.question(question, url => {
      resolve(url);
    });
  });
const { resolve } = require('path');

const { writeFileSync } = require('fs');
const puppeteer = require('puppeteer');
const convertToKebabCase = string => {
  return string.toLowerCase()
  .replace(/ /g,'-')
  .replace(/[^\w-]+/g,'')

};
const template = (url, title, description, tags, img) =>
  `---
title: '${title}'
description: '${description}'
publishedAt: ${new Date().toISOString()}
updatedAt: ${new Date().toISOString()}
url: ${url}
authors:
  - 'Gary Großgarten'
tags: ${tags
    .split(',')
    .map(t => `\n  - '${t}'`)
    .join('')}
---
${img}
${description}
`;

(async () => {
  const url = await prompt('Enter url:');
  const tags = await prompt('Enter tags (comma separated):');
  readline.close();
  console.log('open:', url);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  page.setViewport({ width: 1200, height: 600 });
  const title = await page.evaluate(
    () => document.querySelector('title').textContent
  );
  const kebapTitle = convertToKebabCase(title);
  const description = await page.$eval(
    "head > meta[name='description']",
    element => element.content
  );
  await page.screenshot({
    path: resolve(`src/assets/img/links/${kebapTitle}.png`)
  });
  await browser.close();
  const content = template(
    url,
    title,
    description,
    tags,
    `![${title} screenshot](assets/img/links/${kebapTitle}.png)`
  );
  writeFileSync(`./content/links/${kebapTitle}.md`, content);
})();

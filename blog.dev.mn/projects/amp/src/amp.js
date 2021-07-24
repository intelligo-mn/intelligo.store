const { readFileSync, writeFileSync, mkdirSync, existsSync } = require('fs');
const { resolve } = require('path');
const { JSDOM } = require('jsdom');
const showdown = require('showdown');

const template = readFileSync(resolve(__dirname, './template.html'));

const ampPlugin = async (html, route) => {
  try {
    const mdString = readFileSync(route.templateFile, 'utf8').toString();

    const md = mdString.slice(
      nth_occurrence(mdString, '---', 2) + 3,
      mdString.length - 1
    );
    const articleHTML = new showdown.Converter().makeHtml(md);
    const dom = new JSDOM(template.toString());
    const content = new JSDOM(articleHTML);
    const original = new JSDOM(html);
    const document = dom.window.document;
    document.title = route.data.title;
    const metaTags = Array.from(
      original.window.document.querySelectorAll('meta')
    ).filter(
      meta =>
        meta.name !== 'viewport' &&
        !meta.getAttribute('charset') &&
        !meta.getAttribute('description')
    );
    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      for (const attribute of tag.attributes) {
        meta.setAttribute(attribute.name,attribute.value);
      }
      document.head.append(meta);
    });
    const link = original.window.document.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute('href', `https://blog.dev.mn${route.route}/amp`);
    original.window.document.head.append(link);
    document.querySelector(
      'link[rel=canonical]'
    ).href = `https://blog.dev.mn${route.route}`;
    document.querySelector("script[type='application/ld+json']").innerHTML = `
    {
      "@context": "http://schema.org",
      "@type": "TechArticle",
      "headline": "${route.data.title}",
      "datePublished": "${new Date(route.data.publishedAt).toISOString()}",
      "image": ["https://blog.dev.mn/assets/banners${route.route}/og.png"]
    }
    `;

    document.querySelector('.logo').href = `https://blog.dev.mn${route.route}`;
    document.querySelector('.more').href = `https://blog.dev.mn${route.route}`;
    document
      .querySelector('.og-image')
      .setAttribute(
        'src',
        `https://blog.dev.mn/assets/banners${route.route}/og.png`
      );
    document.querySelector('.more').innerHTML = `See related articles`;
    document
      .querySelector('.home-button')
      .setAttribute('src', 'https://blog.dev.mn/assets/img/logo-text.svg');

    const imgs = content.window.document.querySelectorAll('img');
    imgs.forEach(i => {
      const amp = content.window.document.createElement('amp-img');
      const div = content.window.document.createElement('div');
      div.classList.add('fixed-container');
      amp.classList.add('contain');
      amp.setAttribute(
        'src',
        i.src.indexOf('https://') === -1 ? `https://blog.dev.mn/${i.src}` : i.src
      );
      amp.setAttribute('alt', i.alt);
      amp.setAttribute('layout', 'fill');
      div.innerHTML = amp.outerHTML;
      i.outerHTML = div.outerHTML;
    });

    document.querySelector('.content').innerHTML =
      content.window.document.body.innerHTML;
    writeFileSyncRecursive(
      `./dist/static${route.route}/amp/index.html`,
      dom.serialize(),
      'utf8'
    );
    return original.serialize();
  } catch (err) {
    console.log(err.message);
  }

  return html;
};

function nth_occurrence(text, searchString, nth) {
  const firstIndex = text.indexOf(searchString);
  const lengthUpToFirstIndex = firstIndex + 1;

  if (nth === 1) {
    return firstIndex;
  } else {
    const stringAfterFirstOccurrence = text.slice(lengthUpToFirstIndex);
    const nextOccurrence = nth_occurrence(
      stringAfterFirstOccurrence,
      searchString,
      nth - 1
    );

    if (nextOccurrence === -1) {
      return -1;
    } else {
      return lengthUpToFirstIndex + nextOccurrence;
    }
  }
}

function writeFileSyncRecursive(filename, content, charset) {
  // create folder path if not exists
  filename
    .split('/')
    .slice(0, -1)
    .reduce((last, folder) => {
      let folderPath = last ? last + '/' + folder : folder;
      if (!existsSync(folderPath)) mkdirSync(folderPath);
      return folderPath;
    });

  writeFileSync(filename, content, charset);
}

module.exports = {
  ampPlugin
};

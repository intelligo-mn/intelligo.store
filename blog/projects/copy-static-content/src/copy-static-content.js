const { readFileSync, writeFileSync, mkdirSync, existsSync } = require('fs');

const copyStaticContentPlugin = async (html, route) => {
  if (!route.templateFile) {
    return html;
  }

  const mdString = readFileSync(route.templateFile, 'utf8').toString();

  const md = mdString.slice(
    nth_occurrence(mdString, '---', 2) + 3,
    mdString.length - 1
  );

  writeFileSyncRecursive(
    `./dist/static/assets/content/${route.route}.md`,
    md,
    'utf8'
  );
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
  copyStaticContentPlugin,
};

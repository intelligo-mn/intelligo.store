const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const imageminSvgo = require('imagemin-svgo');

const { readdirSync } = require('fs');
const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

(async () => {
  const source = 'src/assets/img/blog';
  const directories = getDirectories(source);
  for await (const directory of directories) {
    await imagemin([`${source}/${directory}/*.{jpg,png,svg}`], {
      destination: `${source}/${directory}/optimized`,
      plugins: [
        imageminJpegtran(),
        imageminPngquant({
          quality: [0.6, 0.8]
        })
      ],
      use: [
        imageminSvgo({
          plugins: [{ removeViewBox: false }]
        })
      ]
    });
  }
})();

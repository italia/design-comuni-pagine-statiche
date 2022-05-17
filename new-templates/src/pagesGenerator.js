const fs = require('fs');
const folderHbsPages = './src/pages/';
const arrayPages = [];
const pages = fs.readdirSync(folderHbsPages);

const generatePages = (items, folder, isProduct = false) => {
  items.forEach((item) => {
    const isDirectory = fs.statSync(`${folder}/${item}`).isDirectory();
    if (!isDirectory) {
      const file = item.split('.hbs')[0];
      const outputName = `.${isProduct ? '/products/' : '/'}${file}.html`;
      const fileSplitted = file.replace(/-/g, ' ');

      arrayPages.push({
        output: outputName,
        content: {
          title: fileSplitted,
          description: fileSplitted.toUpperCase(),
        },
        template: `./pages/${isProduct ? 'products/' : ''}${item}`,
      });
    }
  });
};

generatePages(pages, folderHbsPages);
exports.arrayAllPages = arrayPages;

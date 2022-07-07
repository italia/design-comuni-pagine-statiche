const fs = require('fs');

const foldertest = './src/pages/';
const folderHbsPages = './src/pages/sito/';
const folderHbsPagesServices = './src/pages/servizi/';

const arrayPages = [];

const test = fs.readdirSync(foldertest);
const pages = fs.readdirSync(folderHbsPages);
const pagesService = fs.readdirSync(folderHbsPagesServices);

const generatePages = (items, folder, folderName = false) => {
  items.forEach((item) => {
    const isDirectory = fs.statSync(`${folder}/${item}`).isDirectory();
    if (!isDirectory) {
      const file = item.split('.hbs')[0];
      const outputName = `${folderName ? `./${folderName}/` : './'}${file}.html`;
      const fileSplitted = file.replace(/-/g, ' ');

      arrayPages.push({
        output: outputName,
        content: {
          title: fileSplitted,
          description: fileSplitted.toUpperCase(),
        },
        template: `./pages/${folderName ? `${folderName}/` : '/'}${item}`,
      });
    }
  });
};

generatePages(test, foldertest);

generatePages(pages, folderHbsPages, 'sito');

generatePages(pagesService, folderHbsPagesServices, 'servizi');

exports.arrayAllPages = arrayPages;
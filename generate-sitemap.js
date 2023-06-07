const SitemapGenerator = require('sitemap-generator');

const url = 'https://defensecombatives-de.vercel.app';
const outputPath = './public/sitemap.xml';

const generator = SitemapGenerator(url, {
  filepath: outputPath,
  maxEntriesPerFile: 50000,
});

generator.start()
  .then(() => {
    console.log('Sitemap generated successfully');
  })
  .catch((error) => {
    console.error('Error generating sitemap:', error);
  });
var ghpages = require('gh-pages');

ghpages.publish('out', {
  branch: 'master',
  dotfiles: true,
  message: `🚀 Deploy Test`,
}, () => {
  console.log('yayyy');
});
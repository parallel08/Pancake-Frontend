var ghpages = require('gh-pages');

ghpages.publish('out', function(err) {
  console.log('errorrrrrrr ', err);
}, {
  branch: 'master',
  dotfiles: true,
  message: `🚀 Deploy Test`,
}, () => {
  console.log('yayyy');
});
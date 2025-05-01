// Vercel configuration for static site hosting
module.exports = {
  version: 2,
  routes: [
    { src: '/(.*)', dest: '/index.html' }
  ]
};
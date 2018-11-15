const { Nuxt, Builder } = require('nuxt');
const app = require('express')();

// We instantiate Nuxt.js with the options
const isProd = process.env.NODE_ENV === 'production';
const config = require('./nuxt.config.js');

config.dev = !(isProd);
const nuxt = new Nuxt(config);

// No build in production
if (!isProd) {
  const builder = new Builder(nuxt);
  builder.build();
}

app.use(nuxt.render);

app.listen(3000);
console.log('Server is listening on http://localhost:3000');
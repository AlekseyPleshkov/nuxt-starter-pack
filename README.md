# hydra-webpack-nuxt

Vue/Nuxt starter pack. Pug, PostCSS, Docker, Gitlab CI auto deploy.

## Install

``` bash
# Install
$ npm install # or yarn install

# Start server localhost:3000
$ nuxt

# Build static
$ npm run generate

# Production server
$ node server
```

## GitLab Deploy

#### CI Variables

- SSH_PRIVATE_KEY (for connection to server)
- SSH_KNOWN_HOSTS (ip or domain)
- SSH_DIR (upload directory for source)
- PROJECT_NAME (for docker)

## More information

Documentation of [Nuxt](https://github.com/nuxt/nuxt.js)

Plugins and modules
* Axios & Nuxt Axios
* Vue Scrollto
* Vue The Mask
* Vue Scroll Show
* Vue Scroll Focus
* Vue Form Send
* Vue Lazyload
* Vue Img
* Vue2 Touch Events
* Nuxt Social Meta

PostCSS plugins
* [postcss-inject](https://github.com/iamfrntdv/postcss-inject)
* [postcss-import](https://github.com/postcss/postcss-import)
* [postcss-nested-ancestors](https://github.com/toomuchdesign/postcss-nested-ancestors)
* [postcss-nested](https://github.com/postcss/postcss-nested)
* [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties)
* [postcss-calc](https://github.com/postcss/postcss-calc)
* [postcss-apply](https://github.com/pascalduez/postcss-apply)
* [postcss-custom-media](https://github.com/postcss/postcss-custom-media)
* [postcss-flex-short](https://github.com/AlekseyPleshkov/postcss-flex-short)
* [postcss-adaptive-size](https://github.com/AlekseyPleshkov/postcss-adaptive-size)
* [postcss-color-function](https://github.com/postcss/postcss-color-function)
* [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem)
* [postcss-responsive-type](https://github.com/seaneking/postcss-responsive-type)

# Simple React+Redux+Webpack+Postcss Boilerplate

Boilerplate for modern web application

## Features

- [x] [Webpack](https://webpack.github.io)
- [x] [React](https://facebook.github.io/react/)
- [x] [react-transform-hmr](https://github.com/gaearon/react-transform-hmr)
- [x] [Redux](https://github.com/rackt/redux)
- [x] [Babel](https://babeljs.io/)
- [x] [Autoprefixer](https://github.com/postcss/autoprefixer)
- [x] [PostCSS](https://github.com/postcss/postcss)
- [x] [CSS modules](https://github.com/outpunk/postcss-modules)
- [x] [cssnext](https://github.com/MoOx/postcss-cssnext)
- [x] [cssnano](https://github.com/ben-eb/cssnano)
- [x] [react-router-redux](https://github.com/rackt/react-router-redux)


### Directory Layout

```
.
├── /dist/                      # The folder for compiled output
├── /node_modules/              # 3rd-party libraries and utilities
├── /app/                       # The source code of the application
│   ├── /actions/               # Action creators that allow to trigger a dispatch to stores
│   ├── /components/            # React components
│   ├── /constants/             # Constants (action types etc.)
│   ├── /containers/            # React page
│   ├── /reducers/              # Redux reducers
│   ├── /store/                 # Stores contain the application state and logic
│   ├── /utils/                 # Devtools and history settings
│   ├── /index.js               # Entry point scripts
│   ├── /menu.js                # Menu application
│   ├── /routes.js              # Application routes
├── /webpack/                   # Webpack configs
│   ├── /common.config.js       # main config webpack
│   ├── /dev.config.js          # developing modification webpack config
│   ├── /prod.config.js         # production modification webpack config
│   ├── /server.config.js       # Launches the development web server with "live reload"
│   ├── /server.babel.js        # Babel transpiler for node.js
├── /static/                    # Static content (plain html, manifest.json, images)
│── package.json                # The list of 3rd party libraries and utilities
```

## Getting started

1. Clone this repo using `git clone https://github.com/tom910/react-webpack-boilerplate.git`.

2. Run `npm install` to install the dependencies.

3. Run `npm start` to start the local web server.

4. Go to `http://localhost:3000` and you should see the app running!

## Building & Deploying

Run `npm run build:production`, which will compile all the necessary files in a `dist` folder.

## Webpack profiler

Run `npm run profiler`, which will compile all the necessary files a `stats.json`. The result can be seen https://webpack.github.io/analyse/

## TODO

- [ ] react-helmet
- [ ] normal test app
- [ ] ServiceWorker
- [ ] Unit Test
- [ ] FontFaceObserver

# License

MIT

# Watermelon

![Watermelon Logo](src/assets/logo.png?raw=true "Watermelon logo")

A redux based web application template for SPAs. **Currently a work in progress.**

## Rationale

Creating a javascript SPA these days is "that" little complicated.  
While Webpack simplifies many things, there's still a lot of dependencies and manual configuration involved that we don't want to do for every new project.  
This is the reason why Watermelon has been created.

Compared to other boilerplates/templates, we tried to maintain a minimalistic approach. But unfortunately, thanks to the fragmentation of the javascript ecosystem, the amount of dependencies is still insane.

## About

Watermelon is a template for a client side app, it doesn't include a backend.  
It depends on the following packages:

- [React](https://facebook.github.io/react/index.html)
- [React Hot Loader](https://github.com/gaearon/react-hot-loader), to tweak React components without refreshing the browser page, and without losing state.
- [Redux](http://redux.js.org/) for a sane application flow.
- [Babel](https://babeljs.io/), with the ES2015 preset, to transpile ES2015 code while browsers are lacking support for it.
- [Webpack](http://webpack.github.io/) to build the project, with [webpack-dev-server](https://github.com/webpack/webpack-dev-server).
- [Html Webpack Plugin](https://github.com/ampedandwired/html-webpack-plugin) to automatically create a main html page with the correct requires from webpack.
- [style-loader](https://github.com/webpack/style-loader), [sass-loader](https://github.com/jtangelder/sass-loader) and [css-loader](https://github.com/webpack/css-loader) to process stylesheets.
- [file-loader](https://github.com/webpack/file-loader) and [url-loader](https://github.com/webpack/url-loader) to load assets.
- [Mocha](https://mochajs.org/) as testing library.
- [Chai](http://chaijs.com/) as assertion library for tests, with the [chai-immutable](https://github.com/astorije/chai-immutable) plugin.
- [jsdom](https://github.com/tmpvar/jsdom), which is a javascript implementation of the DOM to be used on nodejs. Very useful to test components.


## Development

Launch the server with hot loading using:

```
webpack-dev-server --port 8080 --hot --host 0.0.0.0
```

If the application runs on a virtual machine, it's convenient to set the environment variable HOST, otherwise the websocket client won't connect to the server.  
You can check the output in your browwser console to see if it happens.

```
HOST="edev" webpack-dev-server --port 8080 --hot --host 0.0.0.0
```

You can run tests using:
```
npm run test
```

or watch for them using:
```
npm run test:watch
```

## Contributing

We welcome feedbacks and pull requests.

## Credits

Watermelon logo comes from [here](http://publicdomainvectors.org/en/free-clipart/Watermelon-and-slice-vector-image/16549.html).

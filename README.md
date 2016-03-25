# Watermelon

A redux based web application template for SPAs.

## Rationale

Creating a javascript SPA these days is "that" little complicated.  
While Webpack simplifies many things, there's still a lot of dependencies and manual configuration involved that we don't want to do for every new project.  
This is the reason why Watermelon has been created.

Compared to other boilerplates/templates, we tried to maintain a minimalistic approach. But unfortunately, thanks to the fragmentation of the javascript ecosystem, the amount of dependencies is still insane.

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

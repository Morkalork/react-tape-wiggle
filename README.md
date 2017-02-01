# React Tape Wiggle

This is an example [https://facebook.github.io/react/](react) project that uses [https://github.com/substack/tape](tape) for testing in combination with [https://github.com/airbnb/enzyme](enzyme) for test rendering, [https://github.com/thlorenz/proxyquire](proxyquire) for handling dependency injection in the tests and [http://sinonjs.org/](sinon) for the actual mocking, stubbing and spying.

Apart from what's mentioned above this project also uses [https://github.com/reactjs/react-redux](redux) to handle state. It uses [https://github.com/jador/react-hyperscript-helpers](react-hyperscript-helpers) for the markup (no JSX found in this project!). You'll also notice the lack of [https://webpack.github.io/](webpack), instead I'm using a very straightforward process of [http://browserify.org/](browserify), [https://github.com/babel/babelify](babelify) and npm scripts!

The purpose of this repository is to showcase a project that uses the above mentioned libraries. I will try to explain how to use redux (in a most simplistic way), react-hyperscript-helpers and tape/enzyme for testing.

## Installation

Clone the repository from GitHub:

```
git clone https://github.com/Morkalork/react-tape-wiggle
```

Then install the require node modules:
```
npm install
```

## Running

There is no webpack or gulp to be found here, only hardcore npm scripts, so to build the project run either the build or the watch command (the watch command does pretty much what you'd expect it to do, watch and build when the code changes):

```
npm run build
# or
npm run watch
```

## Development

So, this is a react project and I've separated the UI into components found in the `src/js/` folder. They are built in a OOP fashion using react-hyperscript-helpers instead of JSX. Why? Well, why not.
The application will be a simple input form with some action when you click ok.
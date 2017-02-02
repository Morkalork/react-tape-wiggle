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

## Design

So, this is a react project and I've separated the UI into components found in the `src/js/` folder. They are built in a OOP fashion using react-hyperscript-helpers instead of JSX. Why? Well, why not.
The application is very simple, it has a button which on click loads fake posts from a public API ([https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)). The structure of the project is this:

![The project structure](project-assets/design.png)

The **Application** component uses two other components (there might be more after some refactoring, but this is how it starts out before manic cleaning). The posts are loaded through a button-click in the **Application** component and the **Posts** component listens in on the store contents to get the posts.
This means that every time the store updates (through the button-click in Application) the Posts component re-renders, but not the rest of the page. When the refresh of posts happen it also triggers a notification to show in the **Notification** component, which also listens to the store.

## React and Redux

Weeell, this project won't explain react as a concept or redux either. What I will say is that redux helps react handle state in a neat way and I personally found [https://css-tricks.com/learning-react-redux/](this tutorial) fantastic when it came to explaning how all that works.

## react-hyperscript-helpers WTF!?

Well, I kind of ran into these by mistake, but they are kind of nice. JSX isn't necessarily the prettiest of markup and it isn't technically JavaScript, so you need a bunch of plugins for formatting and linting it. **react-hyperscript-helpers** on the other hand are pure js functions and even though it looks worse than both JSX and a badly beaten sack of potatoes, after you get used to it it is very nice to work with. Here's an example:

```
// JSX
const component = (
    <Application className="foo">
        <h2>Hello World</h2>
        <p id="tag-line">This is the end...</p>
        <Notification className="info" title={title} message={message} />
    </Application>
);

// react-hyperscript-helpers
const component = (
    Application('.foo', [
        h2('Hello World'),
        p('#tag-line', 'This is the end...'),
        Notification('.info', {
            title,
            message
        })
    ])
);
```

It's a matter of taste, but one is JS-compliant and the other is not. I prefer JSX for simple, stupid components with no messy attributes or nested children and react-hyperscript-helpers for when it gets more messy and complex.

Read more about it [https://github.com/Jador/react-hyperscript-helpers](here) or [https://www.reddit.com/r/reactjs/comments/5jonxn/why_is_hyperscript_rarely_used_being_less_noisy/](here).

## SASS

Sass is nice. It allows you to add some structure to your styling. In short, you can nest your selectors which make it easier to avoid code duplication, like in this example:

```
/* CSS */
.foo {
    /* ...1 */
}

.foo .bar {
    /* ...2 */
}

.foo .bar:hover {
    /* ...3 */
}

/* SASS */
.foo {
    /* ...1 */
    .bar {
        /* ...2 */
        &:hover {
            /* ...3 */
        }
    }
}
```

It also allows for you to create mixins, which is a great way to handle vendor-specific selectors (such as transform and -moz-transform), variables (`$brand-black: #111`), functions (such as `lighten` or `darken` which takes a color and makes it lighter or darker) and much more. It's good stuff, the only thing is that you have to transpile it from SASS to CSS (in the above example that SASS will be transpiled pretty much into the above CSS).
In this project I use `node-sass` for transpiling.

Read more about it [http://sass-lang.com/](here) or [https://scotch.io/tutorials/getting-started-with-sass](here).

## Testing with tape

I'm using **tape** to test this project and the reason is that I don't really like tape. I do, but not really. I used to prefer Jasmine and creating enormous test files with setups and nested tests and whatnot. Hipsters told me tape rocked because it was small, simple and concise. I don't like any of those concept but I tried it anyway and now I'm hooked.

Basically, a tape test goes like this:

```
import test from 'tape';
import Foo from './foo';

test('Foo should throw if called without argument', (assert) => {
    assert.throws(() => Foo(), /Error/, 'Foo throws');
    assert.end();
});
```

You import tape and whatever you want to test and then you set the test up and run your assertion. You have to either tell tape how many tests are going to run, or end it by calling its `.end` function.

Read more about tape [https://github.com/substack/tape](here) or [https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4#.vp494mlpn](here).
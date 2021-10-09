# Little H

+ No transpiler bullshit.

+ Use react-like API to build the UI, but does not help you update it frequently.

+ Ignorable 1Kb size.

```html
<html>
  <head>
    <title>
      My Little Page
    </title>

    <style>
      .search-form-header {
        background: red;
      }
    </style>
  </head>
  <body>
    <script type="module">
      import { h } from 'https://unpkg.com/little-h@latest/dist/index.module.js';

      const Header = () => {
        return h('div',
          { class: 'search-form-header' },
          h('h1', {}, 'Weather Search'),
          h('p', {}, 'Fill out the form to get weather info!'),
        );
      };

      document.body.appendChild(h(Header).render());
    </script>
  </body>
</html>
```

## Installation

1. Install via package manager

    ```
    yarn add little-h
    # npm i little-h
    ```

2. Import via ECMAScript Module

    ```html
    <script type="module">
      import { h } from 'https://unpkg.com/little-h@latest/dist/index.module.js';

      // do something with h

    </script>
    ```

    Make sure you have `type="module"` in the script attributes and your browser (thankfully) supports necesssary ES6 features.

## API Reference

+ `h(component, [props], [...children])`
  + Create a element (virtual dom) representing the UI you want to build.

+ `useRef`
  + [useRef](https://reactjs.org/docs/hooks-reference.html#useref) hook

+ `useEffect`
  + [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect) hook

+ `Element.render`
  + Build the virtual element into HTML element.



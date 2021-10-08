# Little H

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
      import { h } from 'xxx';

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
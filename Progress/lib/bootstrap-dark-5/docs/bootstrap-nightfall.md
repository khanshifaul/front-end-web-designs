# Bootstrap-Nightfall Quick Start

A basic HTML file should look like this:

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- The page supports both light and dark color schemes, with light being default -->
    <meta name="color-scheme" content="light dark">

    <!-- Bootstrap CSS (as per normal) -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Add the Bootstrap-Nightfall Variant CSS (the media attribute is for dark auto-switching) -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-dark-5@1.1.3/dist/css/bootstrap-nightfall.min.css" rel="stylesheet" media="(prefers-color-scheme: dark)">

    <title>Hello, world!</title>

    <!-- Optional Meta Theme Color is also supported on Safari and Chrome -->
    <meta name="theme-color" content="#111111" media="(prefers-color-scheme: light)">
    <meta name="theme-color" content="#eeeeee" media="(prefers-color-scheme: dark)">
  </head>
  <body>
    <!-- ////////////// -->
    <!-- Your HTML here -->
    <!-- \\\\\\\\\\\\\\ -->

    <!-- Optional Bootstrap JavaScript -->
    <script src="location/of/the/bootstrap.js/here"></script>
  </body>
</html>
```

Refer to the [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.1/getting-started/introduction/#starter-template) for more help.

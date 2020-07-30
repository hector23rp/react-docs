# REACT Sandbox

This repository is created in order to improve my knowledge about React framework and keep learning.

## Requirements

- NodeJS

## Importar React y Babel

En el index.html se debe importar la librería React y Babel. Esta última es la que le permite a React compilar código Javascript moderno a código nativo que sea soportado por el navegador.

*Ejemplo*

```html
<head>
    <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <title>ReactApp</title>
</head>
```

[index.html](index.html)

## Crear una aplicación de React

```bash
$ npx create-react-app my-app
```


# REACT Playground

This repository is created in order to improve my knowledge about React framework and keep learning.

## Requirements

- NodeJS

## Conceptos Básicos

1. [Renderizar Elementos](./docs/Conceptos-Principales/1-RenderizarElementos.md)
2. [Componentes](./docs/Conceptos-Principales/2-Componentes.md) 
3. [Estados y Ciclo de Vida](./docs/Conceptos-Principales/3-Estado-CicloDeVida.md) 
4. [Manejador de Eventos](./docs/Conceptos-Principales/4-ManejadorEventos.md) 
5. [Renderizado Condicional](./docs/Conceptos-Principales/5-RenderizadoCondicional.md) 
6. [Listas y Keys](./docs/Conceptos-Principales/6-Listas-Keys.md) 
7. [Composición y Herencia](./docs/Conceptos-Principales/7-Composicion-Herencia.md) 
8. [Pensando en React](https://es.reactjs.org/docs/thinking-in-react.html)

## React Testing

1. [Instalación](./docs/React-Testing/1-Instalación.md)
2. [Selectores y Queries. Testear renderizado](./docs/React-Testing/2-Testear-Renderizado.md)
3. [Fire Events](./docs/React-Testing/3-Fire-Events.md)

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

## Crear una aplicación de React mediante Create-React-App

https://create-react-app.dev/docs/getting-started

```bash
$ npx create-react-app my-app
```

## Scripts de Create React App

https://create-react-app.dev/docs/available-scripts/


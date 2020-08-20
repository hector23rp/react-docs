# Renderizar Elementos

Índice:

1. Renderizar un elemento en el DOM (elemento raíz)

2. Actualizar el elemento renderizado


Un elemento describe lo que quieres ver en la pantalla:

```jsx
const element = <h1>Hello, world</h1>;
```

## Renderizar un elemento en el DOM (elemento raíz)

En React existe un elemento llamado nodo "raíz":

```html
<div id="root"></div>
```

Todo lo que esté dentro de este nodo raíz será manejado por React DOM.

Para renderizar un elemento de React en un nodo raíz del DOM, se pasan los dos elementos a **ReactDOM.render()**:

```jsx
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

## Actualizar el elemento renderizado

Los elementos de React son inmutables (una vez se crea un elemento, no se puede cambiar sus hijos o atributos).

La única manera de actualizar la interfaz de usuario es creando un nuevo elemento y pasarlo a **ReactDOM.render()**

React DOM compara el elemento y sus hijos con el elemento anterior, y solo aplica las actualizaciones del DOM que son necesarias para que el DOM esté en el estado deseado.

[Ejemplo](../../src/ConceptosPrincipales/RenderizarElementos/Ejemplo1-ActualizarDOM.js):
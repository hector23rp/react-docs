# React Testing

## Librerías para testear aplicaciones React

- @testing-library/react
- @testing-library/jest-dom

## Creación de test de un componente React

Por ejemplo, vamos a testear el siguiente componente de React:

```jsx
import React from react

const Component = () => {
  return <p>Hello</p>
}

export default Component
```


Importamos los siguientes módulos:

```tsx
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

import Component from './Component' // Importamos el componente que queremos testear
```

Aquí también importaríamos el módulo que quisiéramos testear.
El método render renderiza el componente y permite testear si el componente se ha renderizado o no.

Ahora hacemos el test:

```js
test('renders content', () => {
  const component = render(<Component />)
})
```

El objeto que nos devuelve el método render, contiene diferentes métodos o queries que nos permite testear el componente que se le pasa como argumento.

Las diferentes queries que se pueden utilizar y su descripción se pueden encontrar en el siguiente [enlace](https://testing-library.com/docs/react-testing-library/cheatsheet/#queries)

Si quisiéramos probar, por ejemplo, que dentro de un componente existe un texto: 'Hola'. Se podría hacer de las siguientes formas:

1. Mediante la query **getByText** del objeto que devuelve render:

```js
test('renders content', () => {
  const component = render(<Component />)
  component.getByText('Hola')
})
```

2. Mediante el método **expect** que importa **@testing-library/jest-dom/extend-expect**:

```js
test('renders content', () => {
  const component = render(<Component />)
  expect(component.container).toHaveTextContent('Hello')
})
```

### Mostrar lo que se está renderizando

1- Mediante el método **debug** del objeto que devuelve render

```js
test('renders content', () => {
  const component = render(<Component />)
  component.debug()
})
```

2- Mediante el método **prettyDOM** de la librería **@testing-library/dom**

```js
test('renders content', () => {
  const p = component.container.querySelector('p')
  console.log(prettyDOM(p))
})
```

### Simular eventos


# React Testing - Testear renderizado

## Creación de test de un componente React

Para empezar a testear, vamos a utilizar como ejemplo un componente "semáforo" que pintará un mensaje por pantalla con la acción a realizar dependiendo del color que tenga en ese momento. Si el semáforo está en rojo, pintará "esperar" por pantalla. Si el semáforo está en verde, pintará "cruzar" por pantalla.

**Semaforo.js**

```jsx
import React from "react";

const Semaforo = ({ color }) => {
  const estados = {
    rojo: "esperar",
    verde: "cruzar",
  };
  return <p>{estados[color]}</p>;
};

export default Semaforo;
```

Ahora vamos a crear el fichero de test que vamos a utilizar para testear el componente semáforo.

Primero importamos los siguientes módulos:

**Semaforo.test.js**

```jsx
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Semaforo from "./Semaforo";
```

- Importamos la librería React ya que vamos a utilizar componentes React y lenguaje jsx.
- Importamos el método **render** de la librería @testing-library/react. Este método permite renderizar el componente en un árbol DOM, el cual utilizaremos para testear nuestro componente y simular su comportamiento. Por defecto, este método crea un elemente **div** en el **document.body** para que sirva de contenedor al componente.
- Importamos el módulo **@testing-library/jest-dom/extend-expect**. Este módulo permite extender los métodos la librería jest. Agrega métodos como **toBeInTheDocument**, **toBeEnabled**, etc. Utilizaremos algunos de estos métodos en el ejemplo. Para ver la lista completa de los métodos disponibles: [aquí](https://github.com/testing-library/jest-dom)

Una vez configurado el entorno para realizar los test, vamos a ver un ejemplo de cómo se renderiza un componente:

```js
test("Semaforo example", () => {
  const renderer = render(<Semaforo color="rojo" />);
});
```

Le pasamos el componente Semaforo al método render para renderizar el componente. Este método nos devuelve un objeto que nos permite acceder al DOM generado y a los diferentes métodos de jest para realizar las diferentes comprobaciones.

Si ejecutamos el método **debug** de jest, podemos ver el DOM que se ha generado:

```js
test("Semaforo example", () => {
  const renderer = render(<Semaforo color="rojo" />);
  renderer.debug();
});
```

Salida

```html
<body>
  <div>
    <p>esperar</p>
  </div>
</body>
```

Como se explicó anteriormente, jest genera por defecto el componente dentro de un elemento div en el body del documento. En el caso que quisiéramos cambiar dicho contenedor, podemos especifiarlo mediante la propiedad **conatiner**:

```js
const article = document.createElement("article");
const renderer = render(<Semaforo color="rojo" />, {
  container: document.body.appendChild(article),
});
```

Salida

```html
<article>
  <p>esperar</p>
</article>
```

## Comprobar que el componentes se renderiza correctamente (Selectores o Queries)

El objeto que nos devuelve el método render, contiene diferentes métodos o queries que nos permite testear el componente que se le pasa como argumento.

Las diferentes queries que se pueden utilizar y su descripción se pueden encontrar en el siguiente [enlace](https://testing-library.com/docs/react-testing-library/cheatsheet/#queries)

### `getByText`

Mediante la query `getByText` del objeto que devuelve render, podemos comprobar que el componente se renderiza de forma correcta comprobando si el texto que contiene (en el caso que lo tuviera) es el esperado.

```js
test("getByText example", () => {
  const renderer = render(<Semaforo color='rojo' />)
  expect(renderer.getByText('esperar')).toBeInTheDocument()
});
```

El método `getByText` acepta un `string` como input pero también una `expresión regular`:

```js
component.getByText(/esperar/);
```

### `getByRole`

Este método se suele utilizar para coger elementos a partir de los `atributos aria-label`. Sin embargo, existen [roles implícitos en los elementos HTML](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) (como button para los button, o `listitem` para los elementos li), por lo que también podemos utilizar este método para conseguir los elementos a partir de sus roles implícitos:

`Component.jsx`

```jsx
const Component = () => {
  return <button>Click here</button>;
};
```

`Component.test.js`

```js
import React from "react";
import { render, screen } from "@testing-library/react";

import Component from "./Component";
test("renders Component component", () => {
  render(<Component />);

  expect(screen.getByRole("button")).toBeInTheDocument();
});
```

### Otros Selectores

- `getByLabelText`
- `getByPlaceholderText`
- `getByAltText`
- `getByDisplayValue`

## Variantes de selectores (`queryBy` y `findBy`)

A parte de los selectores `getBy` que se ha explicado en la sección anterior, existen otros dos selectores: `queryBy` y `findBy`. Estos selectores tienen las mismas variantes:

- `queryByLabelText`
- `queryByPlaceholderText`
- `queryByAltText`
- `queryByDisplayValue`

y

- `findByLabelText`
- `findByPlaceholderText`
- `findByAltText`
- `findByDisplayValue`

### ¿Cual es la diferencia entre `getBy` y `queryBy`?

`getBy` retorna un elemento o un error. Esto es una ventaja a la hora de saber cuando el test está fallando. El inconveniente es cuando queremos realizar un test donde esperamos que ese elemento no existe en el DOM. Por ejemplo:

```js
import React from "react";
import { render, screen } from "@testing-library/react";

import Component from "./Component";
test("renders Component component", () => {
  render(<Component />);

  expect(screen.getByText("text")).toBeNull(); // Fails
});
```

En este ejemplo, el test fallará aunque hayamos puesto que esperemos que el elemento no se encuentre en el DOM. En estos casos es mejor utilizar `queryBy`:

```js
import React from "react";
import { render, screen } from "@testing-library/react";

import Component from "./Component";
test("renders Component component", () => {
  render(<Component />);

  expect(screen.queryByText("text")).toBeNull(); // Succesfull
});
```

### ¿Cuándo utilizar `findBy`?

Este método se debe utilizar cuando queremos testear elementos asíncronos, cuyo contenido aparecerá más adelante. Por ejemplo, tenemos un componente en React que coge el nombre de usuario de una API. Esta API retorna un promise de JavaScript que se ejecuta inmediatamente con un objeto que contiene el nombre de usuario. El componente almacena el nombre de usuario en su estado y se vuelve a renderizar. Tras este nuevo renderizado, el componente debe pintar el text "Signed in as":

`Component.jsx`

```jsx
function getUser() {
  return Promise.resolve({ id: "1", name: "Robin" });
}

const Component = () => {
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      setUser(user);
    };

    loadUser();
  }, []);
  return <div>{user ? <p>Signed in as {user.name}</p> : null}</div>;
};
```

Si quisiéramos testear este componente, debemos escribir un test asíncrono ya que debemos esperar a que la promesa se resuelva de forma asíncrona:

`Component.test.js`

```js
import React from "react";
import { render, screen } from "@testing-library/react";

import Component from "./Component";

test("renders Component", async () => {
  render(<App />);

  expect(screen.queryByText(/Signed in as/)).toBeNull();

  expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
});
```

## Método `expect` de `@testing-library/jest-dom/extend-expect`

```js
test("renders content", () => {
  const component = render(<Component />);
  expect(component.container).toHaveTextContent("Hello");
});
```

## Mostrar lo que se está renderizando (Debug)

1- Mediante el método `debug` del objeto que devuelve render

```js
test("renders content", () => {
  const component = render(<Component />);
  component.debug();
});
```

2- Mediante el método `prettyDOM` de la librería `@testing-library/dom`

```js
test("renders content", () => {
  const p = component.container.querySelector("p");
  console.log(prettyDOM(p));
});
```

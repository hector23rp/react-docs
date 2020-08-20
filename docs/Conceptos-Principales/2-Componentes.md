# Componentes

Índice:

1. Pasar variables al HTML

2. Comunicación entre componentes

3. Definir el tipo de las propiedades que puede recibir el componente

4. Valores por defecto de las propiedades que recibe el componente


En React hay dos tipos de componentes:

- Los que están basados en clases

- Los que están basados en funciones (FC) (Esta es la forma con la que se hace ahora )

## 1. Pasar variables al HTML

```js
const App = () => {

    const saludo = 'Hola Mundo';

    return (
        <Fragment>
            <h1> { saludo } </h1>
            <p> Mi primera aplicación </p>
        </Fragment>
    );
};
```

## 2. Comunicación entre componentes

```js
ReactDOM.render( <App saludo="Holaa" />, divRoot); 
```

```js
const App = (props) => {

    console.log(props); // {saludo: 'Holaa' }
    return ();
};
```

## 3. Definir el tipo de las propiedades que puede recibir el componente

Debemos importar la librería *prop-types*

```js
import PropTypes from 'prop-types';
```

Ahora debemos definir el tipo de variable que será la propiedad que reciba el componente:
```js
const App = ({ saludo }) => {
    ...
};

App.propTypes = {
    saludo: PropTypes.string
}
```

NOTA: esta validación dará error cuando se reciba la variable con un tipo distinto al definito. Pero si no se recibe la variable no saltará ningún error ya que la variable es opcional.

Para especificar que la propiedad es obligatoria:

```js
App.propTypes = {
    saludo: PropTypes.string.isRequired
}
```

## 4. Valores por defecto de las propiedades que recibe el componente

1ª Opción

```js
const App = ({ saludo, subtitle = 'Soy un subtítulo' }) => {
    ...
}
```

2ª Opción

```js
App.defaultProps = {
    subtitle: 'Subtitle'
}
```

La segunda opción tiene prioridad sobre la primera, es decir, si ponemos las dos opciones el valor por defecto será el definido en la segunda opción.
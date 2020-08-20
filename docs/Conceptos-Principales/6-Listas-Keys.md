# Listas y Keys

Se puede agrupar diferentes componentes en un array para luego renderizar este mismo. Pero cuando se hace esto, debemos definir una "key" a cada componente del array para que React pueda identifcar cada componente.

### Ejemplo array de componentes


```jsx
function ArrayComponent(props) {
    let numbers = [1,2,3,4];
    numbers = numbers.map((number, index) => {
        return {
            id: index,
            number
        }
    })
    return (
    <ul>
        {numbers.map((item) => {
            return (
            <li key={item.id}>
                {item.number}
            </li>
            );
        })}
    </ul>
    );
}
```

### Keys

- Los keys permiten a React identificar cada componente de una array.

- Sus valores deben ser únicos por cada componente

- No se puede utilizar el index de la posición del componente en el array como key, ya que si eliminamos un elemento del array, el index de los demás elementos se modificarán.

# Manejador de Eventos

Índice:

1. Características


### 1. Características

- Con JSX pasas una función como el manejador del evento, en vez de un string:

```jsx
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

- Para prevenir el comportamiento por defecto se debe llamara explícitamente al métedo **preventDefault**

```jsx
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```

## 2. Cosas a tener en cuenta

- Para utilizar this en el callback:

```jsx
render() {
    return (
        <button onClick={this.handleClick}>
            {this.state.isToggle ? 'ON' : 'OFF'} 
        </button>
    );
}
```

Se debe realizar el siguiente enlace en el constructor:

```jsx
constructor(props) {
    super(props);
    this.state = {
        isToggle: true
    };

    this.handleClick = this.handleClick.bind(this);
}
```

Esto ocurre porque en JavaScript los métodos de clase no están ligados por defecto.


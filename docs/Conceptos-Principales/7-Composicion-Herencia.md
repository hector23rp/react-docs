# Composición vs herencia

### Contención

Un componente le puede pasar un componente a un componente hijo. Este componente hijo no tiene por qué conocer sus hijos de antemano y cogerlos de los que le pasa el componente padre.

Por ejemplo, si tenemos el siguiente componente:

```jsx
function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}
```

Todo lo que esté dentro del componente hijo (en este caso FancyBorder) se le puede pasar a través de la propiedad "props.children". De esta forma, el componente hijo puede renderizar este contenido de la siguiente forma:

```jsx
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}
```


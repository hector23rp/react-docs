import React from 'react'; // Esta librería permite importar las librerías  de React. Entre ellas las que nos permite utlizar JSX (XML en JavaScript)
import ReactDOM from 'react-dom'; // Librerías que nos permite jugar con el DOM de React para renderizar

import './index.css'; // CSS del componente. Sólo hace falta importarlo para utilizarlo
import App from './App';

// Cogemos el elemento donde queremos renderizar el contenido
const divRoot = document.querySelector('#root');

/***
 *  Renderizamos el contenido
 * @param 1: contenido a renderizar
 * @param 2: elemento donde renderizamos
 */
ReactDOM.render( <App saludo={ "Hola" } />, divRoot); 


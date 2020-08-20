import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Clock from './ConceptosPrincipales/Estado-CicloDeVida/clock';
import Button from './ConceptosPrincipales/ManejadorEventos/button';
import LoginControl from './ConceptosPrincipales/RenderizadoCondicional/ejemplo1';
import ArrayComponent from './ConceptosPrincipales/Listas-Keys/ejemplo1'

/**
 * 
 * @param {*} props Parámetros que recibe el componente de otro componente 
 */
const App = ({ saludo, subtitle = 'Soy un subtítulo' }) => {

    return (    // Sólo pondemos retornar un objeto, por lo que lo metemos entre paréntesis para importarlo como si fuera un objeto
        <Fragment>
            <h1> { saludo } </h1>
            <p> { subtitle } </p>
            <Clock></Clock>
            4. Manejador de Eventos: <Button></Button>
            <LoginControl></LoginControl>
            6. Listas y Keys: <ArrayComponent></ArrayComponent>
        </Fragment>
    );
};

App.propTypes = { // Definición de los tipos de las propiedades del componente
    saludo: PropTypes.string.isRequired
}

App.defaultProps = {
    subtitle: 'Subtitle'
}

export default App;
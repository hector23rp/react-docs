import React from 'react'

const Semaforo = ({ color }) => {
  const estados = {
    'rojo': 'esperar',
    'verde': 'cruzar'
  }
  return (
    <p>{estados[color]}</p>
  )
}

export default Semaforo
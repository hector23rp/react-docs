import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
/* import "@testing-library/jest-dom"; */
import Semaforo from "../Semaforo";

describe.only('Semaforo Tests', () => {
  test('getByText example', () => {
    const renderer = render(<Semaforo color='rojo' />)
    expect(renderer.getByText('esperar')).toBeInTheDocument()
  })

  test('getByText example with other container', () => {
    const article = document.createElement('article')
    const renderer = render(<Semaforo color='rojo' />,{
      container: document.body.appendChild(article)
    })
    expect(renderer.getByText('esperar')).toBeInTheDocument()
  })

  test('getByText example with regular', () => {
    const renderer = render(<Semaforo color='rojo' />)
    expect(renderer.getByText(/esperar/)).toBeInTheDocument()
  })
  
  test('getByRole example', () => {
    const renderer = render(<Semaforo color='rojo' />)
    expect(renderer.getByRole('p')).toBeInTheDocument()
  })
})
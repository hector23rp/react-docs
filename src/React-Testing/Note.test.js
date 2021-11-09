import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import Note from './Note'

test('renders content', () => {
  const note = {
    content: 'This is a test',
    important: true
  }

  const component = render(<Note note={note} />)

  // Formas de comprobar el resultado del test
  // 1- component.getByText('This is a test')
  // 2- expect(component.container).toHaveTextContent('This is a test')
  
  // Formas de visualizar el árbol DOM que renderiza
  // 1- component.debug()
  const li = component.container.querySelector('li')
  console.log(prettyDOM(li))
})

test('clicking the button calls event handler once', () => {
  const note = {
    content: 'This is a test',
    important: true
  }

  const mockHandler = jest.fn()

  const component = render(<Note note={note} toggleImportance={mockHandler} />)
  const button = component.getByText('make not important')
  fireEvent.click(button)

  expect(mockHandler.mock.calls).toHaveLength(1)
})
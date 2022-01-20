import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Note from "../Note";

// test('clicking the button calls event handler once', () => {
//   const note = {
//     content: 'This is a test',
//     important: true
//   }

//   const mockHandler = jest.fn()

//   const component = render(<Note note={note} toggleImportance={mockHandler} />)
//   const button = component.getByRole('button')
//   fireEvent.click(button)

//   expect(mockHandler.mock.calls).toHaveLength(1)
// })

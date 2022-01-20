import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { prettyDOM } from "@testing-library/dom";
import "@testing-library/jest-dom";
import Note from "../Note";

const note = {
  content: "This is a test",
  important: true,
};

describe("Selectors example", () => {
  test("getByText example", () => {
    const component = render(<Note note={note} />);

    expect(component.getByText("This is a test")).toBeInTheDocument();
    expect(component.getByText(/test/)).toBeInTheDocument();
    expect(component.getByText(/This is a test/)).toBeInTheDocument();
  });

  test('getByRole example', () => {
    render(<Note note={note} />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  test('expect example', () => {
    const component = render(<Note note={note} />);

    expect(component.container).toHaveTextContent('This is a test')
  })
});

describe("Debug DOM", () => {
  test(".debug() method example", () => {
    const component = render(<Note note={note} />);

    component.debug();
  });

  test("prettyDOM method example", () => {
    const component = render(<Note note={note} />);

    const li = component.container.querySelector("li");
    console.log(prettyDOM(li));
  });
});

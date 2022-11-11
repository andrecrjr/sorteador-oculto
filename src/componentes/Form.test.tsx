import { render, screen } from "@testing-library/react";
import React from "react";
import Form from "./Form";

test("when empty input, cant add new participants", () => {
  //find in the dom the input
  //find button
  //grant that input to be in the document

  render(<Form />);
  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );

  const button = screen.getByRole("button");

  expect(input).toBeInTheDocument();
  expect(button).toBeDisabled();
});

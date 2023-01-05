import { fireEvent, render, screen, act } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Form from "./Form";

describe("Form Component behaviours", () => {
  test("when empty input, cant add new participants", () => {
    //find in the dom the input
    //find button
    //grant that input to be in the document

    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    const button = screen.getByRole("button");

    expect(input).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  test("add a participant which has a name written", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const button = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "Eroshi",
      },
    });
    fireEvent.click(button);

    expect(input).toHaveFocus();
    expect(input).toHaveValue("");
  });

  test("duplicated names cant be added in the list", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const button = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "Eroshi",
      },
    });
    fireEvent.click(button);
    fireEvent.change(input, {
      target: {
        value: "Eroshi",
      },
    });
    fireEvent.click(button);
    const errorMessage = screen.getByRole("alert");
    expect(errorMessage.textContent).toBe(
      "Nomes duplicados não são permitidos"
    );
  });

  test("error message needs to vanish after timers", () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const button = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "Eroshi",
      },
    });
    fireEvent.click(button);
    fireEvent.change(input, {
      target: {
        value: "Eroshi",
      },
    });
    fireEvent.click(button);
    let errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeInTheDocument();
    act(() => {
      jest.runAllTimers();
    });
    errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeNull();
  });
});

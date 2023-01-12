import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { Sort } from "./Sort";
import { useParticipantList } from "../state/hook/useListParticipant";
import { useResultSort } from "../state/hook/useSortResult";

jest.mock("../state/hook/useListParticipant", () => {
  return {
    useParticipantList: jest.fn(),
  };
});

jest.mock("../state/hook/useSort", () => {
  return {
    useSort: jest.fn(),
  };
});

jest.mock("../state/hook/useSortResult", () => {
  return {
    useResultSort: jest.fn(),
  };
});

describe("In Sort page", () => {
  const participants = ["André", "Carlos", "Santos"];
  const resultSort = new Map([
    ["André", "Carlos"],
    ["Carlos", "Santos"],
    ["Santos", "André"],
  ]);
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue(participants);
    (useResultSort as jest.Mock).mockReturnValue(resultSort);
  });
  test("all participants can show his secret friend", () => {
    render(
      <RecoilRoot>
        <Sort />
      </RecoilRoot>
    );
    const options = screen.queryAllByRole("option");
    expect(options).toHaveLength(3);
  });
  test("show secret friend when needed", () => {
    render(
      <RecoilRoot>
        <Sort />
      </RecoilRoot>
    );
    const select = screen.getByPlaceholderText("User Selection");
    fireEvent.change(select, {
      target: {
        value: participants[0],
      },
    });
    const botao = screen.getByRole("button");
    fireEvent.click(botao);
    const friendSecret = screen.getByRole("alert");
    expect(friendSecret).toBeInTheDocument();
  });
});

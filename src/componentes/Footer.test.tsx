import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { Footer } from "./Footer";
import { useParticipantList } from "../state/hook/useListParticipant";
jest.mock("../state/hook/useListParticipant", () => {
  return {
    useParticipantList: jest.fn(),
  };
});

const mockNavigate = jest.fn();
const mockSort = jest.fn();

jest.mock("../state/hook/useSort", () => {
  return {
    useSort: () => mockSort,
  };
});

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

describe("when there is no participants enough", () => {
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue([]);
  });
  test("you can't start the game", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});

describe("when there is participants enough", () => {
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue([
      "andre",
      "carlos",
      "santos",
    ]);
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );
  });
  test("you can start the game", () => {
    const button = screen.getByRole("button");
    expect(button).not.toBeDisabled();
  });
  test("the game has started", () => {
    const botao = screen.getByRole("button");
    fireEvent.click(botao);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith("/sort");
    expect(mockSort).toHaveBeenCalledTimes(1);
  });
});

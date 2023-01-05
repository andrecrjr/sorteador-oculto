import { render, screen } from "@testing-library/react";
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

describe("when there is participants", () => {
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue([
      "andre",
      "carlos",
      "santos",
    ]);
  });
  test("you can start the game", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");
    expect(button).not.toBeDisabled();
  });
});

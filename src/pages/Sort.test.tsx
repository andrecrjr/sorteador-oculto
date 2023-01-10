import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { Sort } from "./Sort";
import { useParticipantList } from "../state/hook/useListParticipant";

jest.mock("../state/hook/useListParticipant", () => {
  return {
    useParticipantList: jest.fn(),
  };
});

describe("In Sort page", () => {
  const participants = ["André", "Carlos", "Santos"];
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue(participants);
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
});

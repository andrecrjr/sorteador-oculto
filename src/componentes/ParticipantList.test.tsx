import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { ParticipantList } from "./ParticipantList";
import { useParticipantList } from "../state/hook/useListParticipant";

jest.mock("../state/hook/useListParticipant", () => {
  return {
    useParticipantList: jest.fn(),
  };
});

describe("participant list without no one", () => {
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue([]);
  });
  test("should be render without element", () => {
    render(
      <RecoilRoot>
        <ParticipantList />
      </RecoilRoot>
    );
    const itens = screen.queryAllByRole("listitem");
    expect(itens).toHaveLength(0);
  });
});

describe("participant list with participants", () => {
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue([
      "andré",
      "carlos",
      "santos",
    ]);
  });
  it("should render with two elements", () => {
    render(
      <RecoilRoot>
        <ParticipantList />
      </RecoilRoot>
    );
    const itens = screen.queryAllByRole("listitem");
    expect(itens).toHaveLength(3);
  });
});

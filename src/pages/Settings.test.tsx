import { render } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { Settings } from "./Settings";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

describe("settings page", () => {
  it("should render correctly", () => {
    const { container } = render(
      <RecoilRoot>
        <Settings />
      </RecoilRoot>
    );
    expect(container).toMatchSnapshot();
  });
});

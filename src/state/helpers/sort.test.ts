import { render } from "@testing-library/react";
import { sort } from "./sort";

describe("Realizing a secret friend result", () => {
  test("each participant cannot sort his name", () => {
    const participants = ["André", "Carlos", "Santos", "Junior", "a", "g"];
    const sorted = sort(participants);
    sorted.forEach((participant) => {
      const secretFriend = sorted.get(participant);
      console.log(secretFriend, participant);
      expect(secretFriend).not.toEqual(participant);
    });
  });
});

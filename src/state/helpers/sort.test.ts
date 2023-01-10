import { sort } from "./sort";

describe("Realizing a secret friend result", () => {
  test("each participant cannot sort his name", () => {
    const participants = ["André", "Carlos", "Santos", "Junior"];
    const sorted = sort(participants);
    sorted.forEach((participant) => {
      const secretFriend = sorted.get(participant);
      expect(secretFriend).not.toEqual(participant);
    });
  });
});

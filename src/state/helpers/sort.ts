import arrayShuffle from "shuffle-array";

export const sort = (participants: string[]) => {
  const participantsTotal = participants.length;
  const shuffled = arrayShuffle([...participants]);
  const result = new Map<string, string>();
  for (let index = 0; index < participantsTotal; index++) {
    const friendIndex = index === participantsTotal - 1 ? 0 : index + 1;
    result.set(shuffled[index], shuffled[friendIndex]);
  }
  return result;
};

import { useParticipantList } from "./useListParticipant";
import { useSetRecoilState } from "recoil";
import { secretFriendResult } from "../atom";
import { sort } from "../helpers/sort";

export const useSort = () => {
  const participants = useParticipantList();
  const setResult = useSetRecoilState(secretFriendResult);

  return () => {
    const result = sort(participants);
    setResult(result);
  };
};

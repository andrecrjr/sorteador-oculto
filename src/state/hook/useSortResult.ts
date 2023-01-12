import { useRecoilValue } from "recoil";
import { secretFriendResult } from "../atom";

export const useResultSort = () => {
  return useRecoilValue(secretFriendResult);
};

import React from "react";
import { useParticipantList } from "../state/hook/useListParticipant";
import { useNavigate } from "react-router-dom";
import { useSort } from "../state/hook/useSort";
import { OrangeButton } from "./styles/Input";

export const Footer = () => {
  const participants = useParticipantList();
  const init = useNavigate();
  const sort = useSort();
  return (
    <footer>
      <OrangeButton
        disabled={participants.length < 3}
        onClick={() => {
          sort();
          init("/sort");
        }}
      >
        Sort
      </OrangeButton>
    </footer>
  );
};

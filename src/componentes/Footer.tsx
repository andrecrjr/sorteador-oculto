import React from "react";
import { useParticipantList } from "../state/hook/useListParticipant";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const participants = useParticipantList();
  const init = useNavigate();
  return (
    <footer>
      <button
        disabled={participants.length < 3}
        onClick={() => init("/")}
      ></button>
    </footer>
  );
};

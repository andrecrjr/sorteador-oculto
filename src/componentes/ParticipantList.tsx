import React from "react";
import { useParticipantList } from "../state/hook/useListParticipant";

export const ParticipantList = () => {
  const participants: string[] = useParticipantList();
  return (
    <ul>
      {participants.map((participant) => (
        <li key={participant}>{participant}</li>
      ))}
    </ul>
  );
};

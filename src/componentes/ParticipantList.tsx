import React from "react";
import { useParticipantList } from "../state/hook/useListParticipant";
import { ItemList, List } from "./styles/List";

export const ParticipantList = () => {
  const participants: string[] = useParticipantList();
  return (
    <List>
      {participants.map((participant) => (
        <ItemList key={participant}>{participant}</ItemList>
      ))}
    </List>
  );
};

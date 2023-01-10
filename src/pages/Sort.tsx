import React from "react";
import { useParticipantList } from "../state/hook/useListParticipant";

export const Sort = () => {
  const participants = useParticipantList();
  return (
    <div>
      <form>
        <select>
          {participants.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </form>
    </div>
  );
};

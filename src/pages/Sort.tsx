import React, { useState } from "react";
import { useParticipantList } from "../state/hook/useListParticipant";
import { useResultSort } from "../state/hook/useSortResult";
import { FormSection, SelectForm } from "../componentes/styles/Input";

export const Sort = () => {
  const participants = useParticipantList();
  const [participant, setParticipant] = useState("");
  const [secretFriend, setSecretFriend] = useState("");
  const result = useResultSort();
  return (
    <FormSection
      onSubmit={(e) => {
        e.preventDefault();
        if (result.has(participant)) {
          const secretFriend: string = result.get(participant) as string;
          console.log(result);
          setSecretFriend(secretFriend);
        }
      }}
    >
      <SelectForm
        required
        placeholder="User Selection"
        onChange={(e) => {
          e.preventDefault();
          setParticipant(e.target.value);
        }}
      >
        {participants.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </SelectForm>
      {secretFriend && <p role="alert">{secretFriend}</p>}
      <button>Sort your Friend</button>
    </FormSection>
  );
};

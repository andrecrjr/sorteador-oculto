import React, { useState } from "react";
import { useParticipantList } from "../state/hook/useListParticipant";
import { useResultSort } from "../state/hook/useSortResult";
import {
  FormSection,
  OrangeButton,
  SelectForm,
} from "../componentes/styles/Input";
import { FriendSorted } from "../componentes/styles/Section";

export const Sort = () => {
  const participants = useParticipantList();
  const [participant, setParticipant] = useState("");
  const [secretFriend, setSecretFriend] = useState("");
  const result = useResultSort();
  return (
    <>
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
          <option defaultChecked>Selecione seu nome</option>
          {participants.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </SelectForm>
        <OrangeButton>Sort your Friend</OrangeButton>
      </FormSection>
      {secretFriend && <FriendSorted role="alert">{secretFriend}</FriendSorted>}
    </>
  );
};

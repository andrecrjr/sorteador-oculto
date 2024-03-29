import React, { useRef, useState } from "react";
import {
  ButtonForm,
  FormSection,
  InputForm,
  TitleFormSection,
} from "./styles/Input";
import styles from "./icon.module.css";
import { useAddParticipant } from "../state/hook/useAddParticipant";
import { useErrorMessage } from "../state/hook/useErrorMessage";

const Form = () => {
  const [name, setName] = useState("");
  const addParticipant = useAddParticipant();

  let inputRef = useRef<HTMLInputElement>(null);
  const errorMessage = useErrorMessage();

  return (
    <>
      <TitleFormSection>Vamos Começar!</TitleFormSection>
      <FormSection
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          addParticipant(name);
          inputRef.current?.focus();

          setName("");
        }}
      >
        <svg
          width="24"
          height="18"
          viewBox="0 0 24 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles["input--icon"]}
        >
          <path
            d="M9.70312 12.1406C11.5469 11.3906 13.3125 11.0156 15 11.0156C16.6875 11.0156 18.4375 11.3906 20.25 12.1406C22.0938 12.8594 23.0156 13.8125 23.0156 15V17.0156H6.98438V15C6.98438 13.8125 7.89062 12.8594 9.70312 12.1406ZM6 6.98438H9V9H6V12H3.98438V9H0.984375V6.98438H3.98438V3.98438H6V6.98438ZM17.8125 7.82812C17.0312 8.60938 16.0938 9 15 9C13.9062 9 12.9688 8.60938 12.1875 7.82812C11.4062 7.04688 11.0156 6.10938 11.0156 5.01562C11.0156 3.92188 11.4062 2.98438 12.1875 2.20312C12.9688 1.39063 13.9062 0.984375 15 0.984375C16.0938 0.984375 17.0312 1.39063 17.8125 2.20312C18.5938 2.98438 18.9844 3.92188 18.9844 5.01562C18.9844 6.10938 18.5938 7.04688 17.8125 7.82812Z"
            fill="black"
            fillOpacity="0.3"
          />
        </svg>
        <InputForm
          ref={inputRef}
          type={"text"}
          value={name}
          onChange={(evt) => setName(evt.target.value)}
          placeholder="Insira os nomes dos participantes"
        />
        <ButtonForm disabled={!name}>adicionar</ButtonForm>
        {errorMessage && <p role="alert">{errorMessage}</p>}
      </FormSection>
    </>
  );
};

export default Form;

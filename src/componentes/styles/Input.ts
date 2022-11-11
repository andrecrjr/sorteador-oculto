import styled, { css } from "styled-components";

export const FormSection = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  position: relative;

  @media (min-width: 640px) {
    width: 600px;
    flex-direction: row;
  }
`;

const InputStyle = css`
  width: 100%;
  border: 1px solid #000000;
  height: 48px;
  border-radius: 37.5px;
  padding: 0;
  margin-bottom: 10px;
  padding-left: 65px;
  box-shadow: 4px 4px 0px #000000;

  @media (min-width: 640px) {
    width: 60%;
    height: 50px;
    border-radius: 37.5px 0px 0px 37.5px;
    border: 2px solid #000000;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin-bottom: 0;
  }
`;

export const InputForm = styled.input`
  ${InputStyle}
`;

export const SelectForm = styled.select`
  ${InputStyle}
  @media (min-width: 640px) {
    border-radius: 37.5px;
  }
`;

export const ButtonForm = styled.button`
  width: 45%;
  height: 50px;
  background: #c4c4c4;
  box-shadow: 2px 2px 0px #000000;
  padding: 0;
  border: 2px solid #000000;
  border-radius: 37.5px;
  font-size: 16px;
  line-height: 24px;
  color: #444444;
  text-transform: capitalize;

  @media (min-width: 640px) {
    width: 220px;
    height: 50px;
    border-radius: 0px 37.5px 37.5px 0px;
    box-shadow: 4px 4px 0px #000000;
  }
`;

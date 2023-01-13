import styled, { css } from "styled-components";

export const TitleFormSection = styled.h2`
  font-size: 20px;
  line-height: 30px;
  color: #4b69fd;

  text-align: center;
  margin-bottom: 36px;
`;

export const FormSection = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin-bottom: 30px;

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
  margin-bottom: 17px;

  @media (min-width: 640px) {
    width: 220px;
    height: 50px;
    border-radius: 0px 37.5px 37.5px 0px;
    box-shadow: 4px 4px 0px #000000;
    margin-bottom: 0;
  }
`;

export const OrangeButton = styled.button`
  background: #fe652b;
  min-width: 155px;
  border: 1px solid #000000;
  box-shadow: 2px 2px 0px #000000;
  border-radius: 37.5px;
  margin: 0 auto;
  color: white;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  padding: 14px 14px;
  display: block;
  margin: 0 auto;
`;

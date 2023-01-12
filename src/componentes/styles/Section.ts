import styled from "styled-components";

export const Section = styled.section`
  height: 55vh;
  width: 100%;
  border-top-right-radius: 25%;
  border-top-left-radius: 25%;
  background: #fff9eb;
  border: 2px solid black;
  padding-top: 50px;
  position: relative;
  align-self: flex-end;

  &:after {
    content: "";
    width: 350px;
    height: 158px;
    background-image: url("./imagens/participante.png");
    background-size: 328px 158px;
    display: block;
    position: absolute;
    top: -142px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    &:after {
      content: "";
      width: 360px;
      height: 168px;
      background-image: url("./imagens/participante.png");
      background-size: 360px 168px;
      display: block;
      position: absolute;
      top: -150px;
      left: 170px;
      right: 0;
      margin: 0 auto;
    }
  }
`;

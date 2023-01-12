import styled from "styled-components";

export const Section = styled.section`
  height: 61vh;
  border-top-right-radius: 25%;
  border-top-left-radius: 25%;
  background: #fff9eb;
  border: 2px solid black;
  padding-top: 50px;
  position: absolute;
  bottom: -110px;
  left: 0;
  right: 0;

  &:after {
    content: "";
    width: 350px;
    height: 158px;
    background-image: url("./imagens/participante.png");
    background-size: 328px 158px;
    display: block;
    position: absolute;
    top: -45%;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
`;

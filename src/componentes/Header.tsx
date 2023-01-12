import React from "react";
import { HeaderSection } from "./styles/Header";

const Header = () => {
  return (
    <HeaderSection>
      <img
        src="/imagens/logo-pequeno.png"
        width={1}
        height={1}
        style={{
          width: "100%",
          height: "180px",
          display: "block",
          objectFit: "contain",
        }}
        alt="Sorteador"
      />
    </HeaderSection>
  );
};
export default Header;

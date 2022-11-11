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
      />
      <img
        src="/imagens/participante.png"
        style={{ objectFit: "contain", zIndex: 2 }}
        height={158}
      />
    </HeaderSection>
  );
};
export default Header;

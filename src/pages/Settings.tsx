import React from "react";
import Form from "../componentes/Form";
import { ParticipantList } from "../componentes/ParticipantList";
import { Footer } from "../componentes/Footer";

export const Settings = () => {
  return (
    <>
      <Form />
      <ParticipantList />
      <Footer />
    </>
  );
};

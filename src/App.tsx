import Header from "./componentes/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Settings } from "./pages/Settings";
import { Sort } from "./pages/Sort";
import { Section } from "./componentes/styles/Section";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Section>
        <Routes>
          <Route path="/" element={<Settings />} />
          <Route path="/sort" element={<Sort />} />
        </Routes>
      </Section>
    </BrowserRouter>
  );
}

export default App;

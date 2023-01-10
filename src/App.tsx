import Form from "./componentes/Form";
import Header from "./componentes/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Settings } from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

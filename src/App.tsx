import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CharactersPage } from "./pages/CharactersPage";
import { Homepage } from "./pages/HomePage";
import { OptionsPage } from "./pages/OptionsPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/options" element={<OptionsPage />} />
          <Route path="/characters" element={<CharactersPage />} />
          {/* <Route element={<ErrorPage />} path="/*" /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;

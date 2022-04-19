import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/home";
import { OptionsPage } from "./pages/OptionsPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/options" element={<OptionsPage />} />
          {/* <Route element={<ErrorPage />} path="/*" /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;

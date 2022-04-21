import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CharactersPage } from "./pages/CharactersPage";
import { OptionsPage } from "./pages/OptionsPage";
import { ComicsPage } from "./pages/ComicsPage";
import { SeriesPage } from "./pages/SeriesPage";
import { EventsPage } from "./pages/EventsPage";
import { CreatorsPage } from "./pages/CreatorsPage";
import { StoriesPage } from "./pages/StoriesPage";
import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    window.addEventListener("load", () => {
      if (window.location.protocol === "https") {
        window.location.protocol = "http";
      }
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/options" element={<OptionsPage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/comics" element={<ComicsPage />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/creators" element={<CreatorsPage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;

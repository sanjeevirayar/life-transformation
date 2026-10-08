import {
  Routes,
  Route,
} from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Approach from "./pages/Approach";
import Programs from "./pages/Programs";
import Women from "./pages/Women";
import YoungMinds from "./pages/YoungMinds";
import HerStory from "./pages/HerStory";
import GivingBack from "./pages/GivingBack";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/approach"
          element={<Approach />}
        />

        <Route
          path="/programs"
          element={<Programs />}
        />

        <Route
          path="/women"
          element={<Women />}
        />

        <Route
          path="/young-minds"
          element={<YoungMinds />}
        />

        <Route
          path="/her-story"
          element={<HerStory />}
        />

        <Route
          path="/giving-back"
          element={<GivingBack />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </>
  );
}

export default App;
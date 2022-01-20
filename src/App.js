import Navbar from "./Components/Navbar/Navbar";

import { WhoWeAre, Clients, Partners, Press, Services } from "./Pages/SubPages";

import {
  About,
  Artists,
  Contact,
  Featured,
  Home,
  News,
  Packages,
} from "./Pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="clients" element={<Clients />} />
          <Route path="whoweare" element={<WhoWeAre />} />
          <Route path="services" element={<Services />} />
          <Route path="partners" element={<Partners />} />
        </Route>
        <Route path="/artists" element={<Artists />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/news" element={<News />} />
        <Route path="/packages" element={<Packages />} />
      </Routes>
    </Router>
  );
};
export default App;

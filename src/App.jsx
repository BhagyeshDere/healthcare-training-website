import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import WhoWeAre from "./pages/About/WhoWeAre";
import Objectives from "./pages/About/Objectives";
import Leadership from "./pages/About/Leadership";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="who-we-are" element={<WhoWeAre />} />
          <Route path="objectives" element={<Objectives />} />
          <Route path="leadership" element={<Leadership />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

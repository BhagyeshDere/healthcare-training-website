import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import Contact from "./pages/Contact";

/* ABOUT PAGES */
import WhoWeAre from "./pages/About/WhoWeAre";
import Objectives from "./pages/About/Objectives";
import Leadership from "./pages/About/Leadership";
import OurJourney from "./pages/About/OurJourney";

/* EVENTS PAGES */
import AnnualEvents from "./pages/Events/AnnualEvents";
import PartnerEvents from "./pages/Events/PartnerEvents";
import InternationalEvents from "./pages/Events/InternationalEvents";

/* ✅ ACADEMY PAGES */
import TrainingPrograms from "./pages/Academy/TrainingPrograms";
import ExcellencePrograms from "./pages/Academy/ExcellencePrograms";
import MasterclassSeries from "./pages/Academy/MasterclassSeries"; // ✅ ADDED

export default function App() {
  return (
    <BrowserRouter>
      <div className="w-full min-h-screen overflow-x-hidden">

        <Routes>
          <Route element={<MainLayout />}>

            {/* HOME */}
            <Route index element={<Home />} />

            {/* CONTACT */}
            <Route path="contact" element={<Contact />} />

            {/* ABOUT */}
            <Route path="who-we-are" element={<WhoWeAre />} />
            <Route path="objectives" element={<Objectives />} />
            <Route path="leadership" element={<Leadership />} />
            <Route path="our-journey" element={<OurJourney />} />

            {/* EVENTS */}
            <Route path="events/annual" element={<AnnualEvents />} />
            <Route path="events/partner" element={<PartnerEvents />} />
            <Route path="events/international" element={<InternationalEvents />} />

            {/* ✅ ACADEMY */}
            <Route path="academy/training" element={<TrainingPrograms />} />
            <Route path="academy/excellence" element={<ExcellencePrograms />} />
            <Route path="academy/masterclass" element={<MasterclassSeries />} /> {/* ✅ NEW */}

          </Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

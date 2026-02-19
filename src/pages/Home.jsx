import { motion } from "framer-motion";

import HeroSlider from "../components/home/HeroSlider";
import AboutStats from "../components/home/AboutStats";
import IntroVideo from "../components/home/IntroVideo";
import ProgramsMembership from "../components/home/ProgramsMembership";
import VidaAcademy from "../components/home/VidaAcademy";
import EventsSection from "../components/home/EventsSection";
import LibrarySection from "../components/home/LibrarySection";
import VidaAwardsSection from "../components/home/VidaAwardsSection";
import VidaResourcesSection from "../components/home/VidaResourcesSection";
import VidaConnectSection from "../components/home/VidaConnectSection";
import FlagshipSection from "../components/home/FlagshipSection";
import ProgramsPreview from "../components/home/ProgramsPreview";

/* PREMIUM ANIMATION VARIANTS */
const sectionVariant = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.96,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* Reusable wrapper */
const MotionSection = ({ children }) => (
  <motion.section
    variants={sectionVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    className="w-full overflow-hidden"
  >
    {children}
  </motion.section>
);

export default function Home() {
  return (
    <motion.main
      className="
        overflow-x-hidden
        w-full
        max-w-[100vw]
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* HERO */}
      <div className="w-full overflow-hidden">
        <HeroSlider />
      </div>

      {/* ABOUT INTRO */}
      <MotionSection>
        <AboutStats />
      </MotionSection>

      {/* ENGAGEMENT VIDEO */}
      <MotionSection>
        <IntroVideo />
      </MotionSection>

      {/* FLAGSHIP INITIATIVE */}
      <MotionSection>
        <FlagshipSection />
      </MotionSection>

      {/* PROGRAMS PREVIEW */}
      <MotionSection>
        <ProgramsPreview />
      </MotionSection>

      {/* ACADEMY */}
      <MotionSection>
        <VidaAcademy />
      </MotionSection>

      {/* PROGRAMS & MEMBERSHIP */}
      <MotionSection>
        <ProgramsMembership />
      </MotionSection>

      {/* EVENTS */}
      <MotionSection>
        <EventsSection />
      </MotionSection>

      {/* RESOURCES */}
      <MotionSection>
        <LibrarySection />
      </MotionSection>

      <MotionSection>
        <VidaResourcesSection />
      </MotionSection>

      {/* TRUST BUILDERS */}
      <MotionSection>
        <VidaAwardsSection />
      </MotionSection>

      

      {/* FINAL CTA */}
      <MotionSection>
        <VidaConnectSection />
      </MotionSection>

    </motion.main>
  );
}

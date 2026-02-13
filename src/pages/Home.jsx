import { motion } from "framer-motion";

import HeroSlider from "../components/HeroSlider";
import AboutStats from "../components/AboutStats";
import IntroVideo from "../components/IntroVideo";
import ProgramsMembership from "../components/ProgramsMembership";
import VidaAcademy from "../components/VidaAcademy";
import EventsSection from "../components/EventsSection";
import LibrarySection from "../components/LibrarySection";
import VidaAwardsSection from "../components/VidaAwardsSection";
import VidaResourcesSection from "../components/VidaResourcesSection";
import VidaConnectSection from "../components/VidaConnectSection";

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

      <MotionSection>
        <AboutStats />
      </MotionSection>

      <MotionSection>
        <IntroVideo />
      </MotionSection>

      <MotionSection>
        <ProgramsMembership />
      </MotionSection>

      <MotionSection>
        <VidaAcademy />
      </MotionSection>

      <MotionSection>
        <EventsSection />
      </MotionSection>

      <MotionSection>
        <LibrarySection />
      </MotionSection>

      <MotionSection>
        <VidaAwardsSection />
      </MotionSection>

      <MotionSection>
        <VidaResourcesSection />
      </MotionSection>

      {/* VIDA CONNECT / COLLAB SECTION */}
      <MotionSection>
        <VidaConnectSection />
      </MotionSection>

    </motion.main>
  );
}

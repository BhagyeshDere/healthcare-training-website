import { motion } from "framer-motion";

import HeroSlider from "../components/HeroSlider";
import AboutStats from "../components/AboutStats";
import IntroVideo from "../components/IntroVideo";
import ProgramsMembership from "../components/ProgramsMembership";
import VidaAcademy from "../components/VidaAcademy";
import EventsSection from "../components/EventsSection";
import LibrarySection from "../components/LibrarySection";
import VidaAwardsSection from "../components/VidaAwardsSection";
import Footer from "../components/Footer";

/* ANIMATION VARIANTS */
const sectionVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  return (
    <motion.main
      className="overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >

      {/* HERO */}
      <HeroSlider />

      {/* ABOUT + STATS */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <AboutStats />
      </motion.div>

      {/* INTRO VIDEO */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <IntroVideo />
      </motion.div>

      {/* PROGRAMS & MEMBERSHIP */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ProgramsMembership />
      </motion.div>

      {/* VIDA ACADEMY */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <VidaAcademy />
      </motion.div>

      {/* EVENTS */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <EventsSection />
      </motion.div>

      {/* VIDA LIBRARY */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <LibrarySection />
      </motion.div>

      {/* VIDA AWARDS */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <VidaAwardsSection />
      </motion.div>

      {/* FOOTER */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Footer />
      </motion.div>

    </motion.main>
  );
}

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import JourneySection from "../../components/JourneySection";

import {
  HeartPulse,
  ShieldCheck,
  Factory,
  Globe,
  GraduationCap,
  Microscope,
  Users,
  Award,
} from "lucide-react";

/* ================= ANIMATIONS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.2 } },
};

export default function WhoWeAre() {
  return (
    <main className="bg-white text-gray-800 overflow-hidden">

{/* ================= HERO ================= */}
<section className="relative min-h-[70vh] md:h-[92vh] flex items-center text-white overflow-hidden">

  <div className="absolute inset-0">
    <img
      src="/images/common/medical.png"
      className="w-full h-full object-cover scale-110"
      alt=""
    />

    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
    <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.55))]" />

    <div className="absolute top-20 left-10 w-48 md:w-72 h-48 md:h-72 bg-red-500/20 blur-3xl rounded-full" />
    <div className="absolute bottom-10 right-10 w-48 md:w-72 h-48 md:h-72 bg-blue-500/20 blur-3xl rounded-full" />
  </div>

  <motion.div
    variants={fadeUp}
    initial="hidden"
    animate="show"
    className="relative z-10 max-w-6xl px-4 sm:px-6 md:px-10"
  >

    <div className="inline-block mb-6">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 px-5 py-2 rounded-full text-xs sm:text-sm tracking-widest uppercase text-blue-200">
        Corporate Profile • Est. 2011
      </div>
    </div>

    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-lg">
      Precision. Discipline.
      <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">
        Institutional Trust.
      </span>
    </h1>

    <p className="mt-6 text-base sm:text-lg text-gray-200 max-w-3xl leading-relaxed">
      Vida Life Sciences operates exclusively in medical sterilization,
      CSSD solutions, and healthcare equipment manufacturing since 2011 —
      helping hospitals achieve world-class infection control and compliance.
    </p>

    <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mt-10">
      <Link
        to="/contact"
        className="px-6 sm:px-8 py-3 sm:py-4 bg-red-500 hover:bg-red-600 transition rounded-full font-semibold shadow-lg text-center"
      >
        Get in Touch
      </Link>

      <Link
        to="/about"
        className="px-6 sm:px-8 py-3 sm:py-4 border border-white/40 hover:bg-white/10 transition rounded-full font-semibold backdrop-blur-md text-center"
      >
        Explore VIDA
      </Link>
    </div>

    <div className="flex flex-wrap gap-8 sm:gap-10 mt-14">
      <StatBlock number="300+" label="Hospitals Supported" color="text-red-400"/>
      <StatBlock number="14+" label="Years Experience" color="text-blue-400"/>
      <StatBlock number="100%" label="Medical Focus" color="text-white"/>
    </div>

  </motion.div>
</section>


{/* ================= PURPOSE ================= */}
<section className="relative py-20 md:py-28 overflow-hidden">

  <div className="absolute -top-20 -left-20 w-72 md:w-96 h-72 md:h-96 bg-blue-100 rounded-full blur-3xl opacity-40" />
  <div className="absolute bottom-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-red-100 rounded-full blur-3xl opacity-40" />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">

    <motion.div variants={fadeUp} initial="hidden" whileInView="show">

      <span className="inline-block mb-4 px-4 py-2 text-xs sm:text-sm font-semibold uppercase rounded-full bg-blue-100 text-blue-700">
        Our Purpose
      </span>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
        Our Purpose in{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-red-500">
          Healthcare
        </span>
      </h2>

      <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
        Healthcare environments demand precision, discipline, and accountability...
      </p>

      <div className="mt-10 space-y-4">
        {[
          "Supporting patient safety through reliable sterilization",
          "Enabling compliant CSSD operations",
          "Delivering repeatable and auditable systems",
          "Training healthcare professionals",
        ].map((item, i) => (
          <motion.div key={i} whileHover={{ x: 6 }}
            className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-md">
            <div className="w-7 h-7 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-red-500 text-white">✓</div>
            <p className="text-gray-700 text-sm sm:text-base">{item}</p>
          </motion.div>
        ))}
      </div>

    </motion.div>

    <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="relative">

      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-red-500/20 blur-2xl rounded-3xl" />

      <img
        src="/images/home/slide2.png"
        className="relative rounded-3xl shadow-2xl object-cover w-full h-[320px] sm:h-[420px] md:h-[520px]"
      />

      <div className="absolute -bottom-6 sm:-bottom-8 -left-4 sm:-left-8 backdrop-blur-lg bg-white/80 p-4 sm:p-6 rounded-2xl shadow-xl w-52 sm:w-64">
        <h4 className="font-bold text-blue-900 text-base sm:text-lg">14+ Years</h4>
        <p className="text-gray-600 text-xs sm:text-sm">
          Delivering sterilization excellence since 2011
        </p>
      </div>

    </motion.div>

  </div>
</section>


{/* ================= WHAT WE DO ================= */}
<section className="relative py-20 md:py-28 overflow-hidden">

  <div className="text-center mb-16 px-4">
    <span className="px-5 py-2 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold">
      Our Expertise
    </span>

    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-6">
      What We{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-red-500">
        Do
      </span>
    </h2>

    <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
      Delivering reliable sterilization systems...
    </p>
  </div>

  <motion.div
    variants={stagger}
    initial="hidden"
    whileInView="show"
    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto px-4 sm:px-6"
  >
    <ExpertiseCard icon={<Factory size={30}/>} title="CSSD Manufacturing"
      text="Manufacturing advanced CSSD devices and stainless steel hospital furniture." />

    <ExpertiseCard icon={<HeartPulse size={30}/>} title="Turnkey Projects"
      text="Complete end-to-end CSSD planning and installation." />

    <ExpertiseCard icon={<ShieldCheck size={30}/>} title="Operational Support"
      text="Comprehensive maintenance programs and training." />
  </motion.div>
</section>


{/* ================= TRAINING ================= */}
<section className="relative py-20 md:py-28 overflow-hidden text-white">
  <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-red-900" />

  <motion.div variants={fadeUp} initial="hidden" whileInView="show"
    className="relative z-10 text-center px-4 sm:px-6">

    <span className="inline-block px-5 py-2 mb-6 text-xs sm:text-sm rounded-full bg-white/10 border border-white/20">
      VIDA Academy
    </span>

    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
      Healthcare Training{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-red-400">
        & Education
      </span>
    </h2>

    <p className="max-w-3xl mx-auto text-sm sm:text-lg mt-6 text-gray-200">
      VIDA empowers hospital teams with hands-on CSSD training...
    </p>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mt-14 max-w-6xl mx-auto">
      <GlassCard title="Hands-On Learning" text="Real-world CSSD simulations."/>
      <GlassCard title="Certified Programs" text="Structured compliance courses."/>
      <GlassCard title="Expert Mentors" text="Training by professionals."/>
    </div>

  </motion.div>
</section>

<JourneySection/>

{/* ================= CTA ================= */}
<section className="relative py-20 md:py-28 text-center overflow-hidden">

  <motion.div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">

    <div className="inline-block mb-6 px-5 py-2 bg-white/80 text-blue-700 rounded-full text-xs sm:text-sm border">
      Trusted Healthcare Partner
    </div>

    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
      Working with{" "}
      <span className="bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">
        VIDA Life Sciences
      </span>
    </h2>

    <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600">
      A responsible healthcare partner focused on compliance and safety.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-12">
      <Link to="/contact"
        className="px-8 py-4 bg-gradient-to-r from-red-500 to-blue-600 text-white rounded-full">
        Start a Conversation
      </Link>

      <Link to="/who-we-are"
        className="px-8 py-4 border-2 border-blue-600 text-blue-700 rounded-full">
        Learn More
      </Link>
    </div>

  </motion.div>
</section>

</main>
);
}

/* ================= SMALL COMPONENTS ================= */

function StatBlock({number,label,color}) {
  return (
    <div>
      <h3 className={`text-2xl sm:text-3xl font-bold ${color}`}>{number}</h3>
      <p className="text-gray-300 text-xs sm:text-sm">{label}</p>
    </div>
  );
}

function ExpertiseCard({icon,title,text}) {
  return (
    <motion.div whileHover={{y:-10}}
      className="group p-8 sm:p-10 rounded-3xl bg-white/70 shadow-xl border">
      <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-red-500 text-white mb-6">
        {icon}
      </div>
      <h3 className="text-xl sm:text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base">{text}</p>
    </motion.div>
  );
}

function GlassCard({title,text}) {
  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-white/10 border border-white/20">
      <h4 className="text-lg sm:text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-300 text-sm">{text}</p>
    </div>
  );
}

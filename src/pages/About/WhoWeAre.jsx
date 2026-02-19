import { motion } from "framer-motion";
import { Link } from "react-router-dom";


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
<section className="relative min-h-[75vh] sm:min-h-[85vh] md:min-h-[92vh] flex items-center text-white overflow-hidden">

  {/* BACKGROUND */}
  <div className="absolute inset-0">

    <img
      src="/images/common/medical2.jpg"
      className="w-full h-full object-cover scale-110"
      alt=""
    />

    {/* overlays */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
    <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.6))]" />

    {/* glow accents */}
    <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-red-500/20 blur-3xl rounded-full" />
    <div className="absolute bottom-6 sm:bottom-10 right-4 sm:right-10 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-blue-500/20 blur-3xl rounded-full" />

  </div>

  {/* CONTENT */}
  <motion.div
    variants={fadeUp}
    initial="hidden"
    animate="show"
    className="relative z-10 max-w-7xl px-4 sm:px-6 md:px-10"
  >

    {/* TAG */}
    <div className="inline-block mb-6">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 px-4 sm:px-5 py-2 rounded-full text-[10px] sm:text-xs md:text-sm tracking-widest uppercase text-blue-200">
        Corporate Profile • Est. 2011
      </div>
    </div>

    {/* TITLE */}
    <h1 className="
      text-3xl
      sm:text-4xl
      md:text-5xl
      lg:text-6xl
      xl:text-7xl
      font-extrabold
      leading-tight
      drop-shadow-lg
    ">
      Precision. Discipline.
      <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">
        Institutional Trust.
      </span>
    </h1>

    {/* DESCRIPTION */}
    <p className="
      mt-6
      text-sm
      sm:text-base
      md:text-lg
      text-gray-200
      max-w-xl
      md:max-w-2xl
      lg:max-w-3xl
      leading-relaxed
    ">
      Vida Life Sciences operates exclusively in medical sterilization,
      CSSD solutions, and healthcare equipment manufacturing since 2011 —
      helping hospitals achieve world-class infection control and compliance.
    </p>

    {/* BUTTONS */}
    <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mt-10">

      <Link
        to="/contact"
        className="px-6 sm:px-8 py-3 sm:py-4 bg-red-500 hover:bg-red-600 transition rounded-full font-semibold shadow-lg text-center w-full sm:w-auto"
      >
        Get in Touch
      </Link>

      <Link
        to="/about"
        className="px-6 sm:px-8 py-3 sm:py-4 border border-white/40 hover:bg-white/10 transition rounded-full font-semibold backdrop-blur-md text-center w-full sm:w-auto"
      >
        Explore VIDA
      </Link>

    </div>

    {/* STATS */}
    <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-10 mt-12 md:mt-14">

      <StatBlock number="300+" label="Hospitals Supported" color="text-red-400"/>
      <StatBlock number="14+" label="Years Experience" color="text-blue-400"/>
      <StatBlock number="100%" label="Medical Focus" color="text-white"/>

    </div>

  </motion.div>
</section>


{/* ================= WHO WE ARE INTRO ================= */}
<section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white to-blue-50">

  {/* background glow */}
  <div className="absolute -top-20 -left-20 w-72 md:w-96 h-72 md:h-96 bg-blue-200/40 blur-3xl rounded-full" />
  <div className="absolute bottom-0 -right-20 w-72 md:w-96 h-72 md:h-96 bg-red-200/40 blur-3xl rounded-full" />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">

    {/* LEFT IMAGE */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative order-1 md:order-1"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-red-500/20 blur-2xl rounded-3xl" />

      <img
        src="/images/common/healthcare-training1.png"
        alt="VIDA Healthcare Training"
        className="relative rounded-3xl shadow-2xl object-cover w-full h-[320px] sm:h-[420px] md:h-[520px]"
      />

      {/* floating badge */}
      <div className="absolute -bottom-6 sm:-bottom-8 -left-4 sm:-left-8 backdrop-blur-lg bg-white/80 p-4 sm:p-6 rounded-2xl shadow-xl w-52 sm:w-64 border">
        <h4 className="font-bold text-blue-900 text-base sm:text-lg">
          VIDA Academy
        </h4>
        <p className="text-gray-600 text-xs sm:text-sm">
          Professional healthcare training programs
        </p>
      </div>
    </motion.div>

    {/* RIGHT CONTENT */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="order-2 md:order-2"
    >
      <span className="inline-block mb-4 px-4 py-2 text-xs sm:text-sm font-semibold uppercase rounded-full bg-blue-100 text-blue-700">
        Who We Are
      </span>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
        VIDA Life Sciences —
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-red-500">
          Healthcare & Training Experts
        </span>
      </h2>

      <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
        VIDA Life Sciences is a specialized healthcare organization focused
        on sterilization systems, infection control, and CSSD excellence.
        Since 2011, we have partnered with hospitals and healthcare
        institutions to build safe, compliant, and efficient clinical
        environments.
      </p>

      <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
        Through VIDA Academy, we deliver structured healthcare training,
        practical workshops, and certification programs that empower
        professionals to meet global patient safety and sterilization
        standards.
      </p>

      {/* stats */}
      <div className="flex flex-wrap gap-10">
        <div>
          <h3 className="text-3xl font-bold text-blue-700">300+</h3>
          <p className="text-gray-500 text-sm">Hospitals Supported</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-red-500">14+</h3>
          <p className="text-gray-500 text-sm">Years Experience</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-blue-900">100%</h3>
          <p className="text-gray-500 text-sm">Healthcare Focus</p>
        </div>
      </div>
    </motion.div>

  </div>
</section>

{/* ================= FOUNDATION OVERVIEW ================= */}
<section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-blue-50 to-white">

  {/* background glow */}
  <div className="absolute -top-20 left-0 w-80 h-80 bg-blue-200/30 blur-3xl rounded-full"/>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-200/30 blur-3xl rounded-full"/>

  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6"
  >

    <div className="text-center max-w-3xl mx-auto mb-14">
      <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold">
        Foundation Overview
      </span>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-6">
        About{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-red-500">
          VIDA Foundation
        </span>
      </h2>
    </div>

    {/* FULL PARAGRAPH */}
    <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-5xl mx-auto text-center">
      VIDA (Valuable Inputs Development Academy) Foundation is a purpose-driven
      educational and training foundation dedicated to delivering high-quality,
      customized knowledge solutions across multiple domains, with a strong
      and specialized focus on healthcare education, patient safety, and
      infection prevention.
    </p>

  </motion.div>
</section>

{/* ================= COMPANY HISTORY ================= */}
<section className="relative py-20 md:py-28 bg-white">

  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="max-w-7xl mx-auto px-4 sm:px-6"
  >

    <div className="grid md:grid-cols-2 gap-12 md:gap-16">

      {/* HISTORY */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-white border shadow-lg">
        <h3 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-5">
          Company History
        </h3>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          VIDA Foundation emerged from extensive experience in healthcare
          training, infection control, quality management, and academic mentoring.
          A recurring lack of updated, practical, and standardized training —
          particularly in healthcare — led to the formation of VIDA Foundation
          as a structured learning and capacity-building platform.
        </p>
      </div>

      {/* VISION */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-red-50 to-white border shadow-lg">
        <h3 className="text-2xl sm:text-3xl font-bold text-red-600 mb-5">
          Vision
        </h3>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          To become a globally respected center of excellence for customized
          education and professional training, driving safer healthcare systems
          and empowered professionals.
        </p>
      </div>

    </div>

  </motion.div>
</section>

{/* ================= MISSION ================= */}
<section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-blue-50 overflow-hidden">

  <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-200/30 blur-3xl rounded-full"/>

  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6"
  >

    <div className="text-center mb-12">
      <span className="inline-block px-5 py-2 rounded-full bg-red-100 text-red-600 text-xs sm:text-sm font-semibold">
        Mission
      </span>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-6">
        Our Mission
      </h2>
    </div>

    <div className="grid sm:grid-cols-2 gap-6">

      {[
        "Deliver practical, customized, and high-impact education",
        "Strengthen healthcare systems through infection control excellence",
        "Promote patient safety and quality-driven practices",
        "Enable career growth and professional confidence",
      ].map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -6 }}
          className="p-6 sm:p-7 rounded-2xl bg-white shadow-lg border text-gray-700"
        >
          <div className="flex gap-3 items-start">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-red-500 text-white flex items-center justify-center text-xs">
              ✓
            </div>
            <p className="text-sm sm:text-base leading-relaxed">{item}</p>
          </div>
        </motion.div>
      ))}

    </div>

  </motion.div>
</section>


{/* ================= PURPOSE ================= */}
<section className="relative py-20 md:py-28 overflow-hidden">

  {/* background glows */}
  <div className="absolute -top-20 -left-20 w-72 md:w-96 h-72 md:h-96 bg-blue-200/30 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-red-200/30 rounded-full blur-3xl" />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">

    {/* LEFT DARK PANEL */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      className="relative p-8 sm:p-10 md:p-12 rounded-3xl bg-gradient-to-br from-[#0B1220] via-[#111827] to-[#1F2937] text-white shadow-2xl overflow-hidden"
    >

      {/* subtle glow inside dark card */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full"/>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-500/20 blur-3xl rounded-full"/>

      <span className="inline-block mb-4 px-4 py-2 text-xs sm:text-sm font-semibold uppercase rounded-full bg-white/10 text-blue-300 border border-white/10">
        Our Purpose
      </span>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
        Our Purpose in{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">
          Healthcare
        </span>
      </h2>

      <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
        Healthcare environments demand precision, discipline, and accountability...
      </p>

      <div className="mt-10 space-y-4">
        {[
          "Supporting patient safety through reliable sterilization",
          "Enabling compliant CSSD operations",
          "Delivering repeatable and auditable systems",
          "Training healthcare professionals",
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ x: 6 }}
            className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition"
          >
            <div className="w-7 h-7 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-red-500 text-white text-sm">
              ✓
            </div>
            <p className="text-gray-200 text-sm sm:text-base">
              {item}
            </p>
          </motion.div>
        ))}
      </div>

    </motion.div>


    {/* RIGHT IMAGE SIDE */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      className="relative"
    >

      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-red-500/20 blur-2xl rounded-3xl" />

      <img
        src="/images/home/slide2.png"
        className="relative rounded-3xl shadow-2xl object-cover w-full h-[320px] sm:h-[420px] md:h-[520px]"
      />

      <div className="absolute -bottom-6 sm:-bottom-8 -left-4 sm:-left-8 backdrop-blur-lg bg-white/90 p-4 sm:p-6 rounded-2xl shadow-xl w-52 sm:w-64 border border-white/40">
        <h4 className="font-bold text-blue-900 text-base sm:text-lg">
          14+ Years
        </h4>
        <p className="text-gray-600 text-xs sm:text-sm">
          Delivering sterilization excellence since 2011
        </p>
      </div>

    </motion.div>

  </div>
</section>


{/* ================= WHAT WE DO ================= */}
<section className="relative py-24 md:py-32 overflow-hidden">

  {/* soft background glow */}
  <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200/40 blur-3xl rounded-full"/>
  <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-200/40 blur-3xl rounded-full"/>

  <div className="text-center mb-20 px-4 relative z-10">

    <span className="px-6 py-2 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold shadow-sm">
      Our Expertise
    </span>

    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-6">
      What We{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-red-500">
        Do
      </span>
    </h2>

    <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
      Delivering reliable sterilization systems...
    </p>

  </div>

  <motion.div
    variants={stagger}
    initial="hidden"
    whileInView="show"
    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 max-w-7xl mx-auto px-4 sm:px-6 relative z-10"
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
<section className="relative py-24 md:py-32 overflow-hidden text-white">

  {/* premium gradient bg */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-red-900"/>

  {/* glow accents */}
  <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-600/20 blur-3xl"/>
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-red-600/20 blur-3xl"/>

  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    className="relative z-10 text-center px-4 sm:px-6"
  >

    <span className="inline-block px-6 py-2 mb-6 text-xs sm:text-sm rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
      VIDA Academy
    </span>

    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
      Healthcare Training{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-red-400">
        & Education
      </span>
    </h2>

    <p className="max-w-3xl mx-auto text-sm sm:text-lg mt-6 text-gray-200 leading-relaxed">
      VIDA empowers hospital teams with hands-on CSSD training...
    </p>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mt-16 max-w-6xl mx-auto">
      <GlassCard title="Hands-On Learning" text="Real-world CSSD simulations."/>
      <GlassCard title="Certified Programs" text="Structured compliance courses."/>
      <GlassCard title="Expert Mentors" text="Training by professionals."/>
    </div>

  </motion.div>
</section>

{/* ================= CTA ================= */}
<section className="relative py-24 md:py-32 text-center overflow-hidden bg-gradient-to-b from-white to-blue-50">

  {/* subtle glows */}
  <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-blue-200/30 blur-3xl"/>
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-red-200/30 blur-3xl"/>

  <motion.div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">

    <div className="inline-block mb-6 px-6 py-2 bg-white/80 backdrop-blur-md text-blue-700 rounded-full text-xs sm:text-sm border shadow-sm">
      Trusted Healthcare Partner
    </div>

    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
      Working with{" "}
      <span className="bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">
        VIDA Life Sciences
      </span>
    </h2>

    <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed">
      A responsible healthcare partner focused on compliance and safety.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-5 sm:gap-8 mt-14">

      <Link to="/contact"
        className="px-10 py-4 bg-gradient-to-r from-red-500 to-blue-600 text-white rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition font-semibold">
        Start a Conversation
      </Link>

      <Link to="/who-we-are"
        className="px-10 py-4 border-2 border-blue-600 text-blue-700 rounded-full hover:bg-blue-50 transition font-semibold">
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

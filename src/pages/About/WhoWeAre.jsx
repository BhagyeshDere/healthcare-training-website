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
<section className="relative h-[92vh] flex items-center text-white overflow-hidden">

  {/* BACKGROUND */}
  <div className="absolute inset-0">

    {/* Image */}
    <img
      src="/images/common/medical.png"
      className="w-full h-full object-cover scale-110"
      alt=""
    />

    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/80 to-red-600/70" />

    {/* Glow effects */}
    <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/20 blur-3xl rounded-full" />
    <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />
  </div>

  {/* CONTENT */}
  <motion.div
    variants={fadeUp}
    initial="hidden"
    animate="show"
    className="relative z-10 max-w-6xl px-10"
  >

    {/* Glass Badge */}
    <div className="inline-block mb-6">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 px-6 py-2 rounded-full text-sm tracking-widest uppercase text-blue-200">
        Corporate Profile • Est. 2011
      </div>
    </div>

    {/* Headline */}
    <h1 className="text-6xl md:text-7xl font-extrabold leading-tight drop-shadow-lg">
      Precision. Discipline.
      <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">
        Institutional Trust.
      </span>
    </h1>

    {/* Description */}
    <p className="mt-6 text-lg text-gray-200 max-w-3xl leading-relaxed">
      Vida Life Sciences operates exclusively in medical sterilization,
      CSSD solutions, and healthcare equipment manufacturing since 2011 —
      helping hospitals achieve world-class infection control and compliance.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-wrap gap-6 mt-10">

      <Link
        to="/contact"
        className="px-8 py-4 bg-red-500 hover:bg-red-600 transition rounded-full font-semibold shadow-lg"
      >
        Get in Touch
      </Link>

      <Link
        to="/about"
        className="px-8 py-4 border border-white/40 hover:bg-white/10 transition rounded-full font-semibold backdrop-blur-md"
      >
        Explore VIDA
      </Link>

    </div>

    {/* Stats Row */}
    <div className="flex gap-10 mt-14">

      <div>
        <h3 className="text-3xl font-bold text-red-400">300+</h3>
        <p className="text-gray-300 text-sm">Hospitals Supported</p>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-blue-400">14+</h3>
        <p className="text-gray-300 text-sm">Years Experience</p>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-white">100%</h3>
        <p className="text-gray-300 text-sm">Medical Focus</p>
      </div>

    </div>

  </motion.div>

</section>

      {/* ================= PURPOSE ================= */}
<section className="relative py-28 overflow-hidden">

  {/* Background Accent */}
  <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-40" />

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative z-10">

    {/* TEXT SIDE */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
    >

      {/* Badge */}
      <span className="inline-block mb-4 px-5 py-2 text-sm font-semibold tracking-wide uppercase rounded-full bg-blue-100 text-blue-700">
        Our Purpose
      </span>

      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
        Our Purpose in
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-red-500">
          {" "}Healthcare
        </span>
      </h2>

      <p className="text-lg text-gray-600 leading-relaxed">
        Healthcare environments demand precision, discipline, and
        accountability. VIDA Life Sciences provides structured
        sterilization systems aligned with infection prevention
        protocols and global compliance standards.
      </p>

      {/* Feature List */}
      <div className="mt-10 space-y-5">

        {[
          "Supporting patient safety through reliable sterilization",
          "Enabling compliant CSSD operations",
          "Delivering repeatable and auditable systems",
          "Training healthcare professionals",
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ x: 8 }}
            className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition"
          >
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-red-500 text-white font-bold">
              ✓
            </div>
            <p className="text-gray-700">{item}</p>
          </motion.div>
        ))}

      </div>

    </motion.div>

    {/* IMAGE SIDE */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      className="relative"
    >

      {/* Glass Frame */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-red-500/20 blur-2xl rounded-3xl" />

      <img
        src="/images/home/slide2.png"
        className="relative rounded-3xl shadow-2xl object-cover w-full h-[520px]"
      />

      {/* Floating Info Card */}
      <div className="absolute -bottom-8 -left-8 backdrop-blur-lg bg-white/80 p-6 rounded-2xl shadow-xl w-64">
        <h4 className="font-bold text-blue-900 text-lg">14+ Years</h4>
        <p className="text-gray-600 text-sm">
          Delivering sterilization excellence since 2011
        </p>
      </div>

    </motion.div>

  </div>
</section>


     {/* ================= WHAT WE DO ================= */}
<section className="relative py-28 overflow-hidden">

  {/* Background Glow */}
  <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-40" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-200 rounded-full blur-3xl opacity-40" />

  {/* Heading */}
  <div className="text-center mb-20 relative z-10">
    <span className="px-6 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide">
      Our Expertise
    </span>

    <h2 className="text-5xl font-extrabold mt-6 text-gray-900">
      What We{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-red-500">
        Do
      </span>
    </h2>

    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
      Delivering reliable sterilization systems, infrastructure,
      and healthcare compliance solutions across institutions.
    </p>
  </div>

  {/* Cards Grid */}
  <motion.div
    variants={stagger}
    initial="hidden"
    whileInView="show"
    className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto px-6 relative z-10"
  >

    {/* CARD 1 */}
    <motion.div
      whileHover={{ y: -12 }}
      className="group relative p-10 rounded-3xl backdrop-blur-xl bg-white/70 shadow-xl border border-white/40 hover:shadow-2xl transition"
    >
      <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-red-500 text-white mb-6 shadow-lg group-hover:scale-110 transition">
        <Factory size={30} />
      </div>

      <h3 className="text-2xl font-bold mb-4 text-gray-900">
        CSSD Manufacturing
      </h3>

      <p className="text-gray-600 leading-relaxed">
        Manufacturing advanced CSSD devices and stainless steel
        hospital furniture designed for durability and compliance.
      </p>

      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/0 to-red-500/0 group-hover:from-blue-600/10 group-hover:to-red-500/10 transition" />
    </motion.div>

    {/* CARD 2 */}
    <motion.div
      whileHover={{ y: -12 }}
      className="group relative p-10 rounded-3xl backdrop-blur-xl bg-white/70 shadow-xl border border-white/40 hover:shadow-2xl transition"
    >
      <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-red-500 text-white mb-6 shadow-lg group-hover:scale-110 transition">
        <HeartPulse size={30} />
      </div>

      <h3 className="text-2xl font-bold mb-4 text-gray-900">
        Turnkey Projects
      </h3>

      <p className="text-gray-600 leading-relaxed">
        Complete end-to-end CSSD planning, design,
        installation, and validation for hospitals.
      </p>

      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/0 to-red-500/0 group-hover:from-blue-600/10 group-hover:to-red-500/10 transition" />
    </motion.div>

    {/* CARD 3 */}
    <motion.div
      whileHover={{ y: -12 }}
      className="group relative p-10 rounded-3xl backdrop-blur-xl bg-white/70 shadow-xl border border-white/40 hover:shadow-2xl transition"
    >
      <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-red-500 text-white mb-6 shadow-lg group-hover:scale-110 transition">
        <ShieldCheck size={30} />
      </div>

      <h3 className="text-2xl font-bold mb-4 text-gray-900">
        Operational Support
      </h3>

      <p className="text-gray-600 leading-relaxed">
        Comprehensive maintenance programs, AMC/CMC,
        and staff training for seamless operations.
      </p>

      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/0 to-red-500/0 group-hover:from-blue-600/10 group-hover:to-red-500/10 transition" />
    </motion.div>

  </motion.div>
</section>
{/* ================= WHY VIDA — PREMIUM STRIP STYLE ================= */}
<section className="relative py-32 bg-white overflow-hidden">

  {/* Soft Glow Background */}
  <div className="absolute top-20 left-0 w-96 h-96 bg-blue-100 blur-3xl opacity-40 rounded-full" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-100 blur-3xl opacity-40 rounded-full" />

  {/* Heading */}
  <div className="text-center mb-24 relative z-10">
    <span className="px-6 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
      Our Strength
    </span>

    <h2 className="text-5xl font-extrabold mt-6 text-gray-900">
      Why VIDA{" "}
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-red-500">
        Stands Apart
      </span>
    </h2>

    <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
      A healthcare partner combining innovation, education,
      and regulatory excellence.
    </p>
  </div>

  {/* FEATURES */}
  <div className="max-w-5xl mx-auto px-6 space-y-14 relative z-10">

    {/* ROW 1 */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="flex items-center gap-8 group"
    >
      <div className="p-5 rounded-full bg-gradient-to-r from-blue-600 to-red-500 text-white shadow-lg group-hover:scale-110 transition">
        <Microscope size={30} />
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900">
          R&D Driven Innovation
        </h3>
        <p className="text-gray-600 mt-2 max-w-xl">
          Continuous research and product development ensure
          next-generation sterilization and infection control solutions.
        </p>

        <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-red-500 mt-4 rounded-full" />
      </div>
    </motion.div>

    {/* ROW 2 */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="flex items-center gap-8 justify-end text-right group"
    >
      <div>
        <h3 className="text-2xl font-bold text-gray-900">
          Healthcare Training Programs
        </h3>
        <p className="text-gray-600 mt-2 max-w-xl">
          Structured training modules that empower hospital
          teams with compliant CSSD and infection-control practices.
        </p>

        <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-blue-600 mt-4 ml-auto rounded-full" />
      </div>

      <div className="p-5 rounded-full bg-gradient-to-r from-red-500 to-blue-600 text-white shadow-lg group-hover:scale-110 transition">
        <GraduationCap size={30} />
      </div>
    </motion.div>

    {/* ROW 3 */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="flex items-center gap-8 group"
    >
      <div className="p-5 rounded-full bg-gradient-to-r from-blue-600 to-red-500 text-white shadow-lg group-hover:scale-110 transition">
        <Users size={30} />
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900">
          Trusted by 300+ Institutions
        </h3>
        <p className="text-gray-600 mt-2 max-w-xl">
          Serving medical colleges, government hospitals,
          and private institutions across regions and countries.
        </p>

        <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-red-500 mt-4 rounded-full" />
      </div>
    </motion.div>

    {/* ROW 4 */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="flex items-center gap-8 justify-end text-right group"
    >
      <div>
        <h3 className="text-2xl font-bold text-gray-900">
          Award Winning Growth
        </h3>
        <p className="text-gray-600 mt-2 max-w-xl">
          Recognized nationally and internationally
          for excellence and rapid growth in healthcare technology.
        </p>

        <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-blue-600 mt-4 ml-auto rounded-full" />
      </div>

      <div className="p-5 rounded-full bg-gradient-to-r from-red-500 to-blue-600 text-white shadow-lg group-hover:scale-110 transition">
        <Award size={30} />
      </div>
    </motion.div>

  </div>
</section>

{/* ================= TRAINING SECTION ================= */}
<section className="relative py-28 overflow-hidden text-white">

  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-red-900" />

  {/* Glow Effects */}
  <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/30 rounded-full blur-3xl" />

  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="relative z-10 text-center px-6"
  >

    {/* Badge */}
    <span className="inline-block px-6 py-2 mb-6 text-sm font-semibold tracking-wider uppercase rounded-full bg-white/10 backdrop-blur border border-white/20">
      VIDA Academy
    </span>

    {/* Heading */}
    <h2 className="text-5xl font-extrabold mb-6 leading-tight">
      Healthcare Training  
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-red-400">
        {" "} & Education
      </span>
    </h2>

    {/* Description */}
    <p className="max-w-3xl mx-auto text-lg text-gray-200 leading-relaxed">
      VIDA empowers hospital teams with hands-on CSSD training,
      infection control education, and certification-based learning
      programs for operational excellence.
    </p>

    {/* Feature Highlights */}
    <div className="grid md:grid-cols-3 gap-10 mt-16 max-w-6xl mx-auto">

      <div className="p-8 rounded-2xl bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 transition">
        <h4 className="text-xl font-semibold mb-2">Hands-On Learning</h4>
        <p className="text-gray-300 text-sm">
          Real-world CSSD simulations for hospital staff.
        </p>
      </div>

      <div className="p-8 rounded-2xl bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 transition">
        <h4 className="text-xl font-semibold mb-2">Certified Programs</h4>
        <p className="text-gray-300 text-sm">
          Structured courses aligned with compliance standards.
        </p>
      </div>

      <div className="p-8 rounded-2xl bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 transition">
        <h4 className="text-xl font-semibold mb-2">Expert Mentors</h4>
        <p className="text-gray-300 text-sm">
          Training led by experienced healthcare professionals.
        </p>
      </div>

    </div>

  </motion.div>
</section>

{/* ================= REGULATORY ================= */}
<section className="relative py-28 overflow-hidden">

  {/* Background Glow */}
  <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200/40 blur-3xl rounded-full" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-200/40 blur-3xl rounded-full" />

  <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT SIDE */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative"
    >
      {/* Badge */}
      <span className="inline-block mb-4 px-5 py-2 text-sm font-semibold tracking-wide text-blue-900 bg-blue-100 rounded-full">
        Compliance & Quality
      </span>

      <h2 className="text-4xl font-extrabold text-blue-950 mb-6 leading-tight">
        Regulatory Commitment
      </h2>

      <p className="text-gray-600 text-lg leading-relaxed">
        VIDA operates under Indian Medical Devices Rules with robust
        quality management systems, ensuring consistent reliability,
        traceability, and regulatory compliance across all solutions.
      </p>

      {/* Mini highlights */}
      <div className="mt-8 space-y-3 text-gray-700">
        <p>✔ Medical device compliance aligned with national standards</p>
        <p>✔ Auditable sterilization workflows</p>
        <p>✔ Continuous quality monitoring systems</p>
      </div>

      <Link
        to="/certifications"
        className="inline-block mt-10 px-10 py-4 bg-gradient-to-r from-blue-900 to-red-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
      >
        View Certifications
      </Link>
    </motion.div>

    {/* RIGHT SIDE CARD */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative backdrop-blur-xl bg-white/70 border border-white/40 p-12 rounded-3xl shadow-2xl"
    >
      <h3 className="text-2xl font-bold mb-6 text-blue-950">
        Scale & Presence
      </h3>

      <p className="text-gray-600 text-lg">
        Supporting <b className="text-blue-900">300+ healthcare institutions</b>,
        including government hospitals and medical colleges across India.
      </p>

      {/* Stats Row */}
      <div className="flex gap-12 mt-10">

        <div className="text-center">
          <h3 className="text-5xl font-extrabold text-red-500">300+</h3>
          <p className="text-gray-600 mt-2">Institutions</p>
        </div>

        <div className="text-center">
          <h3 className="text-5xl font-extrabold text-blue-900">100%</h3>
          <p className="text-gray-600 mt-2">Medical Focus</p>
        </div>

      </div>

      {/* Decorative Gradient Line */}
      <div className="mt-10 h-1 w-full bg-gradient-to-r from-blue-800 to-red-500 rounded-full" />
    </motion.div>

  </div>
</section>
{/* ================= PREMIUM JOURNEY TIMELINE ================= */}
<section className="relative py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">

  {/* Soft Glow Backgrounds */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 blur-3xl rounded-full" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-200/30 blur-3xl rounded-full" />

  <h2 className="text-center text-5xl font-extrabold text-blue-900 mb-24">
    Our Journey
  </h2>

  <div className="relative max-w-6xl mx-auto px-6">

    {/* Center Gradient Line */}
    <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-blue-800 via-blue-500 to-red-500 h-full rounded-full" />

    {[
      { year: "2011", title: "Foundation", text: "Vida Life Sciences Pvt Ltd. was launched by Dr. Onkar Yadav, Mr. Dhananjay Sawant & Mr. Sanjay Khandagale." },

      { year: "2012", title: "Operations Start", text: "Started hospital equipment & furniture supply." },

      { year: "2013", title: "Manufacturing", text: "Started in-house manufacturing of CSSD, OT equipment and hospital furniture." },

      { year: "2014", title: "Consultancy", text: "Started designing new hospital project services & biomedical consultancy." },

      { year: "2015", title: "Global Expansion", text: "Reached almost every district of Maharashtra and expanded to Karnataka, Telangana, MP, Gujarat, Muscat & Malaysia." },

      { year: "2016", title: "R&D Launch", text: "Started own R&D department to develop new CSSD equipment." },

      { year: "2017", title: "Awarded", text: "Received Fastest Growing Indian Company Excellence Award at International Achievers Conference." },

      { year: "2018", title: "Innovation", text: "Developed Automatic Bed Pan Washer Disinfector with AO value calculation." },

      { year: "2019", title: "International Project", text: "First international CSSD setup in South Africa – Congo." },

      { year: "2020", title: "COVID Resilience", text: "Successfully completed installations in Manipur-Imphal despite pandemic challenges." },

      { year: "2021", title: "Government Projects", text: "Executed multiple CSSD projects in government sector." },

      { year: "2022", title: "New Product", text: "Added double-door instrument washer cum dryer." },

      { year: "2023", title: "Scale Up", text: "Continued expansion with large CSSD projects in medical colleges." },

      { year: "2024", title: "Research Published", text: "Published AO concept research in international journal and developing ICU & Dental products." },

      { year: "2025", title: "Patent & Leadership", text: "Received first patent, launched advanced sterilizers, and leadership milestones achieved." },
    ].map((item, i) => (

      <motion.div
        key={i}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className={`relative mb-24 flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
      >

        {/* Timeline Dot */}
        <div className="absolute left-1/2 -translate-x-1/2 w-7 h-7 bg-white border-4 border-blue-800 rounded-full shadow-xl z-10" />

        {/* Glass Card */}
        <div className="w-[46%] backdrop-blur-xl bg-white/80 border border-white/40 p-10 rounded-3xl shadow-xl hover:scale-105 hover:shadow-2xl transition">

          <span className="text-sm font-semibold text-red-500 tracking-wider">
            {item.title}
          </span>

          <h3 className="text-2xl font-bold text-blue-900 mt-2">
            {item.year}
          </h3>

          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            {item.text}
          </p>

          {/* Accent Line */}
          <div className="mt-6 h-1 w-24 bg-gradient-to-r from-blue-700 to-red-500 rounded-full" />

        </div>

      </motion.div>
    ))}
  </div>
</section>


{/* ================= CTA ================= */}
<section className="relative py-28 text-center overflow-hidden">

  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-blue-100" />

  {/* Soft Glow */}
  <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-300/30 blur-3xl rounded-full" />
  <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300/30 blur-3xl rounded-full" />

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9 }}
    viewport={{ once: true }}
    className="relative z-10 max-w-4xl mx-auto px-6"
  >

    {/* Badge */}
    <div className="
      inline-block mb-6 px-6 py-2 
      bg-white/70 backdrop-blur-md 
      text-cyan-700 
      rounded-full 
      text-sm tracking-wider 
      border border-cyan-200
      shadow-sm
    ">
      Trusted Healthcare Partner
    </div>

    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-900">
      Working with VIDA Life Sciences
    </h2>

    <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
      A responsible healthcare partner focused on long-term compliance and
      patient safety.
    </p>

    {/* Buttons */}
    <div className="flex justify-center gap-6 mt-12">

      <Link
        to="/contact"
        className="
          inline-block px-12 py-4 
          bg-cyan-600 text-white font-semibold 
          rounded-full shadow-lg
          hover:bg-cyan-700
          hover:scale-105
          transition duration-300
        "
      >
        Start a Conversation
      </Link>

      <Link
        to="/who-we-are"
        className="
          inline-block px-12 py-4
          border-2 border-cyan-600
          text-cyan-700
          rounded-full
          hover:bg-cyan-600
          hover:text-white
          transition duration-300
        "
      >
        Learn More
      </Link>

    </div>

  </motion.div>
</section>



    </main>
  );
}

/* ================= COMPONENTS ================= */

function Card({ icon, title, text }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -12 }}
      className="bg-white p-10 rounded-2xl shadow-lg text-center"
    >
      <div className="text-blue-600 mb-4 mx-auto">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500">{text}</p>
    </motion.div>
  );
}

function Feature({ icon, text }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ scale: 1.05 }}
      className="bg-white p-8 rounded-xl shadow text-center"
    >
      <div className="text-red-500 mb-3 mx-auto">{icon}</div>
      <p className="font-semibold">{text}</p>
    </motion.div>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <h3 className="text-4xl font-bold text-red-500">{number}</h3>
      <p>{label}</p>
    </div>
  );
}

function Timeline({ year, text }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      className="flex gap-6"
    >
      <div className="text-blue-700 font-bold text-xl w-20">{year}</div>
      <div className="bg-white p-6 rounded-xl shadow w-full">{text}</div>
    </motion.div>
  );
}

import { motion } from "framer-motion";

export default function LeadershipPage() {

  const leaders = [
    {
      name: "Dr. Onkar A. Yadav",
      role: "Director – Infection Prevention & Regulatory Affairs",
      tag: "Clinical Governance & Infection Control",
      img: "/images/leaders/onkar.png",
      text: `Dr. Onkar A. Yadav provides clinical and regulatory leadership to VIDA Life Sciences, bringing deep expertise in Infection Prevention and Control across healthcare environments. His background in pharmacy, pharmacology and medico-legal training supports strong compliance governance and patient safety frameworks.`
    },

    {
      name: "Mr. Dhananjay Sawant",
      role: "Director – Sales & Marketing",
      tag: "Strategy & Market Leadership",
      img: "/images/leaders/dhananjay.png",
      text: `With 25+ years of experience in CSSD and TSSU projects, Mr. Sawant has executed 300+ hospital projects aligned with NABH standards. He drives VIDA’s national growth, hospital consulting, and innovation-driven product expansion.`
    },

    {
      name: "Mr. Sanjay Khandagale",
      role: "Director – Manufacturing & Quality Systems",
      tag: "Manufacturing Excellence",
      img: "/images/leaders/sanjay.png",
      text: `Mr. Khandagale leads VIDA’s manufacturing and quality operations, ensuring durable and compliant medical systems. His expertise in SS 304/316L material standards and process validation strengthens VIDA’s quality-driven production.`
    }
  ];

  return (
    <main className="bg-[#F8FAFC] text-gray-800 overflow-hidden">

     {/* ================= HERO ================= */}
<section className="relative min-h-[85vh] flex items-center justify-center text-center overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">

    <img
      src="/images/common/leadership.png"
      alt="Leadership"
      className="w-full h-full object-cover scale-105"
    />

    {/* ✅ Dark Gradient Overlay */}
    <div className="absolute inset-0 
                    bg-gradient-to-b 
                    from-black/60 
                    via-black/40 
                    to-black/65" />

    {/* ✅ Vignette Shadow */}
    <div className="absolute inset-0 
                    bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.55))]" />

  </div>


  {/* Soft Glow Effects */}
  <div className="absolute -top-24 -left-24 w-96 h-96 
                  bg-blue-500/30 blur-3xl rounded-full"/>

  <div className="absolute bottom-0 -right-24 w-96 h-96 
                  bg-red-500/20 blur-3xl rounded-full"/>


  {/* Content */}
  <motion.div
    initial={{opacity:0,y:40}}
    animate={{opacity:1,y:0}}
    transition={{duration:1}}
    className="relative z-10 max-w-4xl mx-auto px-6"
  >

    {/* Glass Badge */}
    <div className="inline-block mb-6 px-6 py-2
                    bg-white/10 backdrop-blur-md
                    border border-white/20
                    text-blue-200
                    rounded-full text-sm tracking-widest">
      VIDA Life Sciences Leadership
    </div>


    {/* Heading */}
    <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">

      Leadership &{" "}
      <span className="text-transparent bg-clip-text 
                       bg-gradient-to-r 
                       from-cyan-300 to-blue-400">
        Governance
      </span>

    </h1>


    {/* Description */}
    <p className="mt-6 text-lg md:text-xl text-blue-100 
                  leading-relaxed max-w-3xl mx-auto">
      Visionary leadership driving healthcare sterilization,
      regulatory compliance, and professional training excellence
      for safer, future-ready hospitals worldwide.
    </p>


    {/* CTA Buttons */}
    <div className="flex justify-center gap-6 mt-10 flex-wrap">

      <button className="px-10 py-4 
                         bg-gradient-to-r 
                         from-blue-600 to-red-500 
                         text-white font-semibold 
                         rounded-full shadow-xl
                         hover:scale-105 transition">
        Meet Our Leaders
      </button>

      <button className="px-10 py-4 
                         border border-white/40 
                         text-white 
                         rounded-full
                         backdrop-blur-md
                         hover:bg-white/10 transition">
        Contact Board
      </button>

    </div>

  </motion.div>

</section>


{/* ================= PHILOSOPHY ================= */}
<section className="relative max-w-6xl mx-auto px-6 mt-20 md:mt-28 pb-28">

  {/* Soft Background Glow */}
  <div className="absolute -top-16 -left-16 w-72 h-72 
                  bg-blue-200/40 blur-3xl rounded-full"/>

  <div className="absolute -bottom-16 -right-16 w-72 h-72 
                  bg-red-200/40 blur-3xl rounded-full"/>

  {/* Gradient Border Wrapper */}
  <div className="relative p-[2px] rounded-3xl 
                  bg-gradient-to-r from-blue-600/40 via-transparent to-red-500/40">

    {/* Glass Card */}
    <div className="relative bg-white/80 backdrop-blur-xl
                    rounded-3xl shadow-2xl p-12
                    border border-white/40">

      {/* Top Accent Line */}
      <div className="w-20 h-1 mb-6 rounded-full
                      bg-gradient-to-r from-blue-700 to-red-500"/>

      <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
        Our Leadership Philosophy
      </h2>

      <p className="mt-6 text-gray-600 leading-relaxed text-lg">
        VIDA Life Sciences leadership is built on 
        <span className="font-semibold text-blue-800"> clinical safety</span>, 
        <span className="font-semibold text-blue-800"> regulatory precision</span>, 
        and 
        <span className="font-semibold text-blue-800"> operational excellence</span>.
        Our directors ensure every solution meets international
        healthcare standards while driving continuous innovation,
        education, and professional training.
      </p>

      {/* Bottom Highlights */}
      <div className="flex flex-wrap gap-6 mt-10 text-sm text-gray-500">

        <span className="flex items-center gap-2">
          ✔ Patient-First Approach
        </span>

        <span className="flex items-center gap-2">
          ✔ Compliance Driven
        </span>

        <span className="flex items-center gap-2">
          ✔ Innovation Focused
        </span>

      </div>

    </div>
  </div>

</section>

{/* ================= LEADERS ================= */}
<section className="max-w-7xl mx-auto px-6 pb-32">

  {/* Section Title */}
  <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-24">
    Meet Our Directors
  </h2>

  <div className="space-y-28">

    {leaders.map((l,i)=>(
      <motion.div
        key={i}
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        className={`grid md:grid-cols-2 gap-16 items-center
        ${i%2===1 ? "md:flex md:flex-row-reverse md:items-center md:gap-16" : ""}`}
      >

        {/* IMAGE CONTAINER */}
        <div className="relative group">

          {/* Glow Accent */}
          <div className="absolute -inset-4 bg-gradient-to-r 
                          from-blue-600/30 to-red-500/30 
                          blur-2xl opacity-20 
                          group-hover:opacity-40 transition"/>

          {/* Glass Frame */}
          <div className="relative bg-white/60 backdrop-blur-xl 
                          border border-blue-100 
                          rounded-3xl p-4 shadow-xl">

            <div className="overflow-hidden rounded-2xl">

              <img
                src={l.img}
                alt={l.name}
                className="w-full h-auto object-contain
                           group-hover:scale-105 
                           transition duration-500"
              />

            </div>
          </div>
        </div>


        {/* TEXT SIDE */}
        <div className="relative">

          {/* Decorative Line */}
          <div className="absolute -left-6 top-2 w-1 h-10
                          bg-gradient-to-b 
                          from-blue-600 to-red-500
                          rounded-full"/>

          <p className="text-sm text-blue-600 uppercase tracking-widest">
            {l.tag}
          </p>

          <h3 className="text-3xl md:text-4xl font-bold mt-3 text-blue-900">
            {l.name}
          </h3>

          <p className="text-gray-500 mt-2 text-lg">
            {l.role}
          </p>

          <p className="mt-6 text-gray-600 leading-relaxed text-lg">
            {l.text}
          </p>

          {/* Optional CTA */}
          <div className="mt-8">
            <button className="px-6 py-3 rounded-full 
                               bg-gradient-to-r 
                               from-blue-700 to-red-500
                               text-white font-medium
                               shadow-lg hover:scale-105
                               transition">
              View Profile →
            </button>
          </div>

        </div>

      </motion.div>
    ))}

  </div>
</section>

{/* ================= GOVERNANCE MODEL ================= */}
<section className="relative py-28 text-white overflow-hidden">

  {/* ===== Background Layers ===== */}

  {/* Base Gradient */}
  <div className="absolute inset-0 
                  bg-gradient-to-br 
                  from-blue-950 
                  via-slate-900 
                  to-blue-900" />

  {/* Soft Glow Effects */}
  <div className="absolute -top-24 -left-24 w-[420px] h-[420px] 
                  bg-blue-600/30 blur-3xl rounded-full"/>

  <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] 
                  bg-red-500/20 blur-3xl rounded-full"/>

  {/* Subtle Grid Texture */}
  <div className="absolute inset-0 opacity-[0.06]
      [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
      [background-size:60px_60px]" />



  {/* ===== Content ===== */}
  <div className="relative z-10 max-w-5xl mx-auto px-6">

    {/* Glass Panel */}
    <div className="backdrop-blur-xl 
                    bg-white/10 
                    border border-white/20 
                    rounded-3xl 
                    p-12 md:p-16 
                    shadow-2xl 
                    text-center">

      {/* Badge */}
      <div className="inline-block mb-6 px-6 py-2
                      bg-white/10 
                      border border-white/20
                      rounded-full 
                      text-sm tracking-widest 
                      text-blue-200">
        Governance Framework
      </div>


      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">

        Collective{" "}
        <span className="text-transparent bg-clip-text 
                         bg-gradient-to-r 
                         from-blue-400 to-red-400">
          Governance
        </span>{" "}
        Approach

      </h2>


      {/* Description */}
      <p className="mt-8 text-blue-100 leading-relaxed max-w-3xl mx-auto text-lg">
        Our leadership team provides end-to-end governance across
        the healthcare sterilization lifecycle — from infection control
        and clinical protocols to CSSD design, manufacturing quality,
        and regulatory compliance.
      </p>


      {/* Divider Line */}
      <div className="mt-10 h-[1px] w-40 mx-auto 
                      bg-gradient-to-r 
                      from-transparent 
                      via-blue-400 
                      to-transparent"/>


      {/* Footer Label */}
      <p className="mt-8 text-blue-300 text-sm tracking-[0.25em] uppercase">
        VIDA LIFE SCIENCES • BOARD OF DIRECTORS
      </p>

    </div>

  </div>

</section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center">

        <h2 className="text-3xl font-bold text-blue-900">
          Partner with a Trusted Healthcare Leader
        </h2>

        <p className="mt-4 text-gray-600">
          Discover how VIDA leadership drives safe and compliant hospitals.
        </p>

        <button className="mt-8 px-10 py-4 rounded-full
                           bg-gradient-to-r from-blue-600 to-red-500
                           text-white font-semibold shadow-lg
                           hover:scale-105 transition">
          Contact Leadership Team
        </button>

      </section>

    </main>
  );
}

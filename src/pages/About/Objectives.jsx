import { motion } from "framer-motion";
import {
  ShieldCheck,
  GraduationCap,
  Microscope,
  Users,
  Globe,
  HeartPulse,
} from "lucide-react";

export default function Objectives() {
  const objectives = [
    {
      icon: <ShieldCheck size={28} />,
      title: "Quality & Compliance Leadership",
      text: "Maintain global sterilization standards, regulatory compliance, and infection-control excellence across healthcare institutions.",
    },
    {
      icon: <GraduationCap size={28} />,
      title: "Healthcare Training Excellence",
      text: "Deliver structured CSSD & infection-control training programs to build highly skilled hospital teams.",
    },
    {
      icon: <Microscope size={28} />,
      title: "Research & Innovation",
      text: "Continuously develop advanced sterilization technologies and evidence-based solutions.",
    },
    {
      icon: <Users size={28} />,
      title: "Capacity Building",
      text: "Strengthen hospital staff capabilities through mentorship, certification, and skill development.",
    },
    {
      icon: <Globe size={28} />,
      title: "Global Healthcare Support",
      text: "Support hospitals worldwide with compliant CSSD infrastructure and sterilization systems.",
    },
    {
      icon: <HeartPulse size={28} />,
      title: "Patient Safety Focus",
      text: "Promote patient-centric healthcare by ensuring safe, reliable sterilization workflows.",
    },
  ];

  return (
    <main className="bg-gradient-to-b from-[#F8FBFF] to-white text-gray-800 overflow-hidden">

{/* ================= HERO ================= */}
<section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center justify-center text-center overflow-hidden">

  <div className="absolute inset-0">
    <img
      src="/images/common/medical_obj3.jpg"
      alt="Healthcare"
      className="w-full h-full object-cover object-center"
    />

    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
    <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.5))]" />
  </div>

  <div className="absolute -top-20 left-0 w-72 md:w-96 h-72 md:h-96 bg-blue-500/20 blur-3xl rounded-full"/>
  <div className="absolute bottom-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-red-500/20 blur-3xl rounded-full"/>

  <motion.div
    initial={{opacity:0, y:40}}
    animate={{opacity:1, y:0}}
    transition={{duration:1}}
    className="relative z-10 px-4 sm:px-6 max-w-4xl"
  >

    <div className="inline-block mb-6 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-blue-100 rounded-full text-xs sm:text-sm tracking-widest">
      Healthcare Quality • Training • Compliance
    </div>

    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
      VIDA{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
        Objectives
      </span>
    </h1>

    <p className="mt-6 text-base sm:text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
      Driving healthcare quality, sterilization excellence,
      and professional training to build safer,
      compliant and future-ready hospitals.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-10">
      <button className="px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-blue-600 to-red-500 text-white font-semibold rounded-full shadow-xl hover:scale-105 transition">
        Explore Programs
      </button>

      <button className="px-8 py-3 sm:px-10 sm:py-4 border border-white/40 text-white rounded-full backdrop-blur-md hover:bg-white/10 transition">
        Contact VIDA
      </button>
    </div>

  </motion.div>
</section>


{/* ================= OBJECTIVES ================= */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 md:mt-24 pb-20 md:pb-24">

  <div className="space-y-12 md:space-y-20">

    {objectives.map((item,i)=>(

      <motion.div
        key={i}
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        className="group grid md:grid-cols-2 border border-gray-200 overflow-hidden rounded-2xl bg-white shadow-[-20px_20px_40px_rgba(0,0,0,0.06)] hover:shadow-[-25px_25px_60px_rgba(0,0,0,0.12)] transition"
      >

        {/* LEFT NUMBER */}
        <div className="relative p-8 sm:p-10 md:p-14 bg-white text-center md:text-left">

          <h1 className="text-[60px] sm:text-[90px] md:text-[130px] font-extrabold text-blue-100 group-hover:text-blue-200 transition leading-none">
            {String(i+1).padStart(2,"0")}
          </h1>

          <div className="absolute left-1/2 md:left-10 -translate-x-1/2 md:translate-x-0 bottom-6 md:bottom-10 h-1 w-20 md:w-24 bg-gradient-to-r from-blue-600 to-red-500 group-hover:w-40 md:group-hover:w-44 transition-all"/>

          <p className="mt-6 text-xs sm:text-sm tracking-widest uppercase text-gray-400">
            VIDA Life Sciences Objective
          </p>

        </div>


        {/* RIGHT PANEL */}
        <div className="space-y-6 p-8 sm:p-10 md:p-14 bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white">

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">

            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-red-500 shadow-lg">
              {item.icon}
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
              {item.title}
            </h3>

          </div>

          <p className="text-blue-100 leading-relaxed text-base sm:text-lg">
            {item.text}
          </p>

          <p className="text-blue-200/90 leading-relaxed text-sm sm:text-base">
            VIDA Life Sciences is committed to long-term healthcare
            improvement through structured systems, certified training,
            and reliable sterilization practices...
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm text-blue-200">
            <span>✔ Quality Driven</span>
            <span>✔ Compliance Focused</span>
            <span>✔ Healthcare Ready</span>
          </div>

        </div>

      </motion.div>

    ))}

  </div>

</section>

{/* ================= CORE VALUES ================= */}
<section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white">

  {/* background glow */}
  <div className="absolute -top-20 left-0 w-80 h-80 bg-blue-200/30 blur-3xl rounded-full"/>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-200/30 blur-3xl rounded-full"/>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

    {/* HEADER */}
    <div className="text-center max-w-3xl mx-auto mb-14">

      <span className="
        inline-block px-5 py-2
        rounded-full
        bg-blue-100
        text-blue-700
        text-xs sm:text-sm font-semibold
        shadow-sm
      ">
        Core Values
      </span>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-6 leading-tight">
        The Values That{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-red-500">
          Guide VIDA
        </span>
      </h2>

      <p className="mt-4 text-gray-600 text-sm sm:text-base">
        Principles that shape our commitment to healthcare education, quality,
        and professional excellence.
      </p>

    </div>

    {/* VALUES GRID */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

      {[
        "Integrity & Ethics",
        "Excellence in Education",
        "Accessibility & Inclusivity",
        "Innovation in Learning",
        "Social Responsibility",
      ].map((value, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3 }}
          className="
            group
            relative
            p-[2px]
            rounded-2xl
            bg-gradient-to-br from-blue-400/40 to-red-400/40
            hover:from-blue-600 hover:to-red-500
            transition
          "
        >

          {/* inner glass card */}
          <div className="
            h-full
            rounded-2xl
            bg-white/80
            backdrop-blur-xl
            border border-white/60
            p-6 sm:p-8
            shadow-lg
            group-hover:shadow-2xl
            transition
          ">

            {/* icon number */}
            <div className="
              w-11 h-11 mb-5
              rounded-xl
              bg-gradient-to-r from-blue-600 to-red-500
              text-white
              flex items-center justify-center
              font-bold text-sm
              shadow-md
              group-hover:scale-110
              transition
            ">
              {i + 1}
            </div>

            {/* title */}
            <h3 className="
              text-lg sm:text-xl
              font-bold
              text-gray-800
              leading-snug
              group-hover:text-blue-700
              transition
            ">
              {value}
            </h3>

            {/* subtle accent line */}
            <div className="
              mt-5 h-[3px] w-16
              bg-gradient-to-r from-blue-500 to-red-500
              rounded-full
              group-hover:w-24
              transition-all duration-300
            "/>

          </div>

        </motion.div>
      ))}

    </div>

  </div>
</section>

{/* ================= GROWTH STRATEGY ================= */}
<section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white to-blue-50">

  {/* background glow */}
  <div className="absolute -top-20 left-0 w-80 h-80 bg-blue-200/30 blur-3xl rounded-full"/>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-200/30 blur-3xl rounded-full"/>

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center"
  >

    <span className="inline-block px-6 py-2 mb-6 text-xs sm:text-sm rounded-full bg-blue-100 text-blue-700 font-semibold">
      Growth Strategy
    </span>

    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
      Building the Future of{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-red-500">
        Healthcare Education
      </span>
    </h2>

    <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
      VIDA Foundation aims to grow through strategic partnerships with hospitals,
      colleges, and institutions, digital learning platforms, multilingual course
      offerings, expert faculty networks, and continuous alignment of educational
      content with global healthcare and patient safety standards. Our growth
      strategy focuses on sustainable impact, scalable knowledge delivery, and
      empowering professionals to meet future healthcare challenges.
    </p>

  </motion.div>
</section>

{/* ================= CERTIFICATES ================= */}
<section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950">

  <div className="text-center mb-10 md:mb-14 px-4">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
      Certifications & Compliance
    </h2>
    <p className="mt-4 text-blue-200 text-sm sm:text-base">
      International certifications reflecting VIDA’s commitment to global healthcare quality standards.
    </p>
  </div>

  <div
    ref={el=>{
      if(!el) return;
      let pos=0;
      const scroll=()=>{
        pos+=0.4;
        if(pos>=el.scrollWidth-el.clientWidth) pos=0;
        el.scrollLeft=pos;
        requestAnimationFrame(scroll);
      };
      scroll();
    }}
    className="flex gap-6 sm:gap-12 overflow-hidden px-4 sm:px-10"
  >

    {["/images/certificates/cert1.png","/images/certificates/cert2.png","/images/certificates/cert3.png","/images/certificates/cert4.png","/images/certificates/cert5.png","/images/certificates/cert6.png"].map((img,i)=>(
      <div key={i} className="min-w-[220px] sm:min-w-[320px] bg-white/95 rounded-2xl shadow-2xl p-3 sm:p-4">
        <img src={img} alt="" className="w-full h-[260px] sm:h-[420px] object-contain"/>
      </div>
    ))}

  </div>

  <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-12 md:mt-16 text-blue-200 text-xs sm:text-sm">
    <span>🌍 ISO Certified</span>
    <span>🛡 GMP Compliant</span>
    <span>✔ Global Standards</span>
  </div>

</section>



{/* ================= TRAINING ================= */}
<section className="relative py-20 md:py-32 overflow-hidden bg-white">

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">

    <div className="text-center md:text-left">
      <span className="inline-block mb-6 px-5 py-2 bg-gradient-to-r from-blue-600 to-red-500 text-white rounded-full text-xs sm:text-sm tracking-widest shadow">
        VIDA ACADEMY
      </span>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
        Empowering Healthcare  
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-red-500">
          Through Training
        </span>
      </h2>

      <p className="mt-6 md:mt-8 text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
        VIDA Academy equips hospital teams with practical sterilization knowledge...
      </p>

      <div className="hidden md:block mt-10 h-24 w-1 bg-gradient-to-b from-blue-600 to-red-500 rounded-full"/>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">

      <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border text-center">
        <h3 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">300+</h3>
        <p className="mt-3 text-gray-600">Hospitals Supported</p>
      </div>

      <div className="bg-gradient-to-br from-blue-700 to-red-500 text-white p-8 sm:p-10 rounded-3xl shadow-xl text-center">
        <h3 className="text-4xl sm:text-5xl font-extrabold">14+</h3>
        <p className="mt-3 text-blue-100">Years Experience</p>
      </div>

      <div className="sm:col-span-2 bg-white p-10 sm:p-12 rounded-3xl shadow-xl border text-center">
        <h3 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-red-500 to-blue-700 bg-clip-text text-transparent">100%</h3>
        <p className="mt-4 text-gray-600">Medical Focus</p>
      </div>

    </div>

  </div>
</section>

</main>
);
}

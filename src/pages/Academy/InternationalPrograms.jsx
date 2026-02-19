import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, ArrowRight, X } from "lucide-react";

export default function InternationalPrograms() {

  /* ================= DATA ================= */
  const programs = [
    {
      title: "Global Sterilization Leadership Program",
      duration: "6 Months",
      location: "Virtual (Global)",
      enrolled: "180+ Professionals",
      image: "/images/academy/international1.jpg",
      pdf: "/pdfs/sample.pdf",
      tag: "International"
    },
    {
      title: "Infection Prevention Fellowship",
      duration: "4–6 Months",
      location: "Europe & Asia",
      enrolled: "95+ Professionals",
      image: "/images/academy/international2.jpg",
      pdf: "/pdfs/sample.pdf",
      tag: "Fellowship"
    },
    {
      title: "Healthcare Quality & Safety Program",
      duration: "1 Year",
      location: "Global Virtual",
      enrolled: "210+ Professionals",
      image: "/images/academy/international3.jpg",
      pdf: "/pdfs/sample.pdf",
      tag: "Certification"
    }
  ];

  const [activePdf, setActivePdf] = useState(null);

  /* ================= UI ================= */
  return (
    <div className="bg-slate-100 text-slate-900">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center overflow-hidden">

        <img
          src="/images/academy/internationalhero.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />

        <div className="absolute inset-0 bg-black/60"/>

        <motion.div
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          className="relative z-10 max-w-4xl px-6 text-white"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold">
            VIDA International Programs
          </h1>

          <p className="mt-6 text-gray-200 text-lg">
            Empowering healthcare professionals worldwide with
            internationally recognized training and certification.
          </p>
        </motion.div>

      </section>
{/* ================= INTRO ================= */}
<section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">

  {/* Soft background glows */}
  <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"/>
  <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-red-500/20 blur-3xl rounded-full"/>

  <div className="relative max-w-5xl mx-auto text-center">

    {/* Heading */}
    <h2 className="
      text-4xl md:text-5xl font-extrabold
      bg-gradient-to-r from-blue-300 to-red-300
      bg-clip-text text-transparent
      leading-tight
    ">
      Global Learning Without Borders
    </h2>

    {/* Divider */}
    <div className="w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-blue-500 to-red-400 rounded-full"/>

    {/* LIGHT PREMIUM CARD */}
    <div className="
      mt-12
      bg-white/95
      backdrop-blur-xl
      border border-gray-200
      shadow-[0_25px_80px_rgba(0,0,0,0.35)]
      rounded-3xl
      p-8 md:p-12
      hover:scale-[1.02]
      transition duration-500
    ">

      <p className="text-gray-700 text-lg leading-relaxed">
        VIDA Life Sciences collaborates with international experts
        and institutions to deliver globally relevant healthcare
        education. Our international programs focus on sterilization,
        patient safety, infection prevention and hospital quality.
        <br/><br/>
        Participants gain world-class knowledge, practical insights,
        and internationally valued certifications.
      </p>

    </div>

  </div>
</section>


{/* ================= GLOBAL STANDARDS ================= */}
<section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white via-blue-50 to-red-50 text-slate-900">

  {/* glow accents */}
  <div className="absolute -top-20 left-0 w-80 h-80 bg-blue-200/30 blur-3xl rounded-full"/>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-200/30 blur-3xl rounded-full"/>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

    {/* HEADER */}
    <div className="text-center max-w-4xl mx-auto mb-14">

      <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm tracking-wide font-semibold">
        International Excellence
      </span>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-6 text-slate-900">
        Global Standards & International Compliance
      </h2>

      <p className="mt-5 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
        VIDA International Programs are designed to align healthcare professionals
        with globally recognized standards and compliance frameworks, ensuring
        safe, effective and future-ready healthcare systems worldwide.
      </p>

    </div>

    {/* CARDS (DARK STYLE KEPT) */}
    <div className="grid md:grid-cols-2 gap-8 md:gap-10">

      {/* GLOBAL STANDARDS */}
      <motion.div
        initial={{opacity:0,y:30}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        whileHover={{y:-8}}
        className="
          p-7 sm:p-9
          rounded-3xl
          bg-slate-900
          text-white
          border border-slate-700
          shadow-xl
          hover:shadow-2xl
          transition
        "
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-blue-300 mb-4">
          Global Standards
        </h3>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Programs are built around globally accepted healthcare frameworks,
          infection prevention guidelines, sterilization science, and clinical
          quality benchmarks — preparing professionals to work confidently in
          international healthcare environments.
        </p>

        <div className="mt-6 h-[3px] w-24 bg-gradient-to-r from-blue-500 to-red-500 rounded-full"/>
      </motion.div>

      {/* INTERNATIONAL COMPLIANCE */}
      <motion.div
        initial={{opacity:0,y:30}}
        whileInView={{opacity:1,y:0}}
        transition={{delay:0.1}}
        viewport={{once:true}}
        whileHover={{y:-8}}
        className="
          p-7 sm:p-9
          rounded-3xl
          bg-slate-900
          text-white
          border border-slate-700
          shadow-xl
          hover:shadow-2xl
          transition
        "
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-red-300 mb-4">
          International Compliance
        </h3>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          VIDA training emphasizes compliance with international healthcare
          regulations, accreditation standards, and patient safety protocols —
          helping hospitals and professionals achieve consistent quality across
          borders.
        </p>

        <div className="mt-6 h-[3px] w-24 bg-gradient-to-r from-red-500 to-blue-500 rounded-full"/>
      </motion.div>

    </div>

  </div>
</section>


      {/* ================= PROGRAM CARDS ================= */}
      <section className="pb-24 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {programs.map((p,i)=>(

            <motion.div
              key={i}
              initial={{opacity:0,y:30}}
              whileInView={{opacity:1,y:0}}
              whileHover={{y:-12}}
              className="
                bg-slate-900 text-white
                rounded-3xl overflow-hidden
                shadow-xl
              "
            >

              {/* IMAGE */}
              <div className="relative h-64">
                <img
                  src={p.image}
                  className="w-full h-full object-cover"
                  alt=""
                />

                <span className="
                  absolute top-4 left-4
                  bg-gradient-to-r from-blue-600 to-red-500
                  px-4 py-1 text-sm rounded-full
                ">
                  {p.tag}
                </span>
              </div>


              {/* CONTENT */}
              <div className="p-6">

                <h3 className="text-xl font-bold">
                  {p.title}
                </h3>

                <p className="mt-3 text-blue-400 text-sm">
                  {p.enrolled}
                </p>

                <div className="flex flex-wrap gap-4 mt-4 text-gray-400 text-sm">

                  <span className="flex items-center gap-2">
                    <CalendarDays size={16}/> {p.duration}
                  </span>

                  <span className="flex items-center gap-2">
                    <MapPin size={16}/> {p.location}
                  </span>

                </div>


                {/* BUTTONS */}
                <div className="flex gap-4 mt-6">

                  <button
                    onClick={()=>setActivePdf(p.pdf)}
                    className="
                      flex-1
                      bg-gradient-to-r from-blue-600 to-red-500
                      py-3 rounded-full font-semibold
                      flex justify-center items-center gap-2
                    "
                  >
                    Explore <ArrowRight size={18}/>
                  </button>

                  <button className="
                      flex-1
                      border border-white/30
                      hover:bg-white/10
                      py-3 rounded-full font-semibold
                  ">
                    Register
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </section>


      {/* ================= PDF MODAL ================= */}
      {activePdf && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6">

          <div className="bg-white w-full max-w-5xl h-[85vh] rounded-xl overflow-hidden relative">

            <button
              onClick={()=>setActivePdf(null)}
              className="absolute top-4 right-4 z-10 bg-black/70 text-white p-2 rounded-full"
            >
              <X size={20}/>
            </button>

            <iframe
              src={activePdf}
              className="w-full h-full"
              title="PDF"
            />

          </div>

        </div>
      )}

    </div>
  );
}

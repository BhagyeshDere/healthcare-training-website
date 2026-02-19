import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Laptop, BookOpen, ArrowRight } from "lucide-react";

export default function TrainingPrograms() {
/* ================= DATA ================= */
const programs = [
  {
    title: "Infection Control & Sterilization",
    type: "Onsite",
    location: "VIDA Training Center",
    image: "/images/academy/training11.jpg",
    pdf: "/pdfs/sample.pdf"
  },
  {
    title: "Hospital Quality Management",
    type: "Online",
    location: "Virtual",
    image: "/images/academy/training2.jpg",
    pdf: "/pdfs/sample.pdf"
  },
  {
    title: "Patient Safety Certification",
    type: "Self",
    location: "Self Paced",
    image: "/images/academy/training3.jpg",
    pdf: "/pdfs/sample.pdf"
  },
  {
    title: "Advanced Sterilization Program",
    type: "Onsite",
    location: "VIDA Lab",
    image: "/images/academy/training4.jpg",
    pdf: "/pdfs/sample.pdf"
  },

  /* ===== NEW CARDS ===== */

  {
    title: "Clinical Audit & Compliance",
    type: "Online",
    location: "Virtual",
    image: "/images/academy/training5.jpg",
    pdf: "/pdfs/sample.pdf"
  },
  {
    title: "Biomedical Equipment Safety",
    type: "Onsite",
    location: "VIDA Biomedical Lab",
    image: "/images/academy/training6.jpg",
    pdf: "/pdfs/sample.pdf"
  },
  {
    title: "Infection Prevention Workshop",
    type: "Onsite",
    location: "VIDA Center Mumbai",
    image: "/images/academy/training7.jpg",
    pdf: "/pdfs/sample.pdf"
  },
  {
    title: "Healthcare Risk Management",
    type: "Online",
    location: "Virtual",
    image: "/images/academy/training8.jpg",
    pdf: "/pdfs/sample.pdf"
  },
  {
    title: "Nursing Quality Excellence",
    type: "Self",
    location: "Self Paced",
    image: "/images/academy/training9.jpg",
    pdf: "/pdfs/sample.pdf"
  },
  {
    title: "CSSD Best Practices Program",
    type: "Onsite",
    location: "VIDA Training Hub",
    image: "/images/academy/training10.jpg",
    pdf: "/pdfs/sample.pdf"
  },
  {
    title: "Digital Healthcare Standards",
    type: "Online",
    location: "Virtual",
    image: "/images/academy/training111.jpg",
    pdf: "/pdfs/sample.pdf"
  },
  {
    title: "Sterile Processing Certification",
    type: "Self",
    location: "Self Paced",
    image: "/images/academy/training12.jpg",
    pdf: "/pdfs/sample.pdf"
  }
];

const [filter, setFilter] = useState("All");
const [search, setSearch] = useState("");

  /* ================= FILTER ================= */
  const filtered = programs.filter(p => {
    const matchType =
      filter === "All" ||
      (filter === "Onsite" && p.type === "Onsite") ||
      (filter === "Online" && p.type === "Online") ||
      (filter === "Self" && p.type === "Self");

    const matchSearch = p.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchType && matchSearch;
  });

  /* ================= UI ================= */
  return (
    <div className="bg-slate-950 text-white">

      {/* ================= HERO ================= */}
<section className="relative h-[75vh] md:h-[85vh] flex items-center justify-center text-center overflow-hidden">

  <img
    src="/images/academy/traininghero.jpg"
    className="absolute inset-0 w-full h-full object-cover"
    alt=""
  />

  {/* Improved dark overlay */}
  <div className="absolute inset-0 bg-black/50"/>
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"/>

  <div className="relative z-10 max-w-3xl px-6">
    <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
      VIDA Training Programs
    </h1>

    <p className="mt-6 text-blue-100 drop-shadow-[0_3px_12px_rgba(0,0,0,0.8)]">
      Empowering healthcare professionals with world-class
      sterilization, quality and patient safety training.
    </p>
  </div>

</section>
{/* ================= FLAGSHIP DRIVE ================= */}
<section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">

  {/* background glows */}
  <div className="absolute -top-24 left-0 w-[420px] h-[420px] bg-blue-500/20 blur-[120px] rounded-full"/>
  <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-red-500/20 blur-[120px] rounded-full"/>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

    {/* HEADER */}
    <div className="text-center max-w-4xl mx-auto mb-16">

      <span className="
        inline-block px-5 py-2
        rounded-full
        bg-white/10 backdrop-blur-md
        border border-white/20
        text-blue-200
        text-xs sm:text-sm
        tracking-widest
        uppercase
        shadow-md
      ">
        Flagship Drive
      </span>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-6 leading-tight">
        Voice for Infection Control & Prevention
      </h2>

      <p className="mt-6 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
        A socially responsible initiative dedicated to reducing healthcare-associated
        infections and strengthening patient safety through awareness, education,
        professional training, and standardized healthcare practices.
      </p>
    </div>

    {/* PURPOSE / IMPACT / BENEFITS */}
    <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-20">

      {[
        {
          title:"Purpose",
          text:"To empower healthcare professionals with updated knowledge, practical skills, and infection prevention standards that improve care quality and hospital safety."
        },
        {
          title:"Impact",
          text:"Supports hospitals in reducing infection risks, improving compliance, and establishing structured sterilization and quality systems."
        },
        {
          title:"Benefits",
          text:"Enhances clinical confidence, promotes patient safety culture, improves operational efficiency, and ensures global healthcare compliance."
        }
      ].map((item,i)=>(

        <motion.div
          key={i}
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          whileHover={{y:-8}}
          className="
            group relative
            p-[2px]
            rounded-2xl
            bg-gradient-to-br from-blue-500/40 to-red-500/40
            hover:from-blue-500 hover:to-red-500
            transition
          "
        >

          <div className="
            h-full rounded-2xl
            bg-white/5 backdrop-blur-xl
            border border-white/10
            p-6 sm:p-8
            shadow-lg
            group-hover:shadow-2xl
            transition
          ">

            <h3 className="text-xl font-bold text-blue-300 mb-4">
              {item.title}
            </h3>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {item.text}
            </p>

            <div className="mt-5 h-[2px] w-16 bg-gradient-to-r from-blue-500 to-red-500 rounded-full group-hover:w-28 transition-all duration-300"/>

          </div>

        </motion.div>
      ))}

    </div>

    {/* KEY FOCUS AREAS */}
    <div className="text-center mb-12">
      <h3 className="text-2xl sm:text-3xl font-bold">
        Key Focus Areas
      </h3>
    </div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

  {[
    {
      title:"Infection Prevention & Control (IPC)",
      text:"Promoting evidence-based infection prevention strategies and hospital hygiene protocols.",
      image:"/images/academy/training01.jpg",
    },
    {
      title:"HAI Reduction",
      text:"Reducing hospital-acquired infections through standardized workflows and awareness.",
      image:"/images/academy/training22.jpg",
    },
    {
      title:"Sterilization Standards",
      text:"Improving CSSD practices, sterilization validation, and equipment handling accuracy.",
      image:"/images/academy/training33.jpg",
    },
    {
      title:"Biomedical Waste Management",
      text:"Ensuring safe segregation, handling, and disposal aligned with healthcare regulations.",
      image:"/images/academy/training44.jpg",
    },
    {
      title:"Patient Safety",
      text:"Embedding quality indicators and safe care practices to reduce risks and improve outcomes.",
      image:"/images/academy/training55.jpg",
    },
    {
      title:"Compliance Standards",
      text:"Aligning hospitals with national and international healthcare quality and accreditation standards.",
      image:"/images/academy/training66.jpg",
    },
  ].map((item,i)=>(

    <motion.div
      key={i}
      initial={{opacity:0,y:30}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      whileHover={{y:-8}}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        bg-white
        border border-gray-200
        shadow-lg
        hover:shadow-2xl
        transition
      "
    >

      {/* IMAGE */}
      <div className="relative h-52 sm:h-56 overflow-hidden">

        <img
          src={item.image}
          alt={item.title}
          className="
            w-full h-full object-cover
            group-hover:scale-110
            transition duration-700
          "
        />

        {/* light overlay */}
        <div className="
          absolute inset-0
          bg-gradient-to-t from-black/50 via-transparent to-transparent
        "/>

      </div>

      {/* CONTENT */}
      <div className="p-6 sm:p-7">

        <h4 className="
          text-lg sm:text-xl
          font-bold
          text-slate-800
          mb-3
          group-hover:text-blue-700
          transition
        ">
          {item.title}
        </h4>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          {item.text}
        </p>

        {/* premium accent */}
        <div className="
          mt-5 h-[3px] w-16
          bg-gradient-to-r from-blue-500 to-red-500
          rounded-full
          group-hover:w-28
          transition-all duration-300
        "/>

      </div>

    </motion.div>
  ))}

</div>



  </div>
</section>

      {/* ================= FILTER BAR ================= */}
      <section className="py-10 px-6 bg-slate-900 sticky top-0 z-20">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 justify-between">

          {/* Tabs */}
          <div className="flex flex-wrap gap-4">

            {["All","Onsite","Online","Self"].map(f => (
              <button
                key={f}
                onClick={()=>setFilter(f)}
                className={`
                  px-6 py-2 rounded-full font-medium
                  ${filter===f
                    ? "bg-gradient-to-r from-blue-600 to-red-500"
                    : "bg-white/10 hover:bg-white/20"}
                `}
              >
                {f==="Self" ? "Self Paced" : f}
              </button>
            ))}

          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-3 text-gray-400"/>
            <input
              onChange={e=>setSearch(e.target.value)}
              placeholder="Search programs..."
              className="
                w-full pl-10 pr-4 py-3
                bg-white/10 border border-white/20
                rounded-full text-white
                focus:outline-none
              "
            />
          </div>

        </div>
      </section>

{/* ================= CARDS ================= */}
<section className="py-16 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100">

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">

    {filtered.map((p,i)=>(
      <motion.div
        key={i}
        initial={{opacity:0,y:30}}
        whileInView={{opacity:1,y:0}}
        whileHover={{y:-10}}
        className="
          group relative overflow-hidden
          rounded-3xl
          bg-slate-900
          text-white
          border border-slate-700
          shadow-xl
          hover:shadow-2xl
          transition
        "
      >

        {/* Image */}
        <div className="h-60 overflow-hidden">
          <img
            src={p.image}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            alt=""
          />
        </div>

        {/* Content */}
        <div className="p-6">

          <h3 className="text-xl font-bold text-white">
            {p.title}
          </h3>

          <div className="flex items-center gap-4 mt-4 text-gray-300 text-sm">

            <span className="flex items-center gap-2">
              {p.type==="Online" && <Laptop size={16}/>}
              {p.type==="Onsite" && <MapPin size={16}/>}
              {p.type==="Self" && <BookOpen size={16}/>}
              {p.type==="Self" ? "Self Paced" : p.type}
            </span>

            <span className="flex items-center gap-2">
              <MapPin size={16}/> {p.location}
            </span>

          </div>

          {/* EXPLORE BUTTON */}
          <a
            href={p.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-6 inline-flex items-center gap-2
              bg-gradient-to-r from-blue-600 to-red-500
              px-6 py-3 rounded-full font-semibold
              hover:scale-105 transition
            "
          >
            Explore <ArrowRight size={18}/>
          </a>

        </div>

      </motion.div>
    ))}

  </div>

</section>

    </div>
  );
}

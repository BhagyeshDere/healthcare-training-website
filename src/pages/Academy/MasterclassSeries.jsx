import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, CalendarDays, MapPin, ArrowRight, X, Download } from "lucide-react";

export default function MasterclassSeries() {
/* ================= DATA ================= */
const masterclasses = [
  {
    title: "Sterilization Excellence Masterclass",
    date: "Starts June 2026",
    location: "Virtual",
    image: "/images/academy/masterclass1.jpg",
    pdf: "/pdfs/sample.pdf",
    tag: "Self-Paced"
  },
  {
    title: "Advanced Infection Control",
    date: "July 2026",
    location: "Dubai",
    image: "/images/academy/masterclass2.jpg",
    pdf: "/pdfs/sample.pdf",
    tag: "Live"
  },
  {
    title: "Hospital Quality Leadership",
    date: "August 2026",
    location: "Singapore",
    image: "/images/academy/masterclass3.jpg",
    pdf: "/pdfs/sample.pdf",
    tag: "Hybrid"
  },

  /* ✅ NEW CARDS */

  {
    title: "CSSD Best Practices",
    date: "September 2026",
    location: "Virtual",
    image: "/images/academy/masterclass4.jpg",
    pdf: "/pdfs/sample.pdf",
    tag: "Self-Paced"
  },
  {
    title: "Patient Safety & Risk Management",
    date: "October 2026",
    location: "London",
    image: "/images/academy/masterclass5.jpg",
    pdf: "/pdfs/sample.pdf",
    tag: "Live"
  },
  {
    title: "Healthcare Audit Mastery",
    date: "November 2026",
    location: "Singapore",
    image: "/images/academy/masterclass6.jpg",
    pdf: "/pdfs/sample.pdf",
    tag: "Hybrid"
  },
  {
    title: "NABH Accreditation Workshop",
    date: "December 2026",
    location: "Virtual",
    image: "/images/events/part2.jpg",
    pdf: "/pdfs/sample.pdf",
    tag: "Self-Paced"
  },
  {
    title: "Infection Prevention Pro",
    date: "January 2027",
    location: "Dubai",
    image: "/images/academy/masterclass8.jpg",
    pdf: "/pdfs/sample.pdf",
    tag: "Live"
  },
];

const [search,setSearch] = useState("");
const [activePdf,setActivePdf] = useState(null);


  /* ================= FILTER ================= */
  const filtered = masterclasses.filter(m =>
    m.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-slate-950 text-white overflow-hidden">
{/* ================= HERO ================= */}
<section className="relative h-[85vh] flex items-center justify-center text-center overflow-hidden">

  {/* Background Image */}
  <img
    src="/images/academy/masterclasshero.jpg"
    alt=""
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Subtle layered dark overlay */}
  <div className="absolute inset-0 bg-black/50"/>
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"/>

  <motion.div
    initial={{opacity:0,y:40}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.8}}
    className="relative z-10 max-w-4xl px-6"
  >
    <h1 className="
      text-5xl md:text-7xl font-extrabold
      text-white
      drop-shadow-[0_5px_25px_rgba(0,0,0,0.9)]
    ">
      VIDA Masterclass Series
    </h1>

    <p className="
      mt-6 text-gray-200
      text-lg md:text-xl
      drop-shadow-[0_4px_18px_rgba(0,0,0,0.9)]
    ">
      Premium learning experiences for healthcare leaders,
      infection control specialists and quality professionals.
    </p>

  </motion.div>
</section>

{/* ================= VIDA MASTERCLASS INTRO ================= */}
<section className="relative overflow-hidden">

  {/* Gradient Background */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-800 to-red-900" />

  {/* Soft Glow Accents */}
  <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/30 blur-3xl rounded-full"/>
  <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-500/30 blur-3xl rounded-full"/>

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-white">

    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">

      <p className="text-lg md:text-xl leading-relaxed text-gray-100">
        <span className="font-semibold text-white">
          VIDA Life Sciences Masterclass Series
        </span>{" "}
        delivers high-impact learning experiences designed for
        healthcare leaders, infection control specialists and
        quality professionals. Each session is led by global
        experts and blends practical insights with real-world
        healthcare applications.
      </p>

      <p className="mt-6 text-lg md:text-xl leading-relaxed text-gray-200">
        Participants gain access to structured guidance,
        interactive discussions and curated reference
        materials that strengthen sterilization practices,
        patient safety culture and regulatory compliance.
      </p>

      <p className="mt-6 text-lg md:text-xl leading-relaxed text-gray-200">
        For added flexibility, VIDA offers
        <span className="font-semibold text-white">
          {" "}self-paced learning options
        </span>{" "}
        so professionals can continue advancing their
        expertise anytime, anywhere.
      </p>

    </div>

  </div>
</section>

{/* ================= SEARCH BAR ================= */}
<section className="py-12 px-6 bg-slate-900">

  <div className="max-w-4xl mx-auto relative">

    <Search className="absolute left-4 top-4 text-gray-400"/>

    <input
      placeholder="Search masterclasses..."
      onChange={e=>setSearch(e.target.value)}
      className="
        w-full pl-12 pr-4 py-4
        bg-white/10 border border-white/20
        rounded-full
        focus:outline-none
      "
    />

  </div>
</section>
{/* ================= MASTERCLASS GRID ================= */}
<section className="py-16 px-6 bg-gray-50">

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">

    {filtered.map((m,i)=>(

      <motion.div
        key={i}
        whileHover={{y:-10}}
        className="
          group relative
          bg-slate-900
          border border-slate-700
          rounded-3xl overflow-hidden
          shadow-xl
          text-white
        "
      >

        {/* IMAGE */}
        <div className="relative h-64">
          <img
            src={m.image}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            alt=""
          />

          <span className="
            absolute top-4 left-4
            bg-gradient-to-r from-blue-600 to-red-500
            px-4 py-1 rounded-full text-sm
            text-white
          ">
            {m.tag}
          </span>
        </div>

        {/* CONTENT */}
        <div className="p-6">

          <h3 className="text-xl font-bold">
            {m.title}
          </h3>

          <div className="flex flex-wrap gap-4 mt-4 text-gray-400 text-sm">
            <span className="flex gap-2 items-center">
              <CalendarDays size={16}/> {m.date}
            </span>

            <span className="flex gap-2 items-center">
              <MapPin size={16}/> {m.location}
            </span>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">

            {/* Explore */}
            <button
              onClick={()=>setActivePdf(m.pdf)}
              className="
                w-full
                bg-gradient-to-r from-blue-600 to-red-500
                py-3 rounded-full
                font-semibold
                flex justify-center items-center gap-2
                hover:scale-105 transition
                text-white
              "
            >
              Explore <ArrowRight size={18}/>
            </button>

            {/* Register */}
            <button
              className="
                w-full
                border border-slate-600
                bg-slate-800
                hover:bg-slate-700
                py-3 rounded-full
                font-semibold
                transition
              "
            >
              Register
            </button>

          </div>

        </div>

      </motion.div>

    ))}

  </div>

</section>


{/* ================= PDF MODAL ================= */}
<AnimatePresence>
{activePdf && (

<motion.div
  initial={{opacity:0}}
  animate={{opacity:1}}
  exit={{opacity:0}}
  className="
    fixed inset-0 z-50
    bg-black/80 backdrop-blur
    flex justify-center items-center
    p-6
  "
>

<div className="bg-slate-900 w-full max-w-5xl h-[90vh] rounded-xl relative overflow-hidden">

<button
  onClick={()=>setActivePdf(null)}
  className="absolute top-4 right-4 text-white"
>
  <X size={28}/>
</button>

<iframe
  src={activePdf}
  className="w-full h-full"
  title="PDF Viewer"
/>

<a
  href={activePdf}
  download
  className="
    absolute bottom-6 right-6
    bg-gradient-to-r from-blue-600 to-red-500
    px-6 py-3 rounded-full
    flex items-center gap-2
  "
>
  Download <Download size={18}/>
</a>

</div>

</motion.div>

)}
</AnimatePresence>

</div>
);
}

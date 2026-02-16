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
    image: "/images/events/annual1.jpg",
    pdf: "/pdfs/sample.pdf"
  },
  {
    title: "Hospital Quality Management",
    type: "Online",
    location: "Virtual",
    image: "/images/events/international1.jpg",
    pdf: "/pdfs/sample.pdf"
  },
  {
    title: "Patient Safety Certification",
    type: "Self",
    location: "Self Paced",
    image: "/images/events/annual2.jpg",
    pdf: "/pdfs/sample.pdf"
  },
  {
    title: "Advanced Sterilization Program",
    type: "Onsite",
    location: "VIDA Lab",
    image: "/images/events/part1.jpg",
    pdf: "/pdfs/sample.pdf"
  },

  /* ===== NEW CARDS ===== */

  {
    title: "Clinical Audit & Compliance",
    type: "Online",
    location: "Virtual",
    image: "/images/events/part2.jpg",
    pdf: "/pdfs/sample.pdf"
  },
  {
    title: "Biomedical Equipment Safety",
    type: "Onsite",
    location: "VIDA Biomedical Lab",
    image: "/images/events/part3.jpg",
    pdf: "/pdfs/sample.pdf"
  },
  {
    title: "Infection Prevention Workshop",
    type: "Onsite",
    location: "VIDA Center Mumbai",
    image: "/images/events/annualevent.jpg",
    pdf: "/pdfs/sample.pdf"
  },
  {
    title: "Healthcare Risk Management",
    type: "Online",
    location: "Virtual",
    image: "/images/events/international2.jpg",
    pdf: "/pdfs/sample.pdf"
  },
  {
    title: "Nursing Quality Excellence",
    type: "Self",
    location: "Self Paced",
    image: "/images/events/international3.jpg",
    pdf: "/pdfs/sample.pdf"
  },
  {
    title: "CSSD Best Practices Program",
    type: "Onsite",
    location: "VIDA Training Hub",
    image: "/images/events/partnerhero.jpg",
    pdf: "/pdfs/sample.pdf"
  },
  {
    title: "Digital Healthcare Standards",
    type: "Online",
    location: "Virtual",
    image: "/images/events/internationalhero.jpg",
    pdf: "/pdfs/sample.pdf"
  },
  {
    title: "Sterile Processing Certification",
    type: "Self",
    location: "Self Paced",
    image: "/images/events/annual.jpg",
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
          src="/images/events/partnerhero.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />

        <div className="absolute inset-0 bg-black/40"/>

        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            VIDA Training Programs
          </h1>

          <p className="mt-6 text-blue-100 drop-shadow-md">
            Empowering healthcare professionals with world-class
            sterilization, quality and patient safety training.
          </p>
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
      <section className="py-16 px-6">

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
                bg-white/10 backdrop-blur-xl
                border border-white/20
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

                <h3 className="text-xl font-bold">
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

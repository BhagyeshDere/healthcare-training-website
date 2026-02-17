import { useState } from "react";
import { Search, CalendarDays, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function SearchPage() {

  /* ================= EXTENDED DATA ================= */
  const data = [
    { title:"Sterilization Excellence Program", type:"Program", date:"June 2026", link:"/academy/training"},
    { title:"Hospital Quality Leadership", type:"Program", date:"Aug 2026", link:"/academy/masterclass"},
    { title:"Patient Safety Certification", type:"Program", date:"2026", link:"/academy/excellence"},

    { title:"VIDA International Summit", type:"Event", date:"July 2026", link:"/events/international"},
    { title:"Annual VIDA Healthcare Meet", type:"Event", date:"2026", link:"/events/annual"},
    { title:"Global Infection Prevention Forum", type:"Event", date:"2026", link:"/events/partner"},

    { title:"Infection Control Webinar", type:"Event", date:"May 2026", link:"/academy/webinars"},
    { title:"CSSD Best Practices Webinar", type:"Event", date:"2026", link:"/academy/webinars"},

    { title:"Patient Safety Toolkit", type:"Resource", date:"2025", link:"#"},
    { title:"Hospital Audit Checklist", type:"Resource", date:"2025", link:"#"},
    { title:"Fire Safety Guide", type:"Resource", date:"2025", link:"#"},
  ];

  const [query,setQuery] = useState("");
  const [filter,setFilter] = useState("All");

  /* ================= FILTER + SORT ================= */
  const results = data
    .filter(item=>{
      const matchText = item.title.toLowerCase().includes(query.toLowerCase());
      const matchType = filter==="All" || item.type===filter;
      return matchText && matchType;
    })
    .sort((a,b)=>{
      const order = {Program:1, Event:2, Resource:3};
      return order[a.type]-order[b.type];
    });

  /* ================= HIGHLIGHT MATCH ================= */
  const highlight = (text)=>{
    if(!query) return text;
    const parts = text.split(new RegExp(`(${query})`,"gi"));
    return parts.map((part,i)=>
      part.toLowerCase()===query.toLowerCase()
        ? <span key={i} className="bg-yellow-200 px-1 rounded">{part}</span>
        : part
    );
  };

  /* ================= UI ================= */
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">

      {/* ================= HERO ================= */}
      <section className="relative py-24 px-6 text-center overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-red-800"/>
        <div className="absolute inset-0 bg-black/50"/>

        <div className="relative z-10 max-w-3xl mx-auto">

          <h1 className="text-5xl md:text-6xl font-bold text-white">
            VIDA Smart Search
          </h1>

          <p className="text-blue-100 mt-4">
            Discover programs, events & resources instantly
          </p>

          {/* SEARCH */}
          <div className="mt-10 flex bg-white/90 backdrop-blur-lg rounded-full shadow-2xl overflow-hidden">

            <input
              type="text"
              placeholder="Search VIDA content..."
              value={query}
              onChange={e=>setQuery(e.target.value)}
              className="flex-1 px-6 py-4 outline-none text-lg bg-transparent"
            />

            <div className="bg-gradient-to-r from-blue-600 to-red-500 px-6 flex items-center text-white">
              <Search/>
            </div>

          </div>

          {/* FILTERS */}
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            {["All","Program","Event","Resource"].map(cat=>(
              <button
                key={cat}
                onClick={()=>setFilter(cat)}
                className={`
                  px-5 py-2 rounded-full border transition
                  ${filter===cat
                    ? "bg-white text-black shadow"
                    : "text-white border-white/40 hover:bg-white/10"}
                `}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ================= RESULTS ================= */}
      <section className="py-20 px-6">

        <div className="max-w-6xl mx-auto">

          {/* RESULT COUNT */}
          {query && (
            <p className="mb-6 text-gray-600">
              Found <b>{results.length}</b> results
            </p>
          )}

          {/* EMPTY */}
          {results.length===0 && (
            <p className="text-center text-gray-500 text-lg">
              No results found
            </p>
          )}

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {results.map((item,i)=>(
              <motion.div
                key={i}
                whileHover={{y:-10, scale:1.02}}
                className="
                  backdrop-blur-xl
                  bg-white/70
                  border border-white/40
                  rounded-3xl
                  shadow-xl
                  p-8
                  transition
                "
              >

                {/* TYPE BADGE */}
                <span className={`
                  text-xs px-3 py-1 rounded-full text-white
                  ${item.type==="Program" && "bg-blue-600"}
                  ${item.type==="Event" && "bg-red-500"}
                  ${item.type==="Resource" && "bg-green-600"}
                `}>
                  {item.type}
                </span>

                <h3 className="text-xl font-bold mt-4">
                  {highlight(item.title)}
                </h3>

                <p className="flex items-center gap-2 text-gray-500 mt-3">
                  <CalendarDays size={16}/> {item.date}
                </p>

                <a
                  href={item.link}
                  className="
                    mt-6 inline-flex items-center gap-2
                    text-blue-600 font-semibold
                    hover:gap-3 transition-all
                  "
                >
                  Explore <ArrowRight size={18}/>
                </a>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
}

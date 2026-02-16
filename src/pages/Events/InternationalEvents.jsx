import { useState } from "react";
import { motion } from "framer-motion";
import { Globe2, CalendarDays, MapPin, ArrowRight, X } from "lucide-react";

export default function InternationalEvents() {

  /* ===== STATE ADDED ===== */
  const [tab, setTab] = useState("Upcoming");
  const [activeEvent, setActiveEvent] = useState(null);

  const events = [
    {
      title: "Global Sterilization Summit",
      desc: "VIDA Life Sciences brings together global CSSD leaders to discuss advanced sterilization protocols and infection control.",
      date: "April 2025",
      location: "London, UK",
      image: "/images/events/international1.jpg",
      type: "Upcoming"
    },
    {
      title: "International Healthcare Expo",
      desc: "A global platform showcasing VIDA’s innovations in CSSD automation and hospital sterilization systems.",
      date: "July 2025",
      location: "Dubai, UAE",
      image: "/images/events/international2.jpg",
      type: "Upcoming"
    },
    {
      title: "World Patient Safety Forum",
      desc: "Collaborative event with global institutions focused on patient safety and quality improvement.",
      date: "October 2024",
      location: "Singapore",
      image: "/images/events/international3.jpg",
      type: "Past"
    },
  ];

  const filteredEvents = events.filter(e => e.type === tab);

  return (
    <div className="bg-slate-950 text-white overflow-hidden">

{/* ================= HERO ================= */}
<section className="relative min-h-[95vh] md:min-h-[105vh] flex items-center justify-center text-center">

  <img src="/images/academy/internationalhero.jpg"
       className="absolute inset-0 w-full h-full object-cover"/>

  <div className="absolute inset-0 bg-black/55"/>

  <motion.div
    initial={{opacity:0,y:40}}
    animate={{opacity:1,y:0}}
    transition={{duration:1}}
    className="relative z-10 px-6 max-w-5xl text-white"
  >

    <div className="flex justify-center mb-6">
      <Globe2 size={40} className="text-blue-400 drop-shadow-lg"/>
    </div>

    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold">
      International Events
    </h1>

    <p className="mt-6 text-gray-200 text-lg max-w-3xl mx-auto">
      VIDA Life Sciences connects with the world through
      global healthcare events, promoting sterilization excellence,
      compliance and patient safety across borders.
    </p>

  </motion.div>
</section>

{/* ================= GLOBAL IMPACT STRIP ================= */}
<section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50">

  <div className="absolute -top-16 -left-16 w-72 h-72 bg-blue-200/40 blur-3xl rounded-full"/>
  <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-red-200/40 blur-3xl rounded-full"/>

  <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

    {[["25+","Countries Reached"],["150+","Global Hospitals"],["40+","International Events"],["100%","Healthcare Focus"]]
      .map((s,i)=>(
      <div key={i}
        className="bg-white/80 rounded-2xl p-8 shadow hover:-translate-y-2 transition border">
        <h3 className="text-4xl font-extrabold bg-gradient-to-r from-blue-700 to-red-500 bg-clip-text text-transparent">
          {s[0]}
        </h3>
        <p className="text-gray-600 mt-3">{s[1]}</p>
      </div>
    ))}
  </div>
</section>

{/* ================= TIMELINE STYLE EVENTS ================= */}
<section className="relative py-28 px-6 overflow-hidden">

  <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"/>
  <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full"/>
  <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-600/20 blur-3xl rounded-full"/>

  <div className="relative max-w-7xl mx-auto">

    <h2 className="text-center text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
      Global Event Highlights
    </h2>

    <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
      VIDA Life Sciences participates in global healthcare conferences,
      sterilization forums and international collaborations.
    </p>

    {/* ===== UPCOMING / PAST BUTTONS ADDED ===== */}
    <div className="flex justify-center gap-4 mb-16">
      {["Upcoming","Past"].map(t=>(
        <button
          key={t}
          onClick={()=>setTab(t)}
          className={`px-8 py-3 rounded-lg font-semibold transition
            ${tab===t
              ? "bg-gradient-to-r from-blue-600 to-red-500 text-white"
              : "bg-white/10 text-gray-300 hover:bg-white/20"}`}
        >
          {t}
        </button>
      ))}
    </div>

    <div className="space-y-24">

      {filteredEvents.map((e,i)=>(
        <motion.div key={i}
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="grid md:grid-cols-2 gap-12 items-center">

          <div className={`${i%2===1 ? "md:order-2" : ""}`}>
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/30 to-red-500/30 blur-2xl opacity-40"/>
              <img src={e.image}
                   className="rounded-3xl shadow-2xl w-full h-[320px] md:h-[420px] object-cover"/>
            </div>
          </div>

          <div className={`${i%2===1 ? "md:order-1" : ""}`}>
            <h3 className="text-3xl font-bold text-blue-400">{e.title}</h3>
            <p className="mt-6 text-gray-300">{e.desc}</p>

            <div className="flex gap-6 mt-6 text-gray-400">
              <span className="flex items-center gap-2">
                <CalendarDays size={16}/> {e.date}
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={16}/> {e.location}
              </span>
            </div>

            {/* ===== BUTTON FUNCTIONALITY ===== */}
            <button
              onClick={()=>setActiveEvent(e)}
              className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-600 to-red-500 rounded-full font-semibold flex gap-2 hover:scale-105 transition">
              Explore Event <ArrowRight size={18}/>
            </button>
          </div>

        </motion.div>
      ))}

    </div>
  </div>
</section>

{/* ===== MODAL ===== */}
{activeEvent && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">

    <div className="bg-slate-900 max-w-xl w-full rounded-3xl overflow-hidden relative">

      <img src={activeEvent.image} className="w-full h-64 object-cover"/>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-blue-400">
          {activeEvent.title}
        </h3>
        <p className="mt-4 text-gray-300">{activeEvent.desc}</p>
        <p className="mt-2 text-gray-400">
          {activeEvent.date} • {activeEvent.location}
        </p>

        <button
          onClick={()=>setActiveEvent(null)}
          className="mt-6 w-full py-3 bg-gradient-to-r from-blue-600 to-red-500 rounded-full font-semibold">
          Close
        </button>
      </div>

      <X
        size={28}
        onClick={()=>setActiveEvent(null)}
        className="absolute top-4 right-4 cursor-pointer"
      />
    </div>
  </div>
)}



{/* ================= CTA ================= */}
<section className="relative py-24 text-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50">

  {/* soft brand glows */}
  <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-200/40 blur-3xl rounded-full"/>
  <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-red-200/40 blur-3xl rounded-full"/>

  <div className="relative z-10 px-6">

    <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
      Join VIDA on the Global Stage
    </h2>

    <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
      Partner with VIDA Life Sciences in international healthcare
      forums and shape the future of global sterilization standards.
    </p>

    <button
      className="
        mt-10 px-10 py-4
        bg-gradient-to-r from-blue-600 to-red-500
        text-white
        rounded-full font-semibold
        shadow-lg
        hover:scale-110 hover:shadow-2xl
        transition duration-300
      "
    >
      Join Upcoming Events
    </button>

  </div>

</section>


    </div>
  );
}

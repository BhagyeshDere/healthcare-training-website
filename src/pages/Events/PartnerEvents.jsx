import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";

const partners = [
  {
    title: "VIDA x Global CSSD Forum",
    date: "March 18–19, 2026",
    location: "Dubai, UAE",
    image: "/images/events/part1.jpg",
    desc: "International collaboration on sterilization excellence, infection control, and hospital safety systems.",
    category: "upcoming"
  },
  {
    title: "VIDA x MedTech Leaders Meet",
    date: "July 10, 2026",
    location: "Singapore",
    image: "/images/events/part2.jpg",
    desc: "Partner event focused on medical device innovation and compliance-driven hospital ecosystems.",
    category: "upcoming"
  },
  {
    title: "VIDA x Healthcare Summit",
    date: "Nov 2–3, 2025",
    location: "London, UK",
    image: "/images/events/part3.jpg",
    desc: "Global healthcare leaders unite to discuss patient safety and sterilization quality frameworks.",
    category: "past"
  },
];

export default function PartnerEvents() {

  /* ===== TAB STATE (NEW) ===== */
  const [tab, setTab] = useState("upcoming");

  const filteredPartners =
    tab === "all"
      ? partners
      : partners.filter(p => p.category === tab);

  return (
    <div className="bg-slate-950 text-white">

{/* ================= HERO ================= */}
<section className="relative min-h-[95vh] md:min-h-[110vh] flex items-center justify-center text-center overflow-hidden">

  <img
    src="/images/events/partnerhero.jpg"
    className="absolute inset-0 w-full h-full object-cover"
    alt=""
  />

  <div className="absolute inset-0 bg-black/35" />
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative z-10 px-6 max-w-4xl"
  >
    <span className="px-6 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-blue-300 text-sm">
      VIDA Life Sciences
    </span>

    <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg">
      Partner Events
    </h1>

    <p className="mt-6 text-gray-100 max-w-2xl mx-auto text-lg drop-shadow-md">
      VIDA collaborates globally with healthcare institutions,
      technology leaders and academic bodies to advance sterilization,
      patient safety and healthcare quality.
    </p>

  </motion.div>
</section>

{/* ================= INTRO + PARTNER EVENTS ================= */}
<section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950">

  <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full"/>
  <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-red-600/20 blur-3xl rounded-full"/>

  {/* ===== INTRO ===== */}
  <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-white">
      Global Collaboration for Safer Healthcare
    </h2>

    <p className="mt-6 text-gray-300 leading-relaxed">
      VIDA Life Sciences believes in collective healthcare progress.
      We actively partner with hospitals, medical universities,
      and healthcare innovators worldwide to promote sterilization
      excellence, compliance standards and patient safety culture.
      <br/><br/>
      These partner events create a shared platform for knowledge,
      research and best-practice exchange across borders.
    </p>
  </div>

  {/* ===== TAB BUTTONS (NEW) ===== */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 mt-12 flex gap-4">

    <button
      onClick={() => setTab("upcoming")}
      className={`
        px-8 py-3 rounded-md font-semibold transition
        ${tab==="upcoming"
          ? "bg-gradient-to-r from-blue-600 to-red-500 text-white shadow-lg"
          : "bg-white/10 text-gray-300 hover:bg-white/20"}
      `}
    >
      Upcoming
    </button>

    <button
      onClick={() => setTab("past")}
      className={`
        px-8 py-3 rounded-md font-semibold transition
        ${tab==="past"
          ? "bg-gradient-to-r from-blue-600 to-red-500 text-white shadow-lg"
          : "bg-white/10 text-gray-300 hover:bg-white/20"}
      `}
    >
      Past
    </button>

  </div>

  {/* ===== HORIZONTAL CARDS ===== */}
  <div className="relative z-10 max-w-7xl mx-auto mt-20 space-y-16 px-6">

    {filteredPartners.map((e,i)=>(
      <motion.div
        key={i}
        initial={{opacity:0, y:40}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        whileHover={{scale:1.01}}
        className="
          group relative
          w-full
          rounded-3xl
          overflow-hidden
          bg-white/10 backdrop-blur-xl
          border border-white/20
          shadow-[0_25px_80px_rgba(0,0,0,0.5)]
        "
      >

        <div className={`
          grid md:grid-cols-2 items-center
          ${i%2===1 ? "md:[&>div:first-child]:order-2" : ""}
        `}>

          {/* IMAGE SIDE */}
          <div className="relative h-[260px] sm:h-[320px] md:h-[380px] overflow-hidden">
            <img
              src={e.image}
              alt=""
              className="
                w-full h-full object-cover
                group-hover:scale-110
                transition duration-700
              "
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"/>
          </div>

          {/* CONTENT SIDE */}
          <div className="p-8 md:p-12 text-white">

            <h3 className="text-2xl md:text-3xl font-bold">
              {e.title}
            </h3>

            <p className="mt-4 text-gray-300 leading-relaxed">
              {e.desc}
            </p>

            <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <CalendarDays size={16}/> {e.date}
              </span>

              <span className="flex items-center gap-2">
                <MapPin size={16}/> {e.location}
              </span>
            </div>

            <button className="
              mt-8
              px-8 py-3
              bg-gradient-to-r from-blue-600 to-red-500
              rounded-full font-semibold
              hover:scale-105 hover:shadow-xl
              transition
            ">
              View Details
            </button>

          </div>

        </div>

      </motion.div>
    ))}

  </div>

</section>

   

{/* ================= CTA ================= */}
<section className="relative py-24 text-center overflow-hidden bg-gradient-to-b from-white via-blue-50 to-red-50">

  {/* subtle glow accents */}
  <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-200/30 blur-3xl rounded-full"/>
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-200/30 blur-3xl rounded-full"/>

  <div className="relative z-10 px-6">

    <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
      Become a VIDA Partner
    </h2>

    <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
      Collaborate with VIDA Life Sciences to shape the future
      of safe and compliant healthcare systems worldwide.
    </p>

    <button
      className="
        mt-10 px-12 py-4
        bg-gradient-to-r from-blue-600 to-red-500
        text-white font-semibold
        rounded-full
        shadow-lg shadow-blue-200/50
        hover:scale-105 hover:shadow-xl
        transition duration-300
      "
    >
      Partner With VIDA
    </button>

  </div>
</section>


    </div>
  );
}

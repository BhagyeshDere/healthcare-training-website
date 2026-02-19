import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";

export default function Webinars() {

  /* ================= DATA ================= */

  const upcoming = [
    {
      title: "Medication Safety & Clinical Risk",
      date: "21 Feb 2026",
      time: "3:30 PM IST",
      image: "/images/academy/webinar1.jpg",
      pdf: "/pdfs/sample.pdf",
    },
    {
      title: "Advanced Infection Prevention",
      date: "10 Mar 2026",
      time: "5:00 PM IST",
      image: "/images/academy/webinar2.jpg",
      pdf: "/pdfs/sample.pdf",
    },
  ];

  const past = [
    {
      title: "Sterilization Quality Benchmarking",
      date: "15 Jan 2025",
      time: "4:00 PM IST",
      image: "/images/academy/webinar3.jpg",
      pdf: "/pdfs/sample.pdf",
    },
  ];

  /* ================= STATE ================= */

  const [tab, setTab] = useState("upcoming");
  const [search, setSearch] = useState("");
  const [activePdf, setActivePdf] = useState(null);

  const data = (tab === "upcoming" ? upcoming : past)
    .filter(w =>
      w.title.toLowerCase().includes(search.toLowerCase())
    );

  /* ================= UI ================= */

  return (
    <div className="bg-slate-950 text-white min-h-screen">
{/* ================= HERO ================= */}
<section className="relative min-h-[85vh] md:min-h-[95vh] lg:min-h-[100vh] flex items-center justify-center text-center overflow-hidden">

  <img
    src="/images/academy/webinarshero.jpg"
    className="absolute inset-0 w-full h-full object-cover"
    alt=""
  />

  <div className="absolute inset-0 bg-black/60"/>

  <div className="relative z-10 px-6 max-w-4xl">
    <h1 className="text-5xl md:text-7xl font-extrabold">
      VIDA Webinars
    </h1>

    <p className="mt-6 text-gray-200 text-lg">
      Learn from global healthcare experts through
      interactive VIDA Life Sciences webinars.
    </p>
  </div>

</section>

{/* ================= VIDA INTRO ================= */}
<section className="relative overflow-hidden py-20 px-6">

  {/* LIGHT BACKGROUND */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-red-50"/>

  {/* soft glow accents */}
  <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200/30 blur-3xl rounded-full"/>
  <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-red-200/30 blur-3xl rounded-full"/>

  <div className="relative max-w-6xl mx-auto">

    {/* DARK CARD */}
    <div className="
      bg-slate-900
      text-white
      rounded-3xl
      p-10 md:p-16
      shadow-[0_25px_80px_rgba(0,0,0,0.25)]
      text-center
    ">

      {/* Title */}
      <h2 className="
        text-3xl md:text-5xl
        font-extrabold
        bg-gradient-to-r from-blue-400 to-red-400
        bg-clip-text text-transparent
      ">
        VIDA Life Sciences Webinars
      </h2>

      {/* Paragraph */}
      <p className="
        mt-8
        text-gray-300
        text-lg
        leading-relaxed
        max-w-4xl
        mx-auto
      ">
        VIDA Life Sciences webinars provide a powerful platform for
        continuous professional education in healthcare. Our expert-led
        virtual sessions connect global practitioners to discuss emerging
        trends, regulatory updates, infection control practices, and
        quality improvement strategies.
      </p>

      <p className="
        mt-6
        text-gray-400
        leading-relaxed
        max-w-4xl
        mx-auto
      ">
        With an emphasis on real-world case learning and interactive
        dialogue, VIDA webinars strengthen clinical knowledge,
        encourage collaboration, and support measurable
        improvements in patient safety and healthcare excellence.
      </p>

      {/* BADGES */}
      <div className="
        flex flex-wrap
        justify-center
        gap-4
        mt-10
      ">
        {[
          "Expert Speakers",
          "Global Participation",
          "Case-Based Learning",
          "Certified Sessions"
        ].map((item,i)=>(
          <span
            key={i}
            className="
              px-6 py-2
              rounded-full
              bg-white/10
              border border-white/20
              text-sm text-gray-200
            "
          >
            {item}
          </span>
        ))}
      </div>

    </div>

  </div>

</section>


{/* ================= ONLINE TRAINING & AWARENESS ================= */}
<section className="relative py-20 md:py-28 overflow-hidden bg-slate-950 text-white">

  {/* glow background */}
  <div className="absolute -top-20 left-0 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full"/>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-500/20 blur-3xl rounded-full"/>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

    {/* HEADER */}
    <div className="text-center max-w-4xl mx-auto mb-14">

      <span className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 text-blue-200 text-xs sm:text-sm">
        Webinar Learning Experience
      </span>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-6">
        Online Training & Awareness Programs
      </h2>

      <p className="mt-5 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
        VIDA webinars extend beyond discussions — they deliver structured
        online training and awareness-driven learning experiences that help
        healthcare professionals stay updated with evolving standards and
        modern practices.
      </p>

    </div>

    {/* CARDS */}
    <div className="grid md:grid-cols-2 gap-8 md:gap-10">

      {/* ONLINE TRAINING */}
      <motion.div
        initial={{opacity:0,y:30}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        whileHover={{y:-8}}
        className="
          p-7 sm:p-9
          rounded-3xl
          bg-white/10
          backdrop-blur-xl
          border border-white/10
          hover:bg-white/15
          transition
          shadow-xl
        "
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-blue-300 mb-4">
          Online Training
        </h3>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Structured online sessions designed for flexible professional
          learning. Participants gain access to expert-led knowledge,
          real-world case studies, and updated healthcare practices — all
          accessible from anywhere.
        </p>

        <div className="mt-6 h-[3px] w-24 bg-gradient-to-r from-blue-500 to-red-500 rounded-full"/>
      </motion.div>

      {/* AWARENESS PROGRAMS */}
      <motion.div
        initial={{opacity:0,y:30}}
        whileInView={{opacity:1,y:0}}
        transition={{delay:0.1}}
        viewport={{once:true}}
        whileHover={{y:-8}}
        className="
          p-7 sm:p-9
          rounded-3xl
          bg-white/10
          backdrop-blur-xl
          border border-white/10
          hover:bg-white/15
          transition
          shadow-xl
        "
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-red-300 mb-4">
          Awareness Programs
        </h3>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Awareness-focused webinars that promote infection prevention,
          patient safety, compliance standards, and best healthcare practices.
          These programs help institutions build a culture of continuous
          learning and quality improvement.
        </p>

        <div className="mt-6 h-[3px] w-24 bg-gradient-to-r from-red-500 to-blue-500 rounded-full"/>
      </motion.div>

    </div>

  </div>
</section>


      {/* ================= FILTER BAR ================= */}
      <section className="py-12 px-6 bg-slate-900">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 justify-between">

          {/* Tabs */}
          <div className="flex gap-4">

            <button
              onClick={()=>setTab("upcoming")}
              className={`
                px-6 py-3 rounded-full font-semibold
                ${tab==="upcoming"
                  ? "bg-gradient-to-r from-blue-600 to-red-500"
                  : "bg-white/10"}
              `}
            >
              Upcoming Webinars
            </button>

            <button
              onClick={()=>setTab("past")}
              className={`
                px-6 py-3 rounded-full font-semibold
                ${tab==="past"
                  ? "bg-gradient-to-r from-blue-600 to-red-500"
                  : "bg-white/10"}
              `}
            >
              Past Webinars
            </button>

          </div>

          {/* Search */}
          <input
            placeholder="Search webinars..."
            onChange={e=>setSearch(e.target.value)}
            className="
              px-5 py-3 rounded-full
              bg-white/10 border border-white/20
              w-full md:w-72
              focus:outline-none
            "
          />

        </div>
      </section>

    {/* ================= GRID ================= */}
<section className="py-16 px-6 bg-gradient-to-br from-blue-50 via-white to-red-50">

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">

    {data.map((w,i)=>(
      <motion.div
        key={i}
        whileHover={{y:-10}}
        className="
          bg-slate-900
          text-white
          border border-slate-700
          rounded-3xl
          overflow-hidden
          shadow-xl
          hover:shadow-2xl
          transition
        "
      >

        {/* Image */}
        <div className="h-60 overflow-hidden">
          <img
            src={w.image}
            className="w-full h-full object-cover hover:scale-110 transition duration-700"
            alt=""
          />
        </div>

        {/* Content */}
        <div className="p-6">

          <h3 className="text-xl font-bold text-white">
            {w.title}
          </h3>

          <div className="flex flex-col gap-2 mt-4 text-gray-300 text-sm">

            <span className="flex items-center gap-2">
              <CalendarDays size={16}/> {w.date}
            </span>

            <span className="flex items-center gap-2">
              <Clock size={16}/> {w.time}
            </span>

          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">

            <button
              onClick={()=>setActivePdf(w.pdf)}
              className="
                w-full
                bg-gradient-to-r from-blue-600 to-red-500
                py-3 rounded-full font-semibold
                flex justify-center gap-2
                hover:scale-105 transition
              "
            >
              Explore <ArrowRight size={18}/>
            </button>

            <button
              className="
                w-full
                border border-white/20
                bg-white/10
                hover:bg-white/20
                py-3 rounded-full font-semibold
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

{/* ================= PDF VIEWER ================= */}
{activePdf && (
  <div className="fixed inset-0 bg-black/80 backdrop-blur flex items-center justify-center z-50">

    <div className="bg-white w-[90%] h-[90%] rounded-xl overflow-hidden relative shadow-2xl">

      <button
        onClick={()=>setActivePdf(null)}
        className="absolute top-4 right-4 bg-red-600 px-4 py-2 rounded text-white hover:bg-red-700 transition"
      >
        Close
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

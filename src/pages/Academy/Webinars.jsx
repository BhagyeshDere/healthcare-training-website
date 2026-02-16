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
      image: "/images/events/international1.jpg",
      pdf: "/pdfs/sample.pdf",
    },
    {
      title: "Advanced Infection Prevention",
      date: "10 Mar 2026",
      time: "5:00 PM IST",
      image: "/images/events/annual1.jpg",
      pdf: "/pdfs/sample.pdf",
    },
  ];

  const past = [
    {
      title: "Sterilization Quality Benchmarking",
      date: "15 Jan 2025",
      time: "4:00 PM IST",
      image: "/images/events/annual2.jpg",
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
      <section className="py-16 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {data.map((w,i)=>(
            <motion.div
              key={i}
              whileHover={{y:-10}}
              className="
                bg-white/10 backdrop-blur-xl
                border border-white/20
                rounded-3xl overflow-hidden
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

                <h3 className="text-xl font-bold">
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
                    "
                  >
                    Explore <ArrowRight size={18}/>
                  </button>

                  <button
                    className="
                      w-full
                      border border-white/30
                      bg-white/10
                      hover:bg-white/20
                      py-3 rounded-full font-semibold
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
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

          <div className="bg-white w-[90%] h-[90%] rounded-xl overflow-hidden relative">

            <button
              onClick={()=>setActivePdf(null)}
              className="absolute top-4 right-4 bg-red-600 px-4 py-2 rounded text-white"
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

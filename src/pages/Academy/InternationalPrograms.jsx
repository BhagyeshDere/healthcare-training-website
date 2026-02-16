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
      image: "/images/academy/excellence1.jpg",
      pdf: "/pdfs/sample.pdf",
      tag: "International"
    },
    {
      title: "Infection Prevention Fellowship",
      duration: "4–6 Months",
      location: "Europe & Asia",
      enrolled: "95+ Professionals",
      image: "/images/academy/excellence2.jpg",
      pdf: "/pdfs/sample.pdf",
      tag: "Fellowship"
    },
    {
      title: "Healthcare Quality & Safety Program",
      duration: "1 Year",
      location: "Global Virtual",
      enrolled: "210+ Professionals",
      image: "/images/academy/excellence3.jpg",
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
<section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50">

  {/* Soft background glows */}
  <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200/40 blur-3xl rounded-full"/>
  <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-red-200/40 blur-3xl rounded-full"/>

  <div className="relative max-w-5xl mx-auto text-center">

    {/* Heading */}
    <h2 className="
      text-4xl md:text-5xl font-extrabold
      bg-gradient-to-r from-blue-700 to-red-500
      bg-clip-text text-transparent
      leading-tight
    ">
      Global Learning Without Borders
    </h2>

    {/* Divider */}
    <div className="w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-blue-600 to-red-500 rounded-full"/>

    {/* DARK GLASS CARD */}
    <div className="
      mt-12
      bg-slate-900/90
      backdrop-blur-xl
      border border-white/10
      shadow-[0_25px_80px_rgba(0,0,0,0.35)]
      rounded-3xl
      p-8 md:p-12
      hover:scale-[1.02]
      transition duration-500
    ">

      <p className="text-gray-200 text-lg leading-relaxed">
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

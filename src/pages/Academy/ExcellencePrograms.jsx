import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Hospital } from "lucide-react";

export default function ExcellencePrograms() {

  const programs = [
    {
      title: "CSSD Excellence Program",
      hospitals: "198 Hospitals Enrolled",
      image: "/images/academy/excellence1.jpg",
      desc: "A flagship VIDA program focused on sterilization quality, workflow optimization and international CSSD benchmarks.",
    },
    {
      title: "Endoscopy Safety & Quality",
      hospitals: "51 Hospitals Enrolled",
      image: "/images/academy/excellence2.jpg",
      desc: "Structured evaluation and improvement framework for endoscopy units ensuring global safety standards.",
    },
    {
      title: "Infection Control Excellence",
      hospitals: "41 Hospitals Enrolled",
      image: "/images/academy/excellence3.jpg",
      desc: "Advanced antimicrobial stewardship and infection prevention programs for safer hospitals.",
    },
  ];

  return (
    <div className="bg-slate-950 text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center">

        <img
          src="/images/academy/excellencehero.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />

        <div className="absolute inset-0 bg-black/60"/>

        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold">
            VIDA Excellence Programs
          </h1>

          <p className="mt-6 text-gray-200 text-lg leading-relaxed">
            Transforming hospitals into centers of excellence through
            structured evaluations, global benchmarks, and continuous
            quality improvement frameworks.
          </p>
        </div>

      </section>

{/* ================= INTRO STRIP ================= */}
<section className="relative py-20 px-6 text-center overflow-hidden">

  {/* Background gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900 to-red-900"/>

  {/* Glow effects */}
  <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"/>
  <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-red-500/20 blur-3xl rounded-full"/>

  {/* Glass container */}
  <div className="
    relative max-w-5xl mx-auto
    bg-white/10 backdrop-blur-xl
    border border-white/20
    rounded-3xl
    p-10 md:p-14
    shadow-[0_20px_60px_rgba(0,0,0,0.4)]
  ">

    {/* Accent line */}
    <div className="w-24 h-1 mx-auto mb-8 bg-gradient-to-r from-blue-400 to-red-400 rounded-full"/>

    <p className="
      text-lg md:text-xl
      leading-relaxed
      text-blue-100
      tracking-wide
    ">
      VIDA Excellence Programs strengthen critical aspects of
      healthcare delivery — sterilization, infection prevention,
      endoscopy safety, and regulatory compliance.
      <br/><br/>
      Hospitals achieving VIDA benchmarks are recognized as
      <span className="
        font-bold
        text-white
        bg-gradient-to-r from-blue-300 to-red-300
        bg-clip-text text-transparent
      ">
        {" "}Centers of Excellence
      </span>,
      setting new standards in patient safety and operational quality.
    </p>

  </div>

</section>



      {/* ================= IMPACT STATS ================= */}
      <section className="py-20 px-6 bg-white text-center">

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">

          {[
            ["200+","Hospitals Improved"],
            ["50+","Expert Auditors"],
            ["25+","Countries Impacted"],
            ["100%","Quality Focus"],
          ].map((s,i)=>(
            <div key={i}>
              <h3 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 to-red-500 bg-clip-text text-transparent">
                {s[0]}
              </h3>
              <p className="text-gray-600 mt-3">{s[1]}</p>
            </div>
          ))}

        </div>

      </section>


      {/* ================= PROGRAM CARDS ================= */}
      <section className="py-24 px-6 bg-slate-950">

        <h2 className="text-center text-4xl md:text-5xl font-bold mb-20">
          Our Flagship Programs
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {programs.map((p,i)=>(
            <motion.div
              key={i}
              initial={{opacity:0,y:40}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              whileHover={{y:-12}}
              className="
                group rounded-3xl overflow-hidden
                bg-white/5 backdrop-blur-xl
                border border-white/10
                shadow-[0_20px_60px_rgba(0,0,0,0.5)]
              "
            >

              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={p.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  alt=""
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
              </div>

              {/* CONTENT */}
              <div className="p-8">

                <h3 className="text-2xl font-bold">
                  {p.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-relaxed">
                  {p.desc}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-blue-400">
                  <Hospital size={18}/>
                  {p.hospitals}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-4 mt-8">

                  <button className="
                    flex-1 py-3
                    bg-gradient-to-r from-blue-600 to-blue-700
                    rounded-full font-semibold
                    hover:scale-105 transition
                  ">
                    Explore
                  </button>

                  <button className="
                    flex-1 py-3
                    bg-gradient-to-r from-red-500 to-red-600
                    rounded-full font-semibold
                    hover:scale-105 transition
                  ">
                    Register
                  </button>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </section>
{/* ================= CTA ================= */}
<section className="py-24 text-center bg-gradient-to-r from-blue-50 via-white to-red-50">

  <h2 className="text-4xl font-bold text-blue-900">
    Become a VIDA Center of Excellence
  </h2>

  <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
    Join leading hospitals that are raising the bar in
    patient safety, sterilization quality and healthcare excellence.
  </p>

  <button className="
    mt-10 px-12 py-4
    bg-gradient-to-r from-blue-600 to-red-500
    text-white
    rounded-full font-semibold
    shadow-lg shadow-blue-200/50
    hover:scale-110 hover:shadow-xl
    transition
  ">
    Apply Now
  </button>

</section>

    </div>
  );
}

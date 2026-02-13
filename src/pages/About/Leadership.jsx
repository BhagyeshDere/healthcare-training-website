import { motion } from "framer-motion";

export default function LeadershipPage() {

  const leaders = [
    {
      name: "Dr. Onkar A. Yadav",
      role: "Director – Infection Prevention & Regulatory Affairs",
      tag: "Clinical Governance & Infection Control",
      img: "/images/leaders/onkar.png",
      text: `Dr. Onkar A. Yadav provides clinical and regulatory leadership to VIDA Life Sciences, bringing deep expertise in Infection Prevention and Control across healthcare environments. His background in pharmacy, pharmacology and medico-legal training supports strong compliance governance and patient safety frameworks.`
    },
    {
      name: "Mr. Dhananjay Sawant",
      role: "Director – Sales & Marketing",
      tag: "Strategy & Market Leadership",
      img: "/images/leaders/dhananjay.png",
      text: `With 25+ years of experience in CSSD and TSSU projects, Mr. Sawant has executed 300+ hospital projects aligned with NABH standards. He drives VIDA’s national growth, hospital consulting, and innovation-driven product expansion.`
    },
    {
      name: "Mr. Sanjay Khandagale",
      role: "Director – Manufacturing & Quality Systems",
      tag: "Manufacturing Excellence",
      img: "/images/leaders/sanjay.png",
      text: `Mr. Khandagale leads VIDA’s manufacturing and quality operations, ensuring durable and compliant medical systems. His expertise in SS 304/316L material standards and process validation strengthens VIDA’s quality-driven production.`
    }
  ];

  return (
<main className="bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-800 overflow-hidden">

{/* ================= HERO ================= */}
<section className="relative min-h-[75vh] md:min-h-[90vh] flex items-center justify-center text-center overflow-hidden">

  <div className="absolute inset-0">
    <img
      src="/images/common/leadership1.jpg"
      alt="Leadership"
      className="w-full h-full object-cover scale-110"
    />

    <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/70"/>
    <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.6))]"/>
  </div>

  <motion.div
    initial={{opacity:0,y:40}}
    animate={{opacity:1,y:0}}
    transition={{duration:1}}
    className="relative z-10 max-w-5xl px-6"
  >

    <span className="inline-block px-6 py-2 mb-6 text-sm bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-blue-200 shadow-lg">
      VIDA Leadership
    </span>

    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight">
      Leadership & Governance
    </h1>

    <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
      Visionary leadership driving sterilization excellence, regulatory compliance and professional healthcare training.
    </p>

    <div className="flex flex-wrap justify-center gap-6 mt-10">
      <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-red-500 text-white rounded-full font-semibold shadow-2xl hover:scale-105 transition">
        Meet Leaders
      </button>

      <button className="px-10 py-4 border border-white/40 text-white rounded-full hover:bg-white/10 transition">
        Contact Board
      </button>
    </div>

  </motion.div>
</section>


{/* ================= IMPACT STRIP ================= */}
<section className="py-20 bg-white/70 backdrop-blur-xl border-y">

  <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">

    {[
      ["300+","Hospitals"],
      ["14+","Years Experience"],
      ["100%","Medical Focus"],
      ["PAN India","Presence"]
    ].map((s,i)=>(
      <div key={i} className="space-y-2">
        <h3 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 to-red-500 bg-clip-text text-transparent">
          {s[0]}
        </h3>
        <p className="text-gray-500">{s[1]}</p>
      </div>
    ))}

  </div>
</section>
{/* ================= PHILOSOPHY ================= */}
<section className="max-w-6xl mx-auto px-6 py-24">

  <motion.div
    initial={{opacity:0, y:40}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.8}}
    viewport={{once:true}}
    className="relative p-[2px] rounded-3xl bg-gradient-to-r from-blue-600/40 via-purple-500/30 to-red-500/40"
  >

    {/* outer glow */}
    <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/20 blur-3xl rounded-full"/>
    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-600/20 blur-3xl rounded-full"/>

    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-xl rounded-3xl p-10 md:p-16 shadow-2xl text-white overflow-hidden">

      {/* subtle inner glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_40%)]"/>

      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
        Our Leadership Philosophy
      </h2>

      <p className="mt-6 text-lg text-gray-300 leading-relaxed">
        VIDA leadership is built on clinical safety, regulatory precision and operational excellence.
        We ensure international standards while driving innovation and education.
      </p>

      <div className="flex flex-wrap gap-6 mt-10 text-gray-300 font-medium">

        {[
          "Patient First",
          "Compliance Driven",
          "Innovation Focused"
        ].map((item,i)=>(
          <motion.span
            key={i}
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            transition={{delay:i*0.2}}
            className="px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            ✔ {item}
          </motion.span>
        ))}

      </div>

    </div>

  </motion.div>
</section>


{/* ================= LEADERS ================= */}
<section className="max-w-7xl mx-auto px-6 pb-28">

  <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-20">
    Meet Our Directors
  </h2>

  <div className="space-y-28">

{leaders.map((l,i)=>(
<motion.div
key={i}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
className={`grid md:grid-cols-2 gap-14 items-center`}
>

{/* IMAGE */}
<div className={`relative group ${i%2===1 ? "md:order-2" : ""}`}>
  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 to-red-500/30 blur-3xl opacity-30"/>
  <img
    src={l.img}
    className="relative rounded-3xl shadow-2xl w-full object-cover"
  />
</div>

{/* TEXT */}
<div className={`${i%2===1 ? "md:order-1" : ""}`}>
  <p className="text-sm uppercase text-blue-600 tracking-widest">{l.tag}</p>
  <h3 className="text-3xl font-bold mt-2 text-blue-900">{l.name}</h3>
  <p className="text-gray-500 mt-2">{l.role}</p>

  <p className="mt-6 text-gray-600 leading-relaxed">{l.text}</p>

  <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-700 to-red-500 text-white rounded-full shadow-lg hover:scale-105 transition">
    View Profile →
  </button>
</div>

</motion.div>
))}

  </div>
</section>
{/* ================= CORE VALUES ================= */}
<section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50">

  {/* soft background glow */}
  <div className="absolute -top-16 -left-16 w-72 h-72 bg-blue-200/40 blur-3xl rounded-full"/>
  <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-red-200/40 blur-3xl rounded-full"/>

  <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-16 relative z-10">
    Core Leadership Values
  </h2>

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 relative z-10">

    {[
      ["Integrity","Ethical healthcare leadership"],
      ["Excellence","High quality standards"],
      ["Accountability","Responsible governance"]
    ].map((v,i)=>(
      <div
        key={i}
        className="
          group relative
          bg-white/60 backdrop-blur-2xl
          p-12 rounded-3xl
          shadow-[0_15px_50px_rgba(0,0,0,0.08)]
          text-center
          hover:-translate-y-3
          hover:shadow-2xl
          transition
          border border-white/50
        "
      >
        {/* hover glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/0 to-red-500/0 group-hover:from-blue-600/10 group-hover:to-red-500/10 transition"/>

        <h3 className="text-2xl font-bold text-blue-900 relative z-10">
          {v[0]}
        </h3>

        <p className="text-gray-600 mt-3 relative z-10">
          {v[1]}
        </p>
      </div>
    ))}

  </div>
</section>


{/* ================= GOVERNANCE ================= */}
<section className="relative py-28 text-white text-center overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950">

  {/* premium gradient glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/20 blur-3xl rounded-full"/>
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/20 blur-3xl rounded-full"/>

  <div className="max-w-4xl mx-auto px-6 relative z-10">

    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
      Collective Governance Approach
    </h2>

    <p className="mt-6 text-blue-200 leading-relaxed text-lg">
      End-to-end governance from infection control to manufacturing and compliance.
    </p>

  </div>

</section>

{/* ================= CTA ================= */}
<section className="relative py-24 text-center overflow-hidden bg-gradient-to-b from-white to-blue-50">

  {/* subtle glow */}
  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-200/30 blur-3xl rounded-full"/>
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-red-200/30 blur-3xl rounded-full"/>

  <div className="relative z-10">

    <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
      Partner with a Trusted Healthcare Leader
    </h2>

    <p className="mt-4 text-gray-600 text-lg">
      Discover how VIDA leadership drives safer hospitals.
    </p>

    <button className="
      mt-10
      px-12 py-5
      bg-gradient-to-r from-blue-600 to-red-500
      text-white
      rounded-full
      shadow-[0_10px_30px_rgba(0,0,0,0.15)]
      hover:scale-110
      hover:shadow-2xl
      transition
      font-semibold
      tracking-wide
    ">
      Contact Leadership Team
    </button>

  </div>

</section>


</main>
);
}

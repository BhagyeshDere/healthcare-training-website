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
    <main className="bg-[#F8FAFC] text-gray-800 overflow-hidden">

{/* ================= HERO ================= */}
<section className="relative min-h-[75vh] md:min-h-[90vh] flex items-center justify-center text-center">

  <div className="absolute inset-0">
    <img
      src="/images/common/leadership.png"
      alt="Leadership"
      className="w-full h-full object-cover scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"/>
  </div>

  <motion.div
    initial={{opacity:0,y:40}}
    animate={{opacity:1,y:0}}
    transition={{duration:1}}
    className="relative z-10 max-w-5xl px-6"
  >

    <span className="inline-block px-6 py-2 mb-6 text-sm bg-white/10 backdrop-blur border border-white/20 rounded-full text-blue-200">
      VIDA Leadership
    </span>

    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight">
      Leadership & Governance
    </h1>

    <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
      Visionary leadership driving sterilization excellence, regulatory compliance and professional healthcare training.
    </p>

    <div className="flex flex-wrap justify-center gap-6 mt-10">
      <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-red-500 text-white rounded-full font-semibold shadow-xl hover:scale-105 transition">
        Meet Leaders
      </button>

      <button className="px-10 py-4 border border-white/40 text-white rounded-full hover:bg-white/10 transition">
        Contact Board
      </button>
    </div>

  </motion.div>
</section>


{/* ================= NEW: LEADERSHIP IMPACT STRIP ================= */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

    {[
      ["300+","Hospitals"],
      ["14+","Years Experience"],
      ["100%","Medical Focus"],
      ["PAN India","Presence"]
    ].map((s,i)=>(
      <div key={i}>
        <h3 className="text-4xl md:text-5xl font-extrabold text-blue-900">
          {s[0]}
        </h3>
        <p className="text-gray-500 mt-2">{s[1]}</p>
      </div>
    ))}

  </div>
</section>


{/* ================= PHILOSOPHY ================= */}
<section className="max-w-6xl mx-auto px-6 py-20">

  <div className="p-[2px] rounded-3xl bg-gradient-to-r from-blue-600/40 to-red-500/40">

    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 md:p-14">

      <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
        Our Leadership Philosophy
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-relaxed">
        VIDA leadership is built on clinical safety, regulatory precision and operational excellence.
        We ensure international standards while driving innovation and education.
      </p>

      <div className="flex flex-wrap gap-6 mt-8 text-gray-500">
        <span>✔ Patient First</span>
        <span>✔ Compliance Driven</span>
        <span>✔ Innovation Focused</span>
      </div>

    </div>

  </div>
</section>


{/* ================= LEADERS ================= */}
<section className="max-w-7xl mx-auto px-6 pb-28">

  <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-20">
    Meet Our Directors
  </h2>

  <div className="space-y-24">

    {leaders.map((l,i)=>(
      <motion.div
        key={i}
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        className={`grid md:grid-cols-2 gap-12 items-center ${i%2 && "md:flex-row-reverse"}`}
      >

        <div className="relative group">
          <div className="absolute -inset-3 bg-gradient-to-r from-blue-600/30 to-red-500/30 blur-2xl opacity-30"/>
          <img src={l.img} className="rounded-3xl shadow-xl"/>
        </div>

        <div>
          <p className="text-sm uppercase text-blue-600 tracking-widest">{l.tag}</p>
          <h3 className="text-3xl font-bold mt-2 text-blue-900">{l.name}</h3>
          <p className="text-gray-500 mt-2">{l.role}</p>

          <p className="mt-6 text-gray-600 leading-relaxed">{l.text}</p>

          <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-700 to-red-500 text-white rounded-full">
            View Profile →
          </button>
        </div>

      </motion.div>
    ))}

  </div>
</section>


{/* ================= NEW: CORE VALUES ================= */}
<section className="py-24 bg-gradient-to-br from-blue-50 to-red-50">

  <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">
    Core Leadership Values
  </h2>

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

    {[
      ["Integrity","Ethical healthcare leadership"],
      ["Excellence","High quality standards"],
      ["Accountability","Responsible governance"]
    ].map((v,i)=>(
      <div key={i} className="bg-white p-10 rounded-3xl shadow-xl text-center hover:-translate-y-2 transition">
        <h3 className="text-2xl font-bold text-blue-900">{v[0]}</h3>
        <p className="text-gray-600 mt-3">{v[1]}</p>
      </div>
    ))}

  </div>

</section>


{/* ================= GOVERNANCE ================= */}
<section className="py-28 bg-gradient-to-br from-blue-950 to-slate-900 text-white text-center">

  <div className="max-w-4xl mx-auto px-6">

    <h2 className="text-4xl md:text-5xl font-bold">
      Collective Governance Approach
    </h2>

    <p className="mt-6 text-blue-200 leading-relaxed">
      End-to-end governance from infection control to manufacturing and compliance.
    </p>

  </div>

</section>


{/* ================= CTA ================= */}
<section className="py-24 text-center">

  <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
    Partner with a Trusted Healthcare Leader
  </h2>

  <p className="mt-4 text-gray-600">
    Discover how VIDA leadership drives safer hospitals.
  </p>

  <button className="mt-8 px-10 py-4 bg-gradient-to-r from-blue-600 to-red-500 text-white rounded-full shadow-lg">
    Contact Leadership Team
  </button>

</section>

</main>
);
}

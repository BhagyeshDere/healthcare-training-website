import { motion } from "framer-motion";

export default function JourneySection() {

  const data = [
    {year:"2011", title:"Foundation",
     text:"Vida Life Sciences Pvt Ltd. was launched by Dr. Onkar Yadav, Mr. Dhananjay Sawant & Mr. Sanjay Khandagale."},

    {year:"2012", title:"Operations Start",
     text:"Started hospital equipment & furniture supply."},

    {year:"2013", title:"Manufacturing",
     text:"Started in-house manufacturing of CSSD, OT equipment and hospital furniture."},

    {year:"2014", title:"Consultancy",
     text:"Started designing new hospital project services & biomedical consultancy."},

    {year:"2015", title:"Global Expansion",
     text:"Vida reached almost every district of Maharashtra and expanded to Karnataka, Telangana, MP, Gujarat, Muscat & Malaysia."},

    {year:"2016", title:"R&D Launch",
     text:"Started own Research & Development department to develop new CSSD equipment."},

    {year:"2017", title:"Awarded",
     text:"Received Fastest Growing Indian Company Excellence Award at International Achievers Conference."},

    {year:"2018", title:"Innovation",
     text:"Developed Automatic Bed Pan Washer Disinfector with A0 value calculation."},

    {year:"2019", title:"International Project",
     text:"First international CSSD setup in South Africa – Congo."},

    {year:"2020", title:"COVID Resilience",
     text:"Successfully completed installations in Manipur–Imphal despite pandemic challenges."},

    {year:"2021", title:"Government Projects",
     text:"Executed many successful CSSD projects in government sector."},

    {year:"2022", title:"New Product",
     text:"Added double-door instrument washer cum dryer."},

    {year:"2023", title:"Scale Up",
     text:"Continuing many CSSD projects including government medical colleges."},

    {year:"2024", title:"Research Published",
     text:"Published A0 concept research in international journal and developing ICU & Dental products."},

    {year:"2025", title:"Patent & Leadership",
     text:"Received first patent, launched advanced sterilizers, and leadership milestones achieved."},
  ];

  return (
    <>{/* ================= HERO SECTION ================= */}
<section className="relative min-h-[75vh] sm:min-h-[85vh] md:min-h-[95vh] lg:min-h-screen flex items-center justify-center text-center text-white overflow-hidden">

  {/* Background Image */}
  <img
    src="/images/common/journey1.png"
    alt="VIDA Journey"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Softer overlays */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"/>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.45))]"/>

  {/* Content */}
  <div className="relative z-10 max-w-4xl px-4 sm:px-6">

    <span className="inline-block mb-5 px-5 py-2 text-xs sm:text-sm uppercase bg-white/10 backdrop-blur border border-white/20 rounded-full text-blue-200">
      VIDA Life Sciences
    </span>

    <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
      Our Journey of{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">
        Excellence & Innovation
      </span>
    </h1>

    <p className="mt-6 text-sm sm:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
      A legacy of healthcare innovation, sterilization leadership,
      and patient-safety excellence since 2011.
    </p>

  </div>
</section>
{/* ================= TIMELINE SECTION ================= */}
<section className="relative py-20 sm:py-28 md:py-36 overflow-hidden">

  {/* ===== BACKGROUND (UNCHANGED LIGHT) ===== */}
  <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-blue-50 to-slate-100"/>

  {/* Premium glows */}
  <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/20 blur-3xl rounded-full"/>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-400/20 blur-3xl rounded-full"/>

  {/* Heading */}
  <h2 className="relative z-10 text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 mb-20 sm:mb-28">
    Our Journey
  </h2>

  {/* Timeline Container */}
  <div className="relative max-w-6xl mx-auto px-4 sm:px-6 space-y-20 sm:space-y-28">

    {/* Center Line (desktop) */}
    <div className="hidden md:block absolute left-1/2 top-0 w-[4px] h-full 
                    bg-gradient-to-b from-blue-600 via-blue-400 to-red-500 
                    shadow-[0_0_20px_rgba(59,130,246,0.4)]"/>

    {/* Left Line (mobile) */}
    <div className="md:hidden absolute left-4 top-0 w-[4px] h-full 
                    bg-gradient-to-b from-blue-600 via-blue-400 to-red-500"/>

    {data.map((item,i)=>(
      <div key={i} className="relative">

        {/* BIG YEAR WATERMARK */}
        <span className={`
          absolute 
          text-[70px] sm:text-[110px] md:text-[160px]
          font-extrabold 
          bg-gradient-to-r from-blue-300/40 to-red-300/40
          bg-clip-text text-transparent 
          select-none opacity-40
          ${i%2===0 ? "md:-left-16" : "md:-right-16"}
          -top-10 md:top-0
        `}>
          {item.year}
        </span>

        {/* Timeline Dot */}
        <div className="
          absolute left-4 md:left-1/2 md:-translate-x-1/2
          w-6 h-6
          bg-white border-4 border-blue-500 
          rounded-full z-10
          shadow-[0_0_15px_rgba(59,130,246,0.6)]
        "/>

        {/* ================= DARK CARD ================= */}
        <motion.div
          initial={{opacity:0, y:50}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:.6}}
          viewport={{once:true}}
          whileHover={{scale:1.05}}
          className={`
            ml-12 md:ml-0
            w-auto md:w-[46%]
            p-6 sm:p-8
            rounded-2xl
            bg-gradient-to-br from-slate-900 to-slate-800
            text-white
            border border-white/10
            shadow-[0_20px_50px_rgba(0,0,0,0.35)]
            hover:shadow-[0_30px_70px_rgba(0,0,0,0.5)]
            transition duration-300
            backdrop-blur-xl
            ${i%2===0 
              ? "md:ml-auto md:text-left" 
              : "md:mr-auto md:text-right"}
          `}
        >

          <p className="text-red-400 font-semibold tracking-widest uppercase text-xs sm:text-sm">
            {item.title}
          </p>

          <p className="text-gray-300 mt-4 leading-relaxed text-sm sm:text-base">
            {item.text}
          </p>

          {/* Accent Line */}
          <div className={`
            mt-5 h-[4px] w-20
            bg-gradient-to-r from-blue-500 to-red-500
            rounded-full
            shadow-md
            ${i%2===0 ? "" : "md:ml-auto"}
          `}/>

        </motion.div>

      </div>
    ))}

  </div>
</section>

    </>
  );
}

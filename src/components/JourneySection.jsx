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
    <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">

      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 
        bg-gradient-to-b 
        from-blue-100 
        via-slate-100 
        to-blue-200"/>

      {/* Soft glows */}
      <div className="absolute -top-24 -left-24 
        w-72 sm:w-96 h-72 sm:h-96 
        bg-blue-300/30 blur-3xl rounded-full"/>

      <div className="absolute bottom-0 right-0 
        w-72 sm:w-96 h-72 sm:h-96 
        bg-red-300/30 blur-3xl rounded-full"/>

      {/* Heading */}
      <h2 className="relative z-10 text-center 
        text-3xl sm:text-4xl md:text-5xl 
        font-extrabold text-blue-900 
        mb-16 sm:mb-24">
        Our Journey
      </h2>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-24">

        {/* Center Line (desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 w-[3px] h-full 
                        bg-gradient-to-b from-blue-600 via-blue-400 to-red-500"/>

        {/* Left Line (mobile) */}
        <div className="md:hidden absolute left-4 top-0 w-[3px] h-full 
                        bg-gradient-to-b from-blue-600 via-blue-400 to-red-500"/>

        {data.map((item,i)=>(
          <div key={i} className="relative">

            {/* BIG YEAR WATERMARK */}
            <span className={`
              absolute 
              text-[60px] sm:text-[100px] md:text-[150px]
              font-extrabold 
              bg-gradient-to-r from-blue-300 to-red-300 
              bg-clip-text text-transparent 
              select-none opacity-30
              ${i%2===0 ? "md:-left-10" : "md:-right-10"}
              -top-6 md:top-0
            `}>
              {item.year}
            </span>

            {/* Timeline Dot */}
            <div className="
              absolute 
              left-4 md:left-1/2 
              md:-translate-x-1/2
              w-5 h-5 sm:w-6 sm:h-6
              bg-white border-4 
              border-blue-500 rounded-full 
              z-10 shadow-md
            "/>

            {/* Content Card */}
            <motion.div
              initial={{opacity:0, y:50}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:.6}}
              viewport={{once:true}}
              whileHover={{scale:1.03}}
              className={`
                ml-12 md:ml-0
                w-auto md:w-[46%]
                p-5 sm:p-6 
                rounded-xl
                bg-white/95 backdrop-blur
                shadow-lg border border-gray-200
                ${i%2===0 
                  ? "md:ml-auto md:text-left" 
                  : "md:mr-auto md:text-right"}
              `}
            >

              <p className="text-red-500 font-semibold 
                tracking-widest uppercase 
                text-xs sm:text-sm">
                {item.title}
              </p>

              <p className="text-gray-700 
                mt-3 leading-relaxed
                text-sm sm:text-base">
                {item.text}
              </p>

              {/* Accent Line */}
              <div className={`
                mt-4 h-[3px] w-16 sm:w-20 
                bg-gradient-to-r from-blue-600 to-red-500
                rounded-full
                ${i%2===0 ? "" : "md:ml-auto"}
              `}/>

            </motion.div>

          </div>
        ))}

      </div>

    </section>
  );
}

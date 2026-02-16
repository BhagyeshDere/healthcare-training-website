import { motion } from "framer-motion";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";

export default function AnnualEvents() {

  const events = [
    {
      title: "VIDA Sterilization Summit 2026",
      date: "12–13 March 2026",
      location: "Mumbai, India",
      image: "/images/events/annual1.jpg",
      desc: "A national summit focused on CSSD excellence, infection control and hospital sterilization best practices."
    },
    {
      title: "VIDA Healthcare Innovation Expo",
      date: "22–24 July 2026",
      location: "Bangalore, India",
      image: "/images/events/annual2.jpg",
      desc: "Showcasing advanced sterilization equipment, hospital solutions and VIDA’s latest innovations."
    },
    {
      title: "VIDA Global CSSD Conference",
      date: "10–11 November 2026",
      location: "Dubai, UAE",
      image: "/images/events/annual.jpg",
      desc: "International conference connecting global healthcare leaders in sterilization and patient safety."
    }
  ];

  return (
    <main className="bg-slate-50 overflow-x-hidden">
{/* ================= HERO ================= */}
<section className="relative min-h-[75vh] md:min-h-[90vh] lg:min-h-[100vh] flex items-center justify-center text-white text-center overflow-hidden">

  <img
    src="/images/events/annualevent.jpg"
    alt=""
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Soft black overlay */}
  <div className="absolute inset-0 bg-black/40"/>

  {/* Radial shadow for focus */}
  <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_35%,rgba(0,0,0,0.65))]"/>

  <motion.div
    initial={{opacity:0,y:40}}
    animate={{opacity:1,y:0}}
    transition={{duration:1}}
    className="relative z-10 px-6 max-w-4xl"
  >

    <span className="px-6 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-sm text-blue-200">
      VIDA Life Sciences
    </span>

    <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-lg">
      VIDA Annual Events
    </h1>

    <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto drop-shadow-md">
      Bringing together healthcare leaders, CSSD experts and
      hospital professionals to advance sterilization excellence.
    </p>

  </motion.div>
</section>



      {/* ================= VIDA EVENTS INTRO ================= */}
<section className="relative py-16 sm:py-20 md:py-28 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">

  {/* soft background glows */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-400/20 blur-3xl rounded-full"/>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-400/20 blur-3xl rounded-full"/>

  <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">

    {/* heading */}
    <div className="text-center mb-10 md:mb-14">
      <span className="inline-block px-5 py-2 text-xs sm:text-sm font-semibold tracking-wide uppercase rounded-full bg-blue-100 text-blue-700">
        VIDA Flagship Events
      </span>

      <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800">
        Advancing Healthcare Through{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-red-500">
          Knowledge & Innovation
        </span>
      </h2>
    </div>

    {/* content card */}
    <div className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-14 space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">

      <p>
        <strong>VIDA Life Sciences conducts four flagship events — VIDA CON,
        VIDA TECH, VIDA DiagnostiCON and VIDA SAKCON</strong> — dedicated to
        continuous healthcare quality improvement, healthcare technology
        advancements, quality promotion, and capacity building in the
        diagnostic aspects of healthcare delivery.
      </p>

      <p>
        <strong>VIDA SAKCON</strong> is our new initiative focusing on
        sensitizing healthcare administration students to promote patient
        safety and quality.
      </p>

      <p>
        These events are managed and curated by organizing committees under
        the able guidance of VIDA Life Sciences’ Patrons and Governing
        Committee.
      </p>

      <p>
        A specific theme is selected every year, bringing together eminent
        national and international speakers from industry, academia, and
        government on a common platform to share best practices developed and
        implemented across the world.
      </p>

      <p className="font-semibold text-slate-800">
        These events have become <span className="text-blue-700">‘must-attend’</span>{" "}
        gatherings for all stakeholders in healthcare delivery.
      </p>

    </div>

  </div>
</section>
{/* ================= INTRO + EVENTS GRID ================= */}
<section
  className="
    relative py-20 px-6
    overflow-hidden text-white
    bg-gradient-to-br from-blue-950 via-slate-900 to-red-950
  "
>

  {/* Background Glows */}
  <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full"/>
  <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-600/20 blur-3xl rounded-full"/>

  <div className="relative z-10">

    {/* ===== INTRO ===== */}
    <div className="text-center max-w-5xl mx-auto">

      <h2 className="
        text-3xl md:text-4xl font-bold
        bg-gradient-to-r from-blue-400 to-red-400
        bg-clip-text text-transparent
      ">
        Elevating Healthcare Through Knowledge & Innovation
      </h2>

      <p className="mt-6 text-blue-100 leading-relaxed max-w-3xl mx-auto">
        VIDA Annual Events are designed to empower hospitals,
        infection control teams and healthcare professionals with
        cutting-edge knowledge, compliance frameworks and global
        sterilization standards.
      </p>

    </div>


    {/* ===== EVENTS GRID ===== */}
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 mt-16">

      {events.map((e,i)=>(
        <motion.div
          key={i}
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          whileHover={{y:-10}}
          className="
            bg-white/95 backdrop-blur-xl
            rounded-3xl overflow-hidden
            shadow-[0_20px_60px_rgba(0,0,0,0.25)]
            hover:shadow-[0_25px_80px_rgba(0,0,0,0.4)]
            transition duration-300
            border border-white/10
          "
        >

          {/* Image */}
          <div className="h-56 overflow-hidden">
            <img
              src={e.image}
              className="w-full h-full object-cover hover:scale-110 transition duration-700"
              alt=""
            />
          </div>

          {/* Content */}
          <div className="p-8">

            <h3 className="text-xl font-bold text-blue-900">
              {e.title}
            </h3>

            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              {e.desc}
            </p>

            <div className="flex items-center gap-3 mt-6 text-gray-500 text-sm">
              <CalendarDays size={16}/> {e.date}
            </div>

            <div className="flex items-center gap-3 mt-2 text-gray-500 text-sm">
              <MapPin size={16}/> {e.location}
            </div>

            <button className="
              mt-8 w-full
              bg-gradient-to-r from-blue-600 to-red-500
              text-white py-3 rounded-full font-semibold
              flex items-center justify-center gap-2
              hover:scale-105 hover:shadow-lg
              transition duration-300
            ">
              View Details <ArrowRight size={18}/>
            </button>

          </div>

        </motion.div>
      ))}

    </div>

  </div>

</section>


{/* ================= CTA ================= */}
<section className="relative py-24 overflow-hidden text-center">

  {/* soft brand background */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-red-50"/>

  {/* glow accents */}
  <div className="absolute -top-16 -left-16 w-72 h-72 bg-blue-200/40 blur-3xl rounded-full"/>
  <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-red-200/40 blur-3xl rounded-full"/>

  <div className="relative z-10 max-w-4xl mx-auto px-6">

    {/* badge */}
    <span className="inline-block px-6 py-2 mb-6 text-sm font-semibold tracking-wide text-blue-700 bg-blue-100 rounded-full">
      VIDA Life Sciences Events
    </span>

    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight">
      Join VIDA Events &{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-red-500">
        Stay Ahead
      </span>
    </h2>

    <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
      Participate in VIDA conferences and training programs to stay
      updated with the latest sterilization standards,
      compliance practices, and healthcare innovations.
    </p>

    {/* button */}
    <button className="
      mt-12
      px-10 py-4
      bg-gradient-to-r from-blue-600 to-red-500
      text-white
      rounded-full
      font-semibold
      shadow-lg
      hover:shadow-2xl
      hover:scale-105
      transition
      duration-300
    ">
      Register for Upcoming Events
    </button>

  </div>

</section>

    </main>
  );
}

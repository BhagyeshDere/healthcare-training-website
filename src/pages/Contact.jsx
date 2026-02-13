import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="w-full overflow-x-hidden bg-gradient-to-br from-blue-50 via-white to-red-50">

{/* ===== HERO WITH IMAGE ===== */}
<div className="relative min-h-[420px] md:h-[560px] flex items-center justify-center text-center text-white overflow-hidden">

  <img
    src="/images/common/backgrounds/contact-hero.png"
    alt="vida-contact"
    className="absolute inset-0 w-full h-full object-cover scale-110"
  />

  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"/>
  <div className="absolute inset-0 bg-black/30"/>

  <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"/>
  <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-500/20 blur-3xl rounded-full"/>

  <div className="relative z-10 max-w-3xl px-4 sm:px-6">

    <span className="bg-white/10 backdrop-blur-xl px-5 py-2 rounded-full text-xs sm:text-sm tracking-widest border border-white/30 shadow-lg">
      ● VIDA LIFE SCIENCES
    </span>

    <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mt-6 leading-tight">
      Healthcare Training for a{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">
        Safer Tomorrow
      </span>
    </h1>

    <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-gray-200 leading-relaxed">
      VIDA Life Sciences empowers healthcare professionals through
      certified training programs, quality improvement initiatives,
      and patient safety education.
    </p>

  </div>
</div>


{/* ===== MAIN GRID ===== */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

  <div className="space-y-8 md:space-y-10">

    <InfoCard
      title="TRAINING PROGRAMS"
      color="from-blue-700 to-blue-500"
      email="sales@vidalife.in"
      phones={["+91 9689491632","+91 9922960542"]}
    />

    <InfoCard
      title="MEMBERSHIP"
      color="from-teal-600 to-cyan-500"
      email="sales@vidalife.in"
      phones={["+91 9822056593"]}
    />

    <InfoCard
      title="ACCOUNTS"
      color="from-purple-600 to-pink-500"
      email="sales@vidalife.in"
      phones={["+91 9689491632"]}
    />

    <InfoCard
      title="EVENTS"
      color="from-red-600 to-orange-500"
      email="sales@vidalife.in"
      phones={["+91 9922960542"]}
    />

  </div>


{/* RIGHT FORM */}
<div className="bg-white/70 backdrop-blur-2xl p-6 sm:p-10 md:p-12 rounded-3xl shadow-2xl border border-white/60">

  <h3 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 text-gray-800">
    Enquire Now
  </h3>

  <form className="space-y-5 md:space-y-6">

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
      <Input placeholder="First Name"/>
      <Input placeholder="Last Name"/>
    </div>

    <Input placeholder="Email"/>
    <Input placeholder="Phone Number"/>

    <select className="w-full border-b border-gray-300 py-3 outline-none bg-transparent focus:border-blue-600">
      <option>Select Subject</option>
      <option>Training</option>
      <option>Membership</option>
      <option>Support</option>
    </select>

    <textarea
      placeholder="Message"
      rows={4}
      className="w-full border-b border-gray-300 py-3 outline-none bg-transparent focus:border-blue-600"
    />

    <button className="w-full sm:w-auto bg-gradient-to-r from-[#1E3A8A] to-[#EF4444] text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition shadow-xl">
      Submit <Send size={18}/>
    </button>

  </form>
</div>
</div>


{/* ADDRESSES */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 md:pb-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

  <AddressCard
    title="Office Address"
    address={`4, Shriyash, Attrey Society,
Opp. Sapna Hotel, Gokhalenagar Road,
Pune 411016`}
  />

  <AddressCard
    title="Factory Address"
    address={`Vida Life Science Factory,
Gujarwadi Rd, Katrajnagar,
Katraj, Pune 411046`}
  />

</div>


{/* MAP */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10">

  <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/40">

    <div className="absolute top-4 left-4 z-10 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full text-xs sm:text-sm text-white border border-white/30 shadow">
      📍 Visit VIDA Life Sciences
    </div>

    <div className="h-[280px] sm:h-[360px] md:h-[420px] w-full">
      <iframe
        title="vida-map"
        src="https://maps.google.com/maps?q=Pune&t=&z=11&ie=UTF8&iwloc=&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
      />
    </div>

    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"/>
  </div>
</div>

<div className="h-12 sm:h-20 bg-gradient-to-b from-white to-blue-50"/>

</section>
  );
}


/* COMPONENTS */

function InfoCard({ title, color, email, phones }) {
  return (
    <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-white/50 hover:-translate-y-1 transition">

      <div className={`bg-gradient-to-r ${color} text-white px-6 py-4 font-semibold tracking-wide`}>
        {title}
      </div>

      <div className="p-5 md:p-6 space-y-3 md:space-y-4 text-gray-700 text-sm sm:text-base">

        <p className="flex items-center gap-3">
          <Mail size={18}/> {email}
        </p>

        {phones.map((p,i)=>(
          <p key={i} className="flex items-center gap-3">
            <Phone size={18}/> {p}
          </p>
        ))}

      </div>
    </div>
  );
}

function AddressCard({ title, address }) {
  return (
    <div className="bg-white/70 backdrop-blur-xl p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-white/50 hover:-translate-y-1 transition">

      <h4 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2 text-gray-800">
        <MapPin/> {title}
      </h4>

      <p className="text-gray-600 whitespace-pre-line text-sm sm:text-base">
        {address}
      </p>
    </div>
  );
}

function Input({ placeholder }) {
  return (
    <input
      placeholder={placeholder}
      className="w-full border-b border-gray-300 py-3 outline-none focus:border-blue-600 bg-transparent text-sm sm:text-base"
    />
  );
}

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {

  const phoneNumber = "919999999999"; // 👉 replace with your number
  const message = "Hello VIDA Life Sciences, I would like to know more.";

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">

      {/* Tooltip */}
      <div className="
        absolute bottom-16 right-0
        bg-slate-900 text-white text-sm
        px-4 py-2 rounded-lg
        opacity-0 group-hover:opacity-100
        translate-y-2 group-hover:translate-y-0
        transition
        shadow-lg
        whitespace-nowrap
      ">
        Chat with VIDA
      </div>

      {/* Glow Ring */}
      <span className="
        absolute inset-0
        rounded-full
        bg-green-500
        opacity-75
        animate-ping
      "></span>

      {/* Button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="
          relative
          flex items-center justify-center
          w-16 h-16
          bg-gradient-to-r from-green-500 to-emerald-600
          text-white text-3xl
          rounded-full
          shadow-2xl
          hover:scale-110
          hover:shadow-green-500/40
          transition duration-300
        "
      >
        <FaWhatsapp />
      </a>

    </div>
  );
}

import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat"; // ✅ ADD THIS

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* ✅ WhatsApp Floating Button */}
      <WhatsAppFloat />

    </div>
  );
}

import { Phone, Mail } from "lucide-react";
import {
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

function TopBar() {
  return (
    <div className="bg-[#252B42] text-white text-xs md:text-sm font-semibold px-4 md:px-9 h-[50px] flex items-center justify-between">
      
      {/* Left */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Phone size={14} />
          <span>(225) 555-0118</span>
        </div>

        <div className="hidden sm:flex items-center gap-2">
          <Mail size={14} />
          <span>michelle.rivera@example.com</span>
        </div>
      </div>

      {/* Center */}
      <div className="hidden md:block text-center">
        Follow Us and get a chance to win 80% off
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
  <span className="hidden sm:block">Follow Us :</span>
  <FaInstagram size={14} />
  <FaYoutube size={14} />
  <FaFacebook size={14} />
  <FaTwitter size={14} />
</div>
    </div>
  );
}

export default TopBar;
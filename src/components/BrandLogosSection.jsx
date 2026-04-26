import {
  SiLyft,
  SiStripe,
  SiReddit,
} from "react-icons/si";

import { FaAws } from "react-icons/fa";

function BrandLogosSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between gap-10 flex-wrap text-[#737373] opacity-70">
        
        {/* Fake brand */}
        <span className="text-3xl font-bold italic">hooli</span>

        <SiLyft className="text-5xl" />

        {/* placeholder */}
        <span className="black text-4xl">🌿</span>

        <SiStripe className="text-5xl" />

        <FaAws className="text-5xl" />

        <SiReddit className="text-5xl" />

      </div>
    </section>
  );
}

export default BrandLogosSection;
import React from "react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";
import BrandLogosSection from "../components/BrandLogosSection";

function AboutPage() {
  return (
    <main>
      <section className="max-w-[1120px] mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="text-sm font-bold text-[#252B42]">ABOUT COMPANY</p>

            <h1 className="text-4xl md:text-6xl font-bold text-[#252B42] mt-8">
              ABOUT US
            </h1>

            <p className="text-lg md:text-xl text-[#737373] mt-8 leading-8 max-w-[430px] mx-auto lg:mx-0">
              We know how large objects will act, but things on a small scale
            </p>

            <button className="mt-8 bg-[#23A6F0] text-white px-9 py-4 rounded text-sm font-bold">
              Get Quote Now
            </button>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute w-[320px] h-[320px] md:w-[480px] md:h-[480px] bg-[#FFE9EA] rounded-full top-6 right-4 md:right-0" />

            <div className="absolute w-16 h-16 bg-[#FFE9EA] rounded-full top-0 left-8 md:left-0" />
            <div className="absolute w-3 h-3 bg-[#977DF4] rounded-full top-28 right-0" />
            <div className="absolute w-4 h-4 bg-[#977DF4] rounded-full bottom-24 left-10" />
            <div className="absolute w-8 h-8 bg-[#FFE9EA] rounded-full top-44 right-2" />

            <img
              src="https://picsum.photos/520/620?random=about"
              alt="About us"
              className="relative z-10 w-full max-w-[460px] h-[520px] object-cover object-top rounded-b-full"
            />
          </div>
        </div>
        <section className="max-w-[1120px] mx-auto px-6 py-16 md:py-24">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
    
    {/* LEFT */}
    <div>
      <p className="text-sm font-bold text-[#E74040]">
        Problems trying
      </p>

      <h2 className="text-2xl md:text-3xl font-bold text-[#252B42] mt-4 leading-9 max-w-[420px]">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
      </h2>
    </div>

    {/* RIGHT */}
    <div>
      <p className="text-sm md:text-base text-[#737373] leading-7 max-w-[500px]">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics
      </p>
    </div>

  </div>

  {/* STATS */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16 text-center">
    
    <div>
      <h3 className="text-4xl md:text-5xl font-bold text-[#252B42]">
        15K
      </h3>
      <p className="text-sm font-bold text-[#737373] mt-3">
        Happy Customers
      </p>
    </div>

    <div>
      <h3 className="text-4xl md:text-5xl font-bold text-[#252B42]">
        150K
      </h3>
      <p className="text-sm font-bold text-[#737373] mt-3">
        Monthly Visitors
      </p>
    </div>

    <div>
      <h3 className="text-4xl md:text-5xl font-bold text-[#252B42]">
        15
      </h3>
      <p className="text-sm font-bold text-[#737373] mt-3">
        Countries Worldwide
      </p>
    </div>

    <div>
      <h3 className="text-4xl md:text-5xl font-bold text-[#252B42]">
        100+
      </h3>
      <p className="text-sm font-bold text-[#737373] mt-3">
        Top Partners
      </p>
    </div>

  </div>
</section>
<section className="max-w-[1120px] mx-auto px-6 pb-20">
  <div className="relative rounded-xl overflow-hidden">
    
    {/* VIDEO */}
<video
  src="https://cdn.coverr.co/videos/coverr-shopping-in-the-city-5176/1080p.mp4"
  autoPlay
  muted
  loop
  playsInline
  onError={(e) => {
    e.target.poster = "https://picsum.photos/1200/600";
  }}
  className="w-full h-[260px] md:h-[400px] object-cover"
/>
    {/* OVERLAY */}
    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
      
      {/* PLAY BUTTON */}
      <button className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-lg">
        <div className="w-0 h-0 border-l-[14px] border-l-[#23A6F0] border-y-[10px] border-y-transparent ml-1" />
      </button>

    </div>
  </div>
  
</section>
<section className="max-w-[1120px] mx-auto px-6 py-16 md:py-24">
  <div className="text-center">
    <h2 className="text-3xl md:text-5xl font-bold text-[#252B42]">
      Meet Our Team
    </h2>

    <p className="text-sm md:text-base text-[#737373] mt-4 max-w-[520px] mx-auto leading-6">
      Problems trying to resolve the conflict between the two major realms of
      Classical physics: Newtonian mechanics
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
    {[
      {
        name: "Gökhan Özdemir",
        role: "Project Manager",
        image: "https://picsum.photos/500/360?random=31",
      },
      {
        name: "Kemal Akalın",
        role: "Full Stack Developer",
        image: "https://picsum.photos/500/360?random=32",
      },
      {
        name: "Team Member",
        role: "Developer",
        image: "https://picsum.photos/500/360?random=33",
      },
    ].map((member) => (
      <div key={member.name} className="text-center">
        <div className="h-[260px] overflow-hidden bg-[#F5F5F5]">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="text-base font-bold text-[#252B42] mt-8">
          {member.name}
        </h3>

        <p className="text-sm font-bold text-[#737373] mt-3">
          {member.role}
        </p>

<div className="flex justify-center gap-5 mt-4 text-[#23A6F0]">
  <IconBrandFacebook className="cursor-pointer hover:scale-110 transition" size={22} />
  <IconBrandInstagram className="cursor-pointer hover:scale-110 transition" size={22} />
  <IconBrandTwitter className="cursor-pointer hover:scale-110 transition" size={22} />
</div>
      </div>
    ))}
  </div>
  
</section>
  <section className="py-16 md:py-24">
      <div className="max-w-[1120px] mx-auto px-6 text-center">
        
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#252B42]">
          Big Companies Are Here
        </h2>

        {/* DESC */}
        <p className="text-sm md:text-base text-[#737373] mt-4 max-w-[520px] mx-auto">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
        </div>
        </section>
<BrandLogosSection />
<section className="w-full mt-20">
  <div className="grid grid-cols-1 md:grid-cols-2">
    
    {/* LEFT */}
    <div className="bg-[#2A7CC7] text-white flex items-center justify-center px-6 py-16 md:py-24">
      <div className="max-w-[420px] text-center md:text-left">
        <p className="text-sm font-bold tracking-wide">
          WORK WITH US
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mt-6 leading-tight">
          Now Let’s grow Yours
        </h2>

        <p className="text-sm md:text-base mt-6 leading-6 opacity-90">
          The gradual accumulation of information about atomic and small-scale
          behavior during the first quarter of the 20th
        </p>

        <button className="mt-8 px-8 py-3 border border-white rounded text-sm font-bold hover:bg-white hover:text-[#2A7CC7] transition">
          Button
        </button>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="h-[300px] md:h-auto">
      <img
        src="https://picsum.photos/600/600?random=cta"
        alt="CTA"
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</section>
      </section>
    </main>
  );
}

export default AboutPage;
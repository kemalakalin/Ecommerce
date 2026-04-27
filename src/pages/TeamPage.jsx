import React from "react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";

function TeamPage() {
  const teamMembers = [
    {
      name: "Gökhan Özdemir",
      role: "Project Manager",
      image: "https://i.hizliresim.com/3zcjfpl.jpg",
    },
    {
      name: "Kemal Akalın",
      role: "Full Stack Developer",
      image: "https://picsum.photos/400/500?random=22",
    },
    {
      name: "Team Member",
      role: "Frontend Developer",
      image: "https://picsum.photos/400/500?random=23",
    },
    {
      name: "Team Member",
      role: "Backend Developer",
      image: "https://picsum.photos/400/500?random=24",
    },
  ];

  return (
    <main>
      <section className="max-w-[1120px] mx-auto px-6 py-16 md:py-24">
        <div className="text-center">
          <p className="text-sm font-bold text-[#737373]">WHAT WE DO</p>

          <h1 className="text-4xl md:text-6xl font-bold text-[#252B42] mt-4">
            Innovation tailored for you
          </h1>

          <div className="flex justify-center gap-3 mt-6 text-sm font-bold">
            <span className="text-[#252B42]">Home</span>
            <span className="text-[#BDBDBD]">/</span>
            <span className="text-[#737373]">Team</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center bg-white">
              <div className="h-[320px] overflow-hidden bg-[#F5F5F5]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="py-7">
                <h3 className="text-base font-bold text-[#252B42]">
                  {member.name}
                </h3>

                <p className="text-sm font-bold text-[#737373] mt-2">
                  {member.role}
                </p>

               <div className="flex justify-center gap-5 mt-5 text-[#23A6F0]">
  <IconBrandFacebook size={22} />
  <IconBrandInstagram size={22} />
  <IconBrandTwitter size={22} />
</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default TeamPage;
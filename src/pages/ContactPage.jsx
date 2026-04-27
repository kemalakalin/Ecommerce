import React from "react";

function ContactPage() {
  const offices = [
    {
      city: "Paris",
      address: "1901 Thorn ridge Cir.",
    },
    {
      city: "New York",
      address: "2715 Ash Dr. San Jose,",
    },
    {
      city: "Berlin",
      address: "4140 Parker Rd.",
    },
    {
      city: "London",
      address: "3517 W. Gray St. Utica,",
    },
  ];

  return (
    <main>
      <section className="relative min-h-[720px] overflow-hidden bg-[#008FAA]">
        <img
          src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200"
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#003F49]/95 via-[#006F80]/80 to-[#00A8C7]/40" />

        <div className="relative z-10 max-w-[1120px] mx-auto px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-16 items-center">
            <div className="text-white text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
                CONTACT US
              </h1>

              <p className="mt-8 text-sm font-medium leading-6 max-w-[330px] mx-auto lg:mx-0">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>

              <button className="mt-8 bg-[#23A6F0] text-white px-9 py-4 rounded text-sm font-bold">
                CONTACT US
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12 text-white">
              {offices.map((office) => (
                <div key={office.city}>
                  <h2 className="text-2xl font-bold">{office.city}</h2>

                  <p className="mt-4 text-lg font-bold">{office.address}</p>

                  <div className="w-12 h-[2px] bg-[#23A6F0] mt-4" />

                  <p className="mt-4 text-sm font-bold">75000 Paris</p>
                  <p className="mt-4 text-sm font-bold">
                    Phone ; +451 215 215
                  </p>
                  <p className="mt-4 text-sm font-bold">Fax : +451 215 215</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
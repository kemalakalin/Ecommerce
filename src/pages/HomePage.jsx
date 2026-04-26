import React from "react";

      {/* Navbar */}
      <header className="h-[80px] md:h-[90px] flex items-center justify-between px-6 md:px-9">
        <div className="flex items-center gap-10 md:gap-24">
          <h1 className="text-xl md:text-2xl font-extrabold">Bandage</h1>

          <nav className="hidden lg:flex items-center gap-5 text-sm font-bold text-[#737373]">
            <a href="#" className="hover:text-[#23A6F0]">Home</a>
            <a href="#" className="flex items-center gap-1 hover:text-[#23A6F0]">
              Shop <ChevronDown size={15} />
            </a>
            <a href="#" className="hover:text-[#23A6F0]">About</a>
            <a href="#" className="hover:text-[#23A6F0]">Blog</a>
            <a href="#" className="hover:text-[#23A6F0]">Contact</a>
            <a href="#" className="hover:text-[#23A6F0]">Pages</a>
          </nav>
        </div>

        <div className="flex items-center gap-4 md:gap-6 text-[#23A6F0] text-sm font-bold">
          <a href="#" className="hidden sm:flex items-center gap-1">
            <UserRound size={16} /> Login / Register
          </a>
          <Search size={20} />
          <div className="flex items-center gap-1">
            <ShoppingCart size={18} />
            <span className="text-xs">1</span>
          </div>
          <div className="flex items-center gap-1">
            <Heart size={18} />
            <span className="text-xs">1</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="px-4 md:px-12">
        <section className="relative overflow-hidden rounded-2xl min-h-[500px] md:min-h-[535px] bg-gradient-to-r from-[#8BDEEF] to-[#B7EFCB]">
          {/* Decorative */}
          <div className="absolute -right-[110px] -top-[70px] w-[530px] h-[530px] bg-white rounded-full" />
          <div className="absolute right-[350px] md:right-[415px] top-0 w-[60px] md:w-[69px] h-[60px] md:h-[69px] bg-white rounded-full" />
          <div className="absolute right-[360px] md:right-[438px] bottom-[150px] md:bottom-[168px] w-3.5 h-3.5 bg-[#8A6BF6] rounded-full" />
          <div className="absolute right-[-40px] md:right-[-53px] top-[90px] md:top-[97px] w-3.5 h-3.5 bg-[#8A6BF6] rounded-full" />
          <div className="absolute right-[-30px] md:right-[-47px] top-[200px] md:top-[210px] w-5 md:w-6 h-5 md:h-6 bg-white rounded-full" />

          {/* Content */}
          <div className="relative z-10 max-w-[520px] pt-20 md:pt-[132px] px-6 md:pl-[109px]">
            <p className="text-[#2A7CC7] text-xs md:text-sm font-extrabold uppercase tracking-wide mb-6 md:mb-10">
              Summer 2020
            </p>

            <h2 className="text-3xl md:text-[52px] font-extrabold leading-tight tracking-wide mb-5 md:mb-7">
              NEW COLLECTION
            </h2>

            <p className="text-[#737373] text-base md:text-xl font-medium leading-6 md:leading-8 max-w-[380px] mb-6 md:mb-7">
              We know how large objects will act, but things on a small scale.
            </p>

            <button className="bg-[#23A6F0] hover:bg-[#1687c7] text-white text-lg md:text-[22px] font-bold px-6 md:px-[35px] py-3 md:py-[14px] rounded">
              SHOP NOW
            </button>
          </div>

          {/* Image */}
          <div className="hidden md:block absolute right-[40px] bottom-0 z-10 w-[450px] lg:w-[520px]">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop"
              alt="model"
              className="w-full h-auto object-cover mix-blend-multiply"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default BandageHero;

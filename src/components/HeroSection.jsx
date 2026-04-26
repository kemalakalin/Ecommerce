function HeroSection() {
  return (
    <section className="px-4 md:px-12 mt-6">
      <div className="relative overflow-hidden rounded-2xl min-h-[520px] bg-gradient-to-r from-[#8BDEEF] to-[#B7EFCB] flex items-center">
        
        {/* Decorative circles */}
        <div className="absolute -right-[120px] -top-[80px] w-[520px] h-[520px] bg-white rounded-full" />
        <div className="absolute right-[420px] top-0 w-[70px] h-[70px] bg-white rounded-full" />
        <div className="absolute right-[440px] bottom-[170px] w-3 h-3 bg-purple-400 rounded-full" />
        <div className="absolute right-[-50px] top-[100px] w-3 h-3 bg-purple-400 rounded-full" />
        <div className="absolute right-[-40px] top-[210px] w-5 h-5 bg-white rounded-full" />

        {/* Content */}
        <div className="relative z-10 max-w-[520px] pl-10 md:pl-24">
          <p className="text-blue-600 text-sm font-bold uppercase tracking-wide mb-6">
            Summer 2020
          </p>

          <h1 className="text-4xl md:text-[52px] font-extrabold text-[#252B42] mb-6 leading-tight">
            NEW COLLECTION
          </h1>

          <p className="text-gray-500 text-lg md:text-xl mb-6 max-w-[380px]">
            We know how large objects will act, but things on a small scale.
          </p>

          <button className="bg-[#23A6F0] hover:bg-[#1687c7] text-white px-8 py-3 rounded-md font-bold text-lg">
            SHOP NOW
          </button>
        </div>

        {/* Image */}
        <div className="absolute right-0  hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1621786030484-4c855eed6974?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="model"
            className="w-[500px] object-cover mix-blend-multiply"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
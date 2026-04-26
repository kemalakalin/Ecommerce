function HeroSection() {
  return (
    <section className="px-4 md:px-12 mt-6">
      {/* flex-col: Mobilde alt alta, md:flex-row: Masaüstünde yan yana */}
      <div className="relative overflow-hidden rounded-2xl min-h-[520px] bg-gradient-to-r from-[#8BDEEF] to-[#B7EFCB] flex flex-col md:flex-row items-center">
        
        {/* Dekoratif Daireler (Mobilde karmaşayı önlemek için bazıları gizlenebilir) */}
        <div className="absolute -right-[120px] -top-[80px] w-[520px] h-[520px] bg-white rounded-full opacity-50 md:opacity-100" />

        {/* İçerik Alanı */}
        <div className="relative z-10 max-w-[520px] px-6 py-12 md:pl-24 text-center md:text-left">
          <p className="text-blue-600 text-sm font-bold uppercase tracking-wide mb-6">
            Summer 2020
          </p>

          <h1 className="text-4xl md:text-[52px] font-extrabold text-[#252B42] mb-6 leading-tight">
            NEW COLLECTION
          </h1>

          <p className="text-gray-500 text-lg md:text-xl mb-6 max-w-[380px] mx-auto md:mx-0">
            We know how large objects will act, but things on a small scale.
          </p>

          <button className="bg-[#23A6F0] hover:bg-[#1687c7] text-white px-8 py-3 rounded-md font-bold text-lg">
            SHOP NOW
          </button>
        </div>

        {/* Fotoğraf Alanı */}
        {/* hidden md:block KALDIRILDI, yerine mobil için boyut ayarları eklendi */}
        <div className="relative md:absolute md:right-0 w-full md:w-auto flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1621786030484-4c855eed6974?q=80&w=687&auto=format&fit=crop"
            alt="model"
            className="w-[300px] md:w-[500px] object-cover mix-blend-multiply"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
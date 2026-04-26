function FeaturedContentSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1050px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Images */}
        <div className="grid grid-cols-2 gap-5">
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop"
            alt="model"
            className="w-full h-[350px] object-cover"
          />

          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=600&auto=format&fit=crop"
            alt="model"
            className="w-full h-[350px] object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-[#23A6F0] text-sm font-bold mb-4">
            Featured Products
          </p>

          <h2 className="text-[#252B42] text-3xl md:text-[40px] font-extrabold mb-6">
            We love what we do
          </h2>

          <p className="text-[#737373] text-sm leading-6 mb-4">
            Problems trying to resolve the conflict between the two major
            realms of Classical physics: Newtonian mechanics.
          </p>

          <p className="text-[#737373] text-sm leading-6">
            Problems trying to resolve the conflict between the two major
            realms of Classical physics: Newtonian mechanics.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeaturedContentSection;
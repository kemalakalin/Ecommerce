function FeaturedCategories() {
  return (
    <section className="bg-white px-4 md:px-12 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-[1120px] mx-auto">
        
        {/* Large Card */}
        <div className="relative h-[490px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop"
            alt="featured"
            className="w-full h-full object-cover"
          />

          <div className="absolute left-0 bottom-0 w-[68%] bg-[#2D9CDB]/80 text-white px-14 py-12">
            <h2 className="text-2xl font-bold leading-snug mb-5">
              Top Product Of <br /> the Week
            </h2>

            <button className="border border-white rounded-md px-9 py-3 text-sm font-bold hover:bg-white hover:text-[#2D9CDB] transition">
              EXPLORE ITEMS
            </button>
          </div>
        </div>

        {/* Right Cards */}
        <div className="grid grid-rows-2 gap-4">
          <div className="relative h-[237px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601762603339-fd61e28b698a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="featured"
              className="w-full h-full object-cover"
            />

            <div className="absolute left-0 bottom-0 w-[62%] bg-[#2D9CDB]/80 text-white px-8 py-8">
              <h2 className="text-xl font-bold mb-5">
                Top Product Of the Week
              </h2>

              <button className="border border-white rounded-md px-8 py-3 text-xs font-bold hover:bg-white hover:text-[#2D9CDB] transition">
                EXPLORE ITEMS
              </button>
            </div>
          </div>

          <div className="relative h-[237px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="featured"
              className="w-full h-full object-cover"
            />

            <div className="absolute left-0 bottom-0 w-[65%] bg-[#2D9CDB]/80 text-white px-8 py-8">
              <h2 className="text-xl font-bold mb-5">
                Top Product Of the Week
              </h2>

              <button className="border border-white rounded-md px-8 py-3 text-xs font-bold hover:bg-white hover:text-[#2D9CDB] transition">
                EXPLORE ITEMS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCategories;
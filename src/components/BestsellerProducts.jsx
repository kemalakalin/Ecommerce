const products = [
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop",
];

function BestsellerProducts() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1050px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[#252B42] text-2xl font-extrabold tracking-wide">
            BESTSELLER PRODUCTS
          </h2>
          <p className="text-[#737373] text-sm font-semibold mt-3">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12">
          {products.map((image, index) => (
            <div key={index} className="text-center">
              <div className="w-full h-[196px] bg-gray-100 overflow-hidden mb-5">
                <img
                  src={image}
                  alt="product"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <h3 className="text-[#252B42] text-sm font-bold mb-3">
                Graphic Design
              </h3>

              <p className="text-[#737373] text-sm font-bold mb-3">
                English Department
              </p>

              <div className="flex items-center justify-center gap-1 text-sm font-bold">
                <span className="text-[#BDBDBD]">$16.48</span>
                <span className="text-[#23856D]">$6.48</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-20">
          <button className="border border-[#23A6F0] text-[#23A6F0] px-10 py-4 rounded-md text-sm font-bold hover:bg-[#23A6F0] hover:text-white transition">
            LOAD MORE PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
}

export default BestsellerProducts;
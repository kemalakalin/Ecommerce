import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Grid, List } from "lucide-react";
import BrandLogosSection from "../components/BrandLogosSection";
import products from "../data/products";

function ShopPage() {
  const categories = [
    {
      title: "CLOTHS",
      items: "5 Items",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600",
    },
    {
      title: "CLOTHS",
      items: "5 Items",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600",
    },
    {
      title: "CLOTHS",
      items: "5 Items",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600",
    },
    {
      title: "CLOTHS",
      items: "5 Items",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600",
    },
    {
      title: "CLOTHS",
      items: "5 Items",
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600",
    },
  ];

  return (
    <main>
      <section className="max-w-[1120px] mx-auto px-6 py-8 md:py-10">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <h1 className="text-2xl font-bold text-[#252B42]">Shop</h1>

          <div className="flex items-center gap-3 text-sm font-bold">
            <Link to="/">Home</Link>
            <ChevronRight size={16} />
            <span>Shop</span>
          </div>
        </div>

        {/* CATEGORIES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-10">
          {categories.map((category) => (
            <div
              key={category.image}
              className="relative h-[300px] md:h-[223px] overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
                <h2 className="font-bold">{category.title}</h2>
                <p className="text-sm">{category.items}</p>
              </div>
            </div>
          ))}
        </div>

      {/* FILTER BAR */}
<div className="mt-12 bg-white py-8">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
    <p className="text-sm md:text-base font-bold text-[#737373] text-center md:text-left">
      Showing all 12 results
    </p>

    <div className="flex flex-col md:flex-row items-center gap-6">
      <div className="flex items-center gap-4">
        <span className="text-sm md:text-base font-bold text-[#737373]">
          Views:
        </span>

        <button className="w-12 h-12 border border-[#E8E8E8] rounded-md flex items-center justify-center text-[#252B42] bg-white">
          <Grid size={18} />
        </button>

        <button className="w-12 h-12 border border-[#E8E8E8] rounded-md flex items-center justify-center text-[#737373] bg-white">
          <List size={18} />
        </button>
      </div>

      <div className="flex items-center gap-4">
        <select className="w-[150px] h-12 border border-[#DDDDDD] rounded-md px-4 text-sm text-[#737373] bg-white">
          <option>Popularity</option>
          <option>Newest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>

        <button className="h-12 bg-[#23A6F0] text-white px-8 rounded-md text-sm font-bold">
          Filter
        </button>
      </div>
    </div>
  </div>
</div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="block text-center"
            >
              <div className="h-[300px] overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="mt-4 font-bold">{product.title}</h3>
              <p className="text-sm text-gray-500">
                {product.department}
              </p>

              <div className="flex justify-center gap-2 mt-2">
                <span className="line-through text-gray-400">
                  {product.oldPrice}
                </span>
                <span className="text-green-600 font-bold">
                  {product.price}
                </span>
              </div>
            </Link>
          ))}
        </div>

    {/* PAGINATION */}
<div className="flex justify-center mt-16">
  <div className="flex border border-[#E9E9E9] rounded-lg overflow-hidden shadow-sm">
    
    <button className="px-6 py-4 bg-[#F3F3F3] text-[#BDBDBD] text-sm font-bold border-r border-[#E9E9E9]">
      First
    </button>

    <button className="px-5 py-4 bg-white text-[#23A6F0] text-sm font-bold border-r border-[#E9E9E9]">
      1
    </button>

    <button className="px-5 py-4 bg-[#23A6F0] text-white text-sm font-bold border-r border-[#E9E9E9]">
      2
    </button>

    <button className="px-5 py-4 bg-white text-[#23A6F0] text-sm font-bold border-r border-[#E9E9E9]">
      3
    </button>

    <button className="px-6 py-4 bg-white text-[#23A6F0] text-sm font-bold">
      Next
    </button>

  </div>
</div>

        <BrandLogosSection />
      </section>
    </main>
  );
}

export default ShopPage;
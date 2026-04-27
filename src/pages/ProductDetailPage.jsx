import React from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight, Star, Heart, ShoppingCart, Eye } from "lucide-react";
import products from "../data/products";

function ProductDetailPage() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  const thumbnails = product.thumbnails || [product.image];

  return (
    <main>
      <section className="max-w-[1120px] mx-auto px-6 py-8">
        <div className="flex items-center gap-3 text-sm font-bold mb-8">
          <Link to="/" className="text-[#252B42]">
            Home
          </Link>
          <ChevronRight size={16} className="text-[#BDBDBD]" />
          <Link to="/shop" className="text-[#737373]">
            Shop
          </Link>
          <ChevronRight size={16} className="text-[#BDBDBD]" />
          <span className="text-[#BDBDBD]">Product</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white">
          <div>
            <div className="w-full h-[450px] bg-[#F5F5F5] overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex gap-4 mt-5">
              {thumbnails.map((thumb) => (
                <div
                  key={thumb}
                  className="w-[100px] h-[75px] bg-[#F5F5F5] overflow-hidden"
                >
                  <img
                    src={thumb}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="px-0 lg:px-6 py-4">
            <h1 className="text-xl font-normal text-[#252B42]">
              {product.title}
            </h1>

            <div className="flex items-center gap-3 mt-4">
              <div className="flex text-[#F3CD03]">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Star key={item} size={20} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm font-bold text-[#737373]">
                10 Reviews
              </span>
            </div>

            <div className="mt-6">
              <p className="text-2xl font-bold text-[#252B42]">
                {product.price}
              </p>

              <p className="text-sm font-bold text-[#737373] mt-2">
                Availability :{" "}
                <span className="text-[#23A6F0]">
                  {product.availability || "In Stock"}
                </span>
              </p>
            </div>

            <p className="text-sm text-[#858585] leading-6 mt-8 max-w-[460px]">
              {product.description ||
                "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent."}
            </p>

            <hr className="my-8 border-[#BDBDBD]" />

            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#23A6F0]" />
              <span className="w-7 h-7 rounded-full bg-[#23856D]" />
              <span className="w-7 h-7 rounded-full bg-[#E77C40]" />
              <span className="w-7 h-7 rounded-full bg-[#252B42]" />
            </div>

            <div className="flex items-center gap-3 mt-10">
              <button className="h-11 px-6 rounded bg-[#23A6F0] text-white text-sm font-bold">
                Select Options
              </button>

              <button className="w-11 h-11 rounded-full border border-[#E8E8E8] flex items-center justify-center bg-white">
                <Heart size={18} />
              </button>

              <button className="w-11 h-11 rounded-full border border-[#E8E8E8] flex items-center justify-center bg-white">
                <ShoppingCart size={18} />
              </button>

              <button className="w-11 h-11 rounded-full border border-[#E8E8E8] flex items-center justify-center bg-white">
                <Eye size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductDetailPage;
import React, { useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ChevronRight, Star, Heart, ShoppingCart, Eye, ArrowLeft } from "lucide-react";
import { fetchProduct } from "../store/actions/productActions";
import { addToCart } from "../store/actions/cartActions";

function ProductDetailPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  
  const { product, productFetchState } = useSelector(state => state.product);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProduct(productId));
    }
  }, [productId, dispatch]);

  const handleGoBack = () => {
    history.goBack();
  };

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  if (productFetchState === "FETCHING") {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#23A6F0]"></div>
      </div>
    );
  }

  if (productFetchState === "FAILED" || !product) {
    return (
      <div className="p-10 text-center flex flex-col items-center">
        <p className="text-xl mb-4">Product not found</p>
        <button onClick={handleGoBack} className="flex items-center gap-2 px-4 py-2 bg-[#23A6F0] text-white rounded">
          <ArrowLeft size={16} /> Go Back
        </button>
      </div>
    );
  }

  const thumbnails = product.images?.length > 0 ? product.images : [{ url: "https://picsum.photos/500/600?random=1" }];
  const mainImage = thumbnails[0]?.url;

  return (
    <main>
      <section className="max-w-[1120px] mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3 text-sm font-bold">
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
          
          <button 
            onClick={handleGoBack}
            className="flex items-center gap-2 text-[#737373] hover:text-[#23A6F0] transition-colors"
          >
            <ArrowLeft size={16} /> Back
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white">
          <div>
            <div className="w-full h-[450px] bg-[#F5F5F5] overflow-hidden">
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex gap-4 mt-5">
              {thumbnails.map((thumb, index) => (
                <div
                  key={index}
                  className="w-[100px] h-[75px] bg-[#F5F5F5] overflow-hidden"
                >
                  <img
                    src={thumb.url}
                    alt={`${product.name} thumbnail ${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="px-0 lg:px-6 py-4">
            <h1 className="text-xl font-normal text-[#252B42]">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-4">
              <div className="flex text-[#F3CD03]">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Star 
                    key={item} 
                    size={20} 
                    fill={item <= Math.round(product.rating || 0) ? "currentColor" : "none"} 
                    color={item <= Math.round(product.rating || 0) ? "currentColor" : "#BDBDBD"} 
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-[#737373]">
                {product.sell_count || 0} Sales | Rating: {product.rating || "N/A"}
              </span>
            </div>

            <div className="mt-6">
              <p className="text-2xl font-bold text-[#252B42]">
                ${product.price}
              </p>

              <p className="text-sm font-bold text-[#737373] mt-2">
                Availability :{" "}
                <span className="text-[#23A6F0]">
                  {product.stock > 0 ? "In Stock" : "Out of Stock"}
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
              <button 
                onClick={handleAddToCart}
                className="h-11 px-6 rounded bg-[#23A6F0] text-white text-sm font-bold hover:bg-blue-600 transition-colors">
                Add to Cart
              </button>

              <button className="w-11 h-11 rounded-full border border-[#E8E8E8] flex items-center justify-center bg-white hover:bg-gray-50 transition-colors">
                <Heart size={18} />
              </button>

              <button 
                onClick={handleAddToCart}
                className="w-11 h-11 rounded-full border border-[#E8E8E8] flex items-center justify-center bg-white hover:bg-gray-50 transition-colors">
                <ShoppingCart size={18} />
              </button>

              <button className="w-11 h-11 rounded-full border border-[#E8E8E8] flex items-center justify-center bg-white hover:bg-gray-50 transition-colors">
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
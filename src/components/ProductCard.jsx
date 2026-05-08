import React from 'react';
import { Link } from 'react-router-dom';

const createSlug = (name) => {
  if (!name) return "";
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};

const ProductCard = ({ product, gender = 'kadin', categoryName = 'tişort', categoryId }) => {
  const catId = categoryId || product.category_id || '1';
  return (
    <Link
      to={`/shop/${gender}/${categoryName}/${catId}/${createSlug(product.name)}/${product.id}`}
      className="block text-center cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-md pb-4"
    >
      <div className="h-[300px] overflow-hidden bg-gray-100">
        <img
          src={product.images?.[0]?.url || "https://picsum.photos/500/600?random=1"}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="mt-4 font-bold text-[#252B42]">{product.name}</h3>
      <p className="text-sm text-[#737373] mt-2 px-2">
        {product.description?.substring(0, 50)}...
      </p>

      <div className="flex justify-center gap-2 mt-3">
        <span className="text-[#23856D] font-bold">
          ${product.price}
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
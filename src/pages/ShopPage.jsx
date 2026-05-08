import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ChevronRight, Grid, List } from "lucide-react";
import BrandLogosSection from "../components/BrandLogosSection";
import ProductCard from "../components/ProductCard";
import { fetchProducts, setCategory, setSort, setFilter, setOffset } from "../store/actions/productActions";
import ReactPaginate from 'react-paginate';

function ShopPage() {
  const dispatch = useDispatch();
  const { gender, categoryName, categoryId } = useParams();
  const { productList, total, fetchState, category, sort, filter, limit, offset } = useSelector(state => state.product);

  // Handle category from URL params
  useEffect(() => {
    if (categoryId) {
      dispatch(setCategory(categoryId));
      dispatch(setOffset(0));
    }
  }, [categoryId, dispatch]);

  // Fetch products when category, sort, filter, or offset changes
  useEffect(() => {
    dispatch(fetchProducts());
  }, [category, sort, filter, offset, dispatch]);

  const handleSortChange = (e) => {
    dispatch(setSort(e.target.value));
    dispatch(setOffset(0));
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
    dispatch(setOffset(0));
  };

  const handlePageClick = (event) => {
    const newOffset = event.selected * limit;
    dispatch(setOffset(newOffset));
  };

  const pageCount = Math.ceil(total / limit) || 1;

  // Fix for Vite CJS/ESM interop issue with react-paginate
  const PaginateComponent = ReactPaginate && ReactPaginate.default ? ReactPaginate.default : ReactPaginate;

  const createSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  };

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

      {/* FILTER BAR */}
<div className="mt-12 bg-white py-8">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
    <p className="text-sm md:text-base font-bold text-[#737373] text-center md:text-left">
      Showing {productList.length} of {total} results
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
        <select
          value={sort}
          onChange={handleSortChange}
          className="w-[150px] h-12 border border-[#DDDDDD] rounded-md px-4 text-sm text-[#737373] bg-white"
        >
          <option value="">Popularity</option>
          <option value="price:asc">Price: Low to High</option>
          <option value="price:desc">Price: High to Low</option>
          <option value="rating:asc">Rating: Low to High</option>
          <option value="rating:desc">Rating: High to Low</option>
        </select>

        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Filter products..."
          className="w-[150px] h-12 border border-[#DDDDDD] rounded-md px-4 text-sm text-[#737373] bg-white"
        />

        <button
          onClick={() => dispatch(fetchProducts())}
          className="h-12 bg-[#23A6F0] text-white px-8 rounded-md text-sm font-bold"
        >
          Filter
        </button>
      </div>
    </div>
  </div>
</div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {fetchState === "FETCHING" ? (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-500">Loading products...</p>
            </div>
          ) : fetchState === "FAILED" ? (
            <div className="col-span-full text-center py-8">
              <p className="text-red-500">Failed to load products. Please try again.</p>
            </div>
          ) : productList.length === 0 ? (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-500">No products found.</p>
            </div>
          ) : (
            productList.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                gender={gender}
                categoryName={categoryName}
                categoryId={categoryId}
              />
            ))
          )}
        </div>

    {/* PAGINATION */}
<div className="flex justify-center mt-16">
  <PaginateComponent
    breakLabel="..."
    nextLabel="Next"
    onPageChange={handlePageClick}
    pageRangeDisplayed={3}
    pageCount={pageCount}
    forcePage={limit > 0 ? Math.floor(offset / limit) : 0}
    previousLabel="First"
    renderOnZeroPageCount={null}
    containerClassName="flex border border-[#E9E9E9] rounded-lg overflow-hidden shadow-sm list-none p-0 m-0"
    pageLinkClassName="flex px-5 py-4 bg-white text-[#23A6F0] text-sm font-bold border-r border-[#E9E9E9] hover:bg-gray-50 cursor-pointer"
    activeLinkClassName="!bg-[#23A6F0] !text-white"
    previousLinkClassName="flex px-6 py-4 bg-white text-[#23A6F0] text-sm font-bold border-r border-[#E9E9E9] hover:bg-gray-50 cursor-pointer"
    nextLinkClassName="flex px-6 py-4 bg-white text-[#23A6F0] text-sm font-bold hover:bg-gray-50 cursor-pointer"
    breakLinkClassName="flex px-5 py-4 bg-white text-[#23A6F0] text-sm font-bold border-r border-[#E9E9E9]"
    disabledClassName="opacity-50 cursor-not-allowed pointer-events-none bg-[#F3F3F3]"
  />
</div>

        <BrandLogosSection />
      </section>
    </main>
  );
}

export default ShopPage;
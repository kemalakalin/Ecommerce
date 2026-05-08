import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Search,
  ShoppingCart,
  Heart,
  UserRound,
  ChevronDown,
  LogOut,
} from "lucide-react";
import MD5 from "crypto-js/md5";
import { logoutUser } from "../store/actions/authActions";

function MainHeader() {
  const user = useSelector((state) => state.client.user);
  const cart = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const getGravatarUrl = (email) => {
    const hash = MD5(email.toLowerCase()).toString();
    return `https://www.gravatar.com/avatar/${hash}?d=identicon&s=32`;
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const cartItemCount = cart.reduce((total, item) => total + item.count, 0);

  return (
    <header className="bg-white px-4 py-6 sm:px-6 md:px-9 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 relative z-50">
      
      {/* Sol Grup: Logo ve Menü */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-24">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold text-[#252B42]">
          Bandage
        </Link>

        {/* Menü: Artık 'hidden' değil! Mobilde alt alta, masaüstünde yan yana */}
        <nav className="flex flex-col lg:flex-row items-center gap-6 lg:gap-5 text-xl lg:text-sm font-bold text-[#737373]">
          <Link to="/" className="hover:text-[#23A6F0]">Home</Link>
          <Link to="/shop" className="flex items-center gap-1 hover:text-[#23A6F0]">
            Shop <ChevronDown size={14} strokeWidth={2.5} />
          </Link>
          <Link to="/about" className="hover:text-[#23A6F0]">About</Link>
          <Link to="/blog" className="hover:text-[#23A6F0]">Blog</Link>
          <Link to="/contact" className="hover:text-[#23A6F0]">Contact</Link>
          <Link to="/team" className="hover:text-[#23A6F0]">Team</Link>
          <Link to="/pages" className="hover:text-[#23A6F0]">Pages</Link>
        </nav>
      </div>

      {/* Sağ Grup: İkonlar - Sadece Masaüstünde (Görselde istemediğin kısım) */}
     <div className="hidden lg:flex items-center gap-5 text-[#23A6F0] text-sm font-bold">
  {user ? (
    <div className="flex items-center gap-3">
      {/* 1. ADIM: BURADAN BAŞLIYOR - Avatar ve Dropdown Menü */}
      <div className="relative group flex items-center gap-2 cursor-pointer py-2">
        <img
          src={getGravatarUrl(user.email)}
          alt="User Avatar"
          className="w-8 h-8 rounded-full border border-gray-200"
        />
        <div className="flex items-center gap-1">
          <span className="text-[#737373] font-bold">{user.name}</span>
          <ChevronDown size={14} className="text-[#737373] group-hover:rotate-180 transition-transform" />
        </div>

        {/* Dropdown Linkleri: Hover durumunda görünür */}
        <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-100 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[100]">
          <ul className="py-2">
            <li>
              <Link 
                to="/previous-orders" 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#23A6F0] transition-colors"
              >
                My Previous Orders
              </Link>
            </li>
            <li className="border-t border-gray-50 mt-1">
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 flex items-center gap-2 transition-colors"
              >
                <LogOut size={14} /> Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* BURADA BİTİYOR */}
  </div>
) : (
          <>
            <Link to="/login" className="flex items-center gap-1">
              <UserRound size={14} />
              Login 
            </Link>
            <Link to="/signup" className="flex items-center gap-1">
              <UserRound size={14} />
              Register
            </Link>
          </>
        )}
        <button type="button"><Search size={18} /></button>
        
        {/* Shopping Cart Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="flex items-center gap-1 hover:text-blue-600 transition-colors"
          >
            <ShoppingCart size={17} />
            <span className="text-xs">{cartItemCount}</span>
          </button>
          
          {isCartOpen && (
            <div className="absolute right-0 top-full mt-2 w-80 bg-white border border-gray-200 rounded-md shadow-lg z-50 p-4">
              <h3 className="font-bold text-gray-800 mb-3 border-b pb-2">My Cart ({cartItemCount} Items)</h3>
              {cart.length === 0 ? (
                <p className="text-sm text-gray-500">Your cart is empty.</p>
              ) : (
                <div className="flex flex-col gap-4 max-h-80 overflow-y-auto">
                  {cart.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <img src={item.product.images?.[0]?.url || "https://picsum.photos/50/50?random=" + index} alt={item.product.name} className="w-12 h-12 object-cover rounded" />
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-gray-800 line-clamp-1">{item.product.name}</h4>
                        <p className="text-xs text-gray-500">Qty: {item.count}</p>
                      </div>
                      <div className="text-sm font-bold text-[#23A6F0]">
                        ${(item.product.price * item.count).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {cart.length > 0 && (
                <div className="mt-4 pt-3 border-t flex justify-between items-center">
                  <Link to="/cart" onClick={() => setIsCartOpen(false)} className="text-sm font-bold text-white bg-[#23A6F0] px-4 py-2 rounded hover:bg-blue-600 w-full text-center">
                    Go to Checkout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>

        <Link to="/wishlist" className="flex items-center gap-1">
          <Heart size={17} />
          <span className="text-xs">1</span>
        </Link>
      </div>

      {/* Mobil İkonlar: Eğer mobilde en üstte ufak ikonlar istersen burayı kullanabilirsin, 
          istemiyorsan bu div'i tamamen silebilirsin. */}
      <div className="flex lg:hidden items-center justify-center gap-6 text-[#23A6F0]">
         <Search size={24} />
         <button onClick={() => setIsCartOpen(!isCartOpen)} className="relative">
           <ShoppingCart size={24} />
           <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">{cartItemCount}</span>
         </button>
      </div>
    </header>
  );
}

export default MainHeader;
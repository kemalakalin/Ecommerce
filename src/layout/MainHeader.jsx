import { Link } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Heart,
  UserRound,
  ChevronDown,
} from "lucide-react";

function MainHeader() {
  return (
    <header className="bg-white px-4 py-6 sm:px-6 md:px-9 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
      
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
        <Link to="/login" className="flex items-center gap-1">
          <UserRound size={14} />
          Login / Register
        </Link>
        <button type="button"><Search size={18} /></button>
        <Link to="/cart" className="flex items-center gap-1">
          <ShoppingCart size={17} />
          <span className="text-xs">1</span>
        </Link>
        <Link to="/wishlist" className="flex items-center gap-1">
          <Heart size={17} />
          <span className="text-xs">1</span>
        </Link>
      </div>

      {/* Mobil İkonlar: Eğer mobilde en üstte ufak ikonlar istersen burayı kullanabilirsin, 
          istemiyorsan bu div'i tamamen silebilirsin. */}
      <div className="flex lg:hidden items-center justify-center gap-6 text-[#23A6F0]">
         <Search size={24} />
         <ShoppingCart size={24} />
      </div>
    </header>
  );
}

export default MainHeader;
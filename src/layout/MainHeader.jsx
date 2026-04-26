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
    <header className="h-[80px] md:h-[92px] bg-white flex items-center justify-between px-6 md:px-9">
      <div className="flex items-center gap-16 lg:gap-24">
        <Link to="/" className="text-2xl font-extrabold text-[#252B42]">
          Bandage
        </Link>

        <nav className="hidden lg:flex items-center gap-5 text-sm font-bold text-[#737373]">
          <Link to="/" className="hover:text-[#23A6F0]">
            Home
          </Link>

          <Link to="/products" className="flex items-center gap-1 hover:text-[#23A6F0]">
            Shop <ChevronDown size={14} strokeWidth={2.5} />
          </Link>

          <Link to="/about" className="hover:text-[#23A6F0]">
            About
          </Link>

          <Link to="/blog" className="hover:text-[#23A6F0]">
            Blog
          </Link>

          <Link to="/contact" className="hover:text-[#23A6F0]">
            Contact
          </Link>

          <Link to="/pages" className="hover:text-[#23A6F0]">
            Pages
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-5 text-[#23A6F0] text-sm font-bold">
        <Link to="/login" className="hidden sm:flex items-center gap-1">
          <UserRound size={14} />
          Login / Register
        </Link>

        <button type="button">
          <Search size={18} />
        </button>

        <Link to="/cart" className="flex items-center gap-1">
          <ShoppingCart size={17} />
          <span className="text-xs">1</span>
        </Link>

        <Link to="/wishlist" className="flex items-center gap-1">
          <Heart size={17} />
          <span className="text-xs">1</span>
        </Link>
      </div>
    </header>
  );
}

export default MainHeader;
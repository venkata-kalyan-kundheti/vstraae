import { HiBars3 } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
import { useState } from "react";

const Header = () => {
  const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);
  return (
    <>
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center">
      <div className="relative max-w-screen-2xl w-full flex items-center justify-between py-4 px-5 text-white max-sm:px-5 max-[400px]:px-3 bg-[#b0a998]/10 backdrop-blur-[0.9px] shadow-md border-b border-[#d4af37]/30">
        <div className="absolute inset-0 bg-[#b0a998]/10 backdrop-blur-[0.9px] pointer-events-none rounded-none"></div>
        <div className="relative z-10 flex w-full justify-between items-center">
        <HiBars3 className="text-white text-2xl max-sm:text-xl mr-20 max-lg:mr-0 cursor-pointer hover:text-[#d4af37] transition-colors duration-300" onClick={() => setIsSidebarOpen(true)} />
        <Link
          to="/"
          className="text-[43.2px] font-bold tracking-wider max-sm:text-[36px] max-[400px]:text-[28.8px] text-transparent bg-clip-text bg-gradient-to-br from-[#ffbf00] to-[#ffff00] drop-shadow-lg"
          style={{ textShadow: '0 2px 10px rgba(212, 175, 55, 0.4)' }}
        >
          वstraaè
        </Link>
        <div className="flex gap-4 items-center max-sm:gap-2">
          <Link to="/search">
            <HiOutlineMagnifyingGlass className="text-white text-2xl max-sm:text-xl hover:text-[#d4af37] transition-colors duration-300" />
          </Link>
          <Link to="/login">
            <HiOutlineUser className="text-white text-2xl max-sm:text-xl hover:text-[#d4af37] transition-colors duration-300" />
          </Link>
          <Link to="/cart">
            <HiOutlineShoppingBag className="text-white text-2xl max-sm:text-xl hover:text-[#d4af37] transition-colors duration-300" />
          </Link>
        </div>
      </div>
    </div>
    </header>
    <SidebarMenu isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    </>
  );
};
export default Header;

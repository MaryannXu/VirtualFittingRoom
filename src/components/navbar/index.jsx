import { useEffect, useState } from "react";
import NavbarDropdown from "./navbarDropdown";
//import bgImage from "/public/image1.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleScrollPos = () => {
    const currentScrollPos = window.scrollY

    if(currentScrollPos > scrollPos) {
      setIsOpen(false)
    } 
    
    setScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPos)

    return () => {
      window.removeEventListener("scroll", handleScrollPos)
    }
  }, [scrollPos]);

  return (
    <nav className="bg-transparent">
      <div className="container mx-auto max-w-[1344px]">
        <div className="h-16 md:h-20 p-14 md:py-15 lg:px-5 flex items-center justify-between z-20 relative">
          {/* Icon */}
          <a href="#">
            <img
              className="w-[130px] h-9 lg:w-[150px] lg:h-[42px] object-cover z-20 relative"
              src="/logo.png"
              alt="ss-icon"
            />
          </a>

          {/* Hamburger */}
          <div
            onClick={handleOpen}
            className={`${
              isOpen ? "open" : ""
            } flex flex-col items-center w-fit gap-[7px] cursor-pointer md:hidden z-20`}
          >
            <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black-500 rounded-full"></span>
            <span className="transition-all duration-500 ease-in-out h-[2px] w-4 bg-black-500 rounded-full"></span>
            <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black-500 rounded-full"></span>
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center md:gap-4 lg:gap-8 text-black-300 text-sm lg:text-base font-body">
            <a href="#" className="navlink">
              Shop Now
            </a>
            <a href="#" className="navlink">
              Get Styled
            </a>
            <a href="#" className="navlink">
              Pricing
            </a>
            <a href="#" className="navlink">
              Resources
            </a>
            <a href="#" className="navlink">
              Customers
            </a>
          </div>

          {/* Button */}
          <div className="hidden md:flex md:gap-4 lg:gap-[25px] items-center text-sm lg:text-base font-head font-medium">
            <a href="#">
              <p className="text-black-300 underline cursor-pointer">Login</p>
            </a>
            <a href="#">
              <button className="text-white bg-primary-100 md:py-2.5 px-4 py-3.5 px-[25px]">
                Start free
              </button>
            </a>
          </div>
        </div>

        {/* Navbar Menu (Mobile) */}
        <NavbarDropdown isOpen={isOpen} />
      </div>
    </nav>
  );
}

{/*<nav className="bg-cover relative"
      style={{
      backgroundImage: `url(${bgImage})`, // Set the background image
    }}> */}
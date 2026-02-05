import React, { useState } from "react";
import logo2 from "../images/logo2.png";
import blacklogo from "../images/blacklogo.png";
import dropdown from "../images/dropdown.png";
import blackdrop from "../images/blackdrop.png";
import menu from "../images/menu.png";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  // Add scroll event listener
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed z-10 top-0 right-0 left-0 ${
        isSticky ? "backdrop-blur-xl -mt-4 h-20 bg-black bg-opacity-5" : ""
      }`}
    >
      <nav className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <img
                src={isSticky ? blacklogo : logo2}
                className="mt-2"
                width="168"
                height="38"
                alt="Logo"
              />
            </div>
            <div className="hidden md:flexlg:flex space-x-4">
               <button
                href="#0"
                className={`group px-1 inline-block font-bold text-md relative ${
                  isSticky ? "text-black" : "text-white"
                }`}
              >
                About
                <object className="absolute left-0 top-6 hidden group-hover:block border bg-white p-3 rounded-md">
                  <button
                    href="#0"
                    className="text-gray-500 hover:text-[#FF3277] block px-3 py-2 rounded-md hover:bg-gray-100 whitespace-nowrap font-bold text-md"
                  >
                    Why Matrix
                  </button>
                   <button
                    href="#0"
                    className="text-gray-500 hover:text-[#FF3277] block px-3 py-2 rounded-md hover:bg-gray-100 whitespace-nowrap font-bold text-md"
                  >
                    Integration
                  </button>
                   <button
                    href="#0"
                    className="text-gray-500 hover:text-[#FF3277] block px-3 py-2 rounded-md hover:bg-gray-100 whitespace-nowrap font-bold text-md"
                  >
                    How It Works
                  </button>
                   <button
                    href="#0"
                    className="text-gray-500 hover:text-[#FF3277] block px-3 py-2 rounded-md hover:bg-gray-100 whitespace-nowrap font-bold text-md"
                  >
                    Best Solutions
                  </button>
                   <button
                    href="#0"
                    className="text-gray-500 hover:text-[#FF3277] block px-3 py-2 rounded-md hover:bg-gray-100 whitespace-nowrap font-bold text-md"
                  >
                    Testimonials
                  </button>
                </object>
                 <button
                  href="#0"
                  className="inline-block font-bold text-md relative"
                >
                  <img
                    src={isSticky ? blackdrop : dropdown}
                    width="15px"
                    alt="Dropdown Icon"
                  />
                </button>
              </button>
               <button
                href="#0"
                className={`${
                  isSticky ? "text-black" : "text-white"
                } px-4 inline-block font-bold text-md`}
              >
                Feature
              </button>
               <button
                href="#0"
                className={`${
                  isSticky ? "text-black" : "text-white"
                } group px-4 inline-block font-bold text-md relative`}
              >
                Pages
                 <button
                  href="#0"
                  className="inline-block font-bold text-md relative"
                >
                  <img
                    src={isSticky ? blackdrop : dropdown}
                    width="15px"
                    alt="Dropdown Icon"
                  />
                </button>
                <div className="container absolute w-[700px] -left-96 top-6 group-hover:block border bg-white p-3 rounded-md hidden">
                  <div className="flex">{/* Content here */}</div>
                </div>
              </button>
               <button
                href="#0"
                className={`${
                  isSticky ? "text-black" : "text-white"
                } px-4 inline-block font-bold text-md`}
              >
                Pricing
              </button>
               <button
                href="#0"
                className={`${
                  isSticky ? "text-black" : "text-white"
                } px-4 inline-block font-bold text-md`}
              >
                FAQs
              </button>
               <button
                href="#0"
                className={`${
                  isSticky ? "text-black" : "text-white"
                } px-4 inline-block font-bold text-md`}
              >
                Sign in
              </button>
               <button
                href="#0"
                className="text-white px-5 duration-500 ease-in-out hover:bg-transparent hover:border-white rounded-md border border-[#FF3277] inline-block font-bold text-md bg-[#FF3277] py-2"
              >
                Sign Up
              </button>
            </div>
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white"
              >
                <img src={menu} width="50px" alt="Menu Icon" />
              </button>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black">
             <button
              href="#0"
              className={`${
                isSticky ? "text-black" : "text-white"
              } block px-4 py-2 font-bold text-md  hover:bg-pink-500`}
            >
              About
            </button>
             <button
              href="#0"
              className={`${
                isSticky ? "text-black" : "text-white"
              } block px-4 py-2 font-bold text-md  hover:bg-pink-500`}
            >
              Feature
            </button>
             <button
              href="#0"
              className={`${
                isSticky ? "text-black" : "text-white"
              } block px-4 py-2 font-bold text-md  hover:bg-pink-500`}
            >
              Pages
            </button>
             <button
              href="#0"
              className={`${
                isSticky ? "text-black" : "text-white"
              } block px-4 py-2 font-bold text-md  hover:bg-pink-500`}
            >
              Pricing
            </button>
             <button
              href="#0"
              className={`${
                isSticky ? "text-black" : "text-white"
              } block px-4 py-2 font-bold text-md  hover:bg-pink-500`}
            >
              FAQs
            </button>
             <button
              href="#0"
              className={`${
                isSticky ? "text-black" : "text-white"
              } block px-4 py-2 font-bold text-md  hover:bg-pink-500`}
            >
              Sign in
            </button>
             <button
              href="#0"
              className="text-white block px-4 py-2 duration-500 ease-in-out hover:bg-transparent hover:border-white rounded-md border border-[#FF3277] font-bold text-md bg-[#FF3277]"
            >
              Sign Up
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};
export default Navbar;

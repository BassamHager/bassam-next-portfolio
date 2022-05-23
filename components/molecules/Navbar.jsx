import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// icons
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  // state
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // methods
  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  return (
    <div className="fixed flex w-full shadow-xl z-10">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px=16">
        <Image
          src="/../public/assets/images/Bassam-logo.png"
          alt="app icon"
          width="100"
          height="75"
        />
      </div>

      <div>
        {/* laptop menu */}
        <ul className="hidden md:flex">
          <Link href="/">
            <li className={linkItemLaptopStyle}>Home</li>
          </Link>
          <Link href="/">
            <li className={linkItemLaptopStyle}>About</li>
          </Link>
          <Link href="/">
            <li className={linkItemLaptopStyle}>Skills</li>
          </Link>
          <Link href="/">
            <li className={linkItemLaptopStyle}>Projects</li>
          </Link>
          <Link href="/">
            <li className={linkItemLaptopStyle}>Contact</li>
          </Link>
        </ul>

        <div onClick={toggleMobileMenu} className="md:hidden">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/* mobile */}
      {/* menu overlay */}
      <div
        // onClick={toggleMobileMenu} fix with z-index
        className={showMobileMenu ? mobileMenuOverlayStyle : ""}
      >
        {/* menu-aside */}
        <aside
          className={showMobileMenu ? menuAsideStyle : menuAsideHiddenStyle}
        >
          {/* menu top-section */}
          <div>
            {/* menu icon */}
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/assets/images/Bassam-logo.png"
                alt="app icon"
                width="80"
                height="60"
              />

              {/* closing icon */}
              <div
                onClick={toggleMobileMenu}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>

              {/* inviting text */}
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build a legendary app together 😀
              </p>
            </div>
          </div>

          {/* mobile menu */}
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className={linkItemMobileStyle}>Home</li>
              </Link>
              <Link href="/">
                <li className={linkItemMobileStyle}>About</li>
              </Link>
              <Link href="/">
                <li className={linkItemMobileStyle}>Skills</li>
              </Link>
              <Link href="/">
                <li className={linkItemMobileStyle}>Projects</li>
              </Link>
              <Link href="/">
                <li className={linkItemMobileStyle}>Contacts</li>
              </Link>
            </ul>

            {/*  */}
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's Connect
              </p>

              {/* social icons */}
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className={socialIconStyle}>
                  <FaLinkedinIn />
                </div>
                <div className={socialIconStyle}>
                  <FaGithub />
                </div>
                <div className={socialIconStyle}>
                  <AiOutlineMail />
                </div>
                <div className={socialIconStyle}>
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

// styles
const mobileMenuOverlayStyle =
  "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70";
const menuAsideStyle =
  "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 overflow-y-auto";
const menuAsideHiddenStyle = "fixed left-[-200%] p-10 ease-in duration-500";
const linkItemLaptopStyle = "ml-10 text-sm uppercase hover:border-b";
const linkItemMobileStyle = "py-4 text-sm";
const socialIconStyle =
  "rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300";

export default Navbar;

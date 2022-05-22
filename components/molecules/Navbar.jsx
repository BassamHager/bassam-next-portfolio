import React from "react";
import Image from "next/image";
import Link from "next/link";
// icons
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="fixed w-full shadow-xl z-10 one">
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
            <li className={linkItem_lg}>Home</li>
          </Link>
          <Link href="/">
            <li className={linkItem_lg}>About</li>
          </Link>
          <Link href="/">
            <li className={linkItem_lg}>Skills</li>
          </Link>
          <Link href="/">
            <li className={linkItem_lg}>Projects</li>
          </Link>
          <Link href="/">
            <li className={linkItem_lg}>Contact</li>
          </Link>
        </ul>

        <div className="pt-40">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/* menu overlay */}
      <div className="fixed left-0 top-0 w-full h-screen bg-black/70">
        {/* actual menu */}
        <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500">
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
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
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
                <li className={linkItem_sm}>Home</li>
              </Link>
              <Link href="/">
                <li className={linkItem_sm}>About</li>
              </Link>
              <Link href="/">
                <li className={linkItem_sm}>Skills</li>
              </Link>
              <Link href="/">
                <li className={linkItem_sm}>Projects</li>
              </Link>
              <Link href="/">
                <li className={linkItem_sm}>Contacts</li>
              </Link>
            </ul>

            {/*  */}
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's Connect
              </p>

              {/* social icons */}
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className={socialIcon}>
                  <FaLinkedinIn />
                </div>
                <div className={socialIcon}>
                  <FaGithub />
                </div>
                <div className={socialIcon}>
                  <AiOutlineMail />
                </div>
                <div className={socialIcon}>
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// styles
const linkItem_lg = "ml-10 text-sm uppercase hover:border-b";
const linkItem_sm = "py-4 text-sm";
const socialIcon =
  "rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300";

export default Navbar;

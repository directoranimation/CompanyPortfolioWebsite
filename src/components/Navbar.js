"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";
import logo from "../assets/DTF-Logo.png";
import Nav from "./Nav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full backdrop-blur-2xl top-0 fixed z-50">
      <div className="flex z-50 items-center justify-between px-6 md:px-10 py-2">
        <Link href="/">
          <Image src={logo} alt="logo" width={200} priority className="z-50"/>
        </Link>

        <div className="hidden md:flex">
          <Nav />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 z-50 transition-transform duration-1000 ease p-2 focus:outline-none"
        >
          {isOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
        </button>
      </div>

      <div
        className={`absolute top-0 w-full overflow-hidden h-[100vh] bg-white md:hidden transition-transform duration-500 ease ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Nav mobileClose={() => setIsOpen(false)} />
      </div>
    </header>
  );
};

export default Navbar;
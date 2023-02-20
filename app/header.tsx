import { FiArrowLeftCircle, FiDatabase } from "react-icons/fi";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="p-5 bg-blue-500 flex flex-row items-center justify-center gap-2">
      {/* <p className="font-bold text-white">A am header</p> */}
      <Link href="/">
        <FiDatabase className="text-white text-4xl" />
      </Link>
      <FiArrowLeftCircle className="text-white text-xl" />
      <p className="text-white text-xl">take me home</p>
    </header>
  );
};

export default Header;

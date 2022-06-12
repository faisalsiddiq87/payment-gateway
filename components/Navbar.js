import React from "react";
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className="flex flex-row items-center  justify-between px-20 py-10">
      <div className="flex flex-row items-center">
        <h1 className="font-bold italic text-2xl text-white mr-10"><Link href="/">Acme</Link></h1>
        <ul className="flex flex-row space-x-10">
          <li className="text-gray-400">
            <Link href="/transactions" className="text-gray-400 text-sm tracking-wide font-light" style="rgb(156 163 175/var(--tw-text-opacity));">
              Transactions
            </Link>
          </li>
          <li className="text-gray-400">
            <Link href="#" className="text-gray-400 text-sm tracking-wide font-light" style="rgb(156 163 175/var(--tw-text-opacity));">
              Product
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-row space-x-10 items-center">
        <button className="bg-[#272A30] text-gray-300 px-8 text-sm py-2 rounded-md shadow-xl drop-shadow-2xl">
          Sign in
        </button>
      </div>
    </div>
  );
};

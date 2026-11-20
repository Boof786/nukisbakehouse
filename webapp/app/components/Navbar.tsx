"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "./CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cart } = useCart(); // get cart

  return (
    <nav className="relative p-4 bg-white shadow flex items-center justify-between">
      <h1 className="text-2xl font-bold text-black">Nuki’s Bakehouse</h1>

      <div className="flex items-center gap-6">
        <Link href="/" className="hover:text-pink-500 text-black">Home</Link>
        <Link href="/about" className="hover:text-pink-500 text-black">About</Link>

        {/* SHOP DROPDOWN */}
        <div
          className="relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button className="hover:text-pink-500 text-black flex items-center gap-1">
            Shop <span className="text-sm">⌄</span>
          </button>

          <div
            className={`absolute top-full mt-2 w-44 rounded-lg bg-white shadow-lg overflow-hidden transition-all duration-200 ease-out
              ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}
            `}
          >
            <Link href="/cakes" className="block px-4 py-3 hover:bg-gray-100">Cakes</Link>
            <Link href="/cookies" className="block px-4 py-3 hover:bg-gray-100">Cookies</Link>
            <Link href="/treatboxes" className="block px-4 py-3 hover:bg-gray-100">Treat Boxes</Link>
            <Link href="/pastries" className="block px-4 py-3 hover:bg-gray-100">Pastries</Link>
          </div>
        </div>

        <Link href="/cart" className="relative hover:text-pink-500 text-black">
          🛒
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-pink-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

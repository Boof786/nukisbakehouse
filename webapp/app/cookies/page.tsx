"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import { useCart } from "../components/CartContext";

export default function CookiesPage() {
  const cookies = [
    { name: "Chocolate Chip Cookie", variants: "White / Milk / Dark", price: 8 },
    { name: "Brookie Square", variants: "", price: 15 },
    { name: "Cadbury Filled Cookie", variants: "", price: 12 },
    { name: "Nutella Stuffed Cookie", variants: "", price: 17 },
    { name: "Biscoff Stuffed Cookie", variants: "", price: 23 },
  ];

  const { addToCart } = useCart(); // declare hook at the top

  return (
    <>
      <Navbar />

      <main className="min-h-screen flex flex-col bg-white text-gray-900 px-6 py-12">
        <h1 className="text-4xl font-extrabold mb-12 text-center">Our Cookies</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {cookies.map((cookie, index) => (
            <div
              key={index}
              className="shadow-md rounded-lg p-6 bg-yellow-100 hover:shadow-xl transition flex flex-col items-center"
            >
              <div className="w-full h-40 rounded-lg bg-white flex items-center justify-center font-bold text-pink-500 text-lg">
                {cookie.name}
              </div>
              {cookie.variants && <p className="mt-2 text-gray-700">{cookie.variants}</p>}
              <p className="text-gray-900 font-semibold mt-2">R{cookie.price}</p>
              <button
                onClick={() => addToCart({ name: cookie.name, price: cookie.price })}
                className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

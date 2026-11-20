"use client";

import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Page() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen flex flex-col bg-white text-gray-900">

        {/* HERO */}
        <section className="relative w-full min-h-[75vh] bg-linear-to-b from-pink-100 via-white to-emerald-100 flex flex-col justify-center items-center text-center px-6 overflow-hidden">

          {/* floating decor blobs */}
          <div className="absolute top-10 left-10 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-emerald-200 rounded-full blur-3xl opacity-40"></div>

          {/* badge */}
          <span className="mb-5 px-5 py-2 rounded-full bg-white/80 backdrop-blur text-pink-600 text-sm font-semibold shadow-sm">
             Fresh • Handmade • Luxury Bakes
          </span>

          {/* heading */}
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 max-w-3xl leading-tight">
            Where Cute Meets <br />
            <span className="text-pink-500">Luxury Baking</span>
          </h2>

          {/* subtext */}
          <p className="mt-6 text-gray-700 max-w-lg text-lg">
            Beautifully crafted cakes, cookies & pastries — baked fresh, styled with love.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex gap-4 flex-wrap justify-center">
            <Link
              href="/cakes"
              className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 transition shadow-lg"
            >
              Shop Treats 🍰
            </Link>

            <Link
              href="/about"
              className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition shadow-md"
            >
              Our Story
            </Link>
          </div>
        </section>

        {/* divider */}
        <div className="w-24 h-1 bg-pink-300 rounded-full mx-auto my-14"></div>

        {/* FEATURED PRODUCTS */}
        <section className="py-16 px-6">
          <h3 className="text-2xl font-bold mb-8 text-center">Best Sellers</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* PRODUCT CARDS */}
            <div className="shadow-md rounded-lg p-4 bg-white hover:shadow-xl transition">
              <div className="w-full h-40 bg-yellow-100 rounded flex items-center justify-center text-pink-500 font-bold text-lg">
                Chocolate Chip Cookie
              </div>
              <p className="mt-2 text-gray-700">White / Milk / Dark</p>
              <p className="text-gray-900 font-semibold mt-2">R8</p>
              <button className="mt-3 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition">
                Add to Cart
              </button>
            </div>

            <div className="shadow-md rounded-lg p-4 bg-white hover:shadow-xl transition">
              <div className="w-full h-40 bg-yellow-100 rounded flex items-center justify-center text-pink-500 font-bold text-lg">
                Brookie Square
              </div>
              <p className="text-gray-900 font-semibold mt-2">R15</p>
              <button className="mt-3 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition">
                Add to Cart
              </button>
            </div>

            <div className="shadow-md rounded-lg p-4 bg-white hover:shadow-xl transition">
              <div className="w-full h-40 bg-yellow-100 rounded flex items-center justify-center text-pink-500 font-bold text-lg">
                Cadbury Filled Cookie
              </div>
              <p className="text-gray-900 font-semibold mt-2">R12</p>
              <button className="mt-3 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition">
                Add to Cart
              </button>
            </div>

            <div className="shadow-md rounded-lg p-4 bg-white hover:shadow-xl transition">
              <div className="w-full h-40 bg-yellow-100 rounded flex items-center justify-center text-pink-500 font-bold text-lg">
                Nutella Stuffed Cookie
              </div>
              <p className="text-gray-900 font-semibold mt-2">R17</p>
              <button className="mt-3 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition">
                Add to Cart
              </button>
            </div>

            <div className="shadow-md rounded-lg p-4 bg-white hover:shadow-xl transition">
              <div className="w-full h-40 bg-yellow-100 rounded flex items-center justify-center text-pink-500 font-bold text-lg">
                Biscoff Stuffed Cookie
              </div>
              <p className="text-gray-900 font-semibold mt-2">R23</p>
              <button className="mt-3 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="bg-emerald-50 py-16 px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Made With Love</h3>
          <p className="text-gray-700 max-w-xl mx-auto">
            We create fresh, handcrafted baked treats using premium ingredients.
            From cakes to pastries, everything is baked with care.
          </p>
          <Link href="/about" className="mt-6 inline-block text-pink-500 font-semibold">
            Read More →
          </Link>
        </section>

        {/* ADDRESS + HOURS */}
        <section className="py-12 px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Visit Us</h3>
          <p>📍 Street Name, City, South Africa</p>
          <p>🕒 Mon–Sat: 8am – 6pm</p>
        </section>

        {/* FOOTER */}
        <footer className="bg-black text-white py-10 px-6 text-center">
          <div className="flex justify-center gap-6 mb-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/delivery">Delivery</Link>
          </div>

          <div className="flex justify-center gap-6 mb-4">
            <a href="https://instagram.com" target="_blank">Instagram</a>
            <a href="https://facebook.com" target="_blank">Facebook</a>
            <a href="https://tiktok.com" target="_blank">TikTok</a>
          </div>

          <p className="text-sm opacity-70">© 2025 Nuki’s Bakehouse</p>
        </footer>
      </main>
    </>
  );
}

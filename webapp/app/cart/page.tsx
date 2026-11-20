"use client";

import Navbar from "../components/Navbar";
import { useCart } from "../components/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <>
      <Navbar />

      <main className="min-h-screen p-6 bg-white text-gray-900">
        <h1 className="text-4xl font-bold mb-8 text-center">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-700">Your cart is empty.</p>
        ) : (
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 bg-yellow-100 rounded shadow"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-700">R{item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.name)}
                  className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="flex justify-between items-center mt-4 p-4 bg-white rounded shadow">
              <p className="font-bold">Total:</p>
              <p className="font-bold">
                R{cart.reduce((sum, item) => sum + item.price, 0)}
              </p>
            </div>

            <button
              onClick={clearCart}
              className="mt-4 w-full bg-gray-800 text-white py-3 rounded hover:bg-gray-900 transition"
            >
              Clear Cart
            </button>
          </div>
        )}

        <div className="mt-10 text-center">
          <Link href="/" className="text-pink-500 font-semibold">
            ← Continue Shopping
          </Link>
        </div>
      </main>
    </>
  );
}

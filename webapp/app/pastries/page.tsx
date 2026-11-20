"use client";
export default function Page() {
  const products = [
    { name: "Croissant", price: 35 },
    { name: "Danish", price: 40 },
    { name: "Eclair", price: 50 },
  ];

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Pastries</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <div className="w-full h-40 bg-gray-200 rounded mb-4"></div>
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p className="text-gray-600">R{p.price}</p>
            <button className="mt-3 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

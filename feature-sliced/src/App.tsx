import React, { useState } from "react";

const initialProducts = [
  { id: "1", name: "Elma", price: 10 },
  { id: "2", name: "Armut", price: 12 },
  { id: "3", name: "Muz", price: 15 },
];

export default function App() {
  const [cart, setCart] = useState<string[]>([]);

  const addToCart = (id: string) => {
    setCart([...cart, id]);
  };

  return (
    <div className="p-6 font-sans max-w-4xl mx-auto">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Mini Mağaza</h1>
        <div className="text-sm text-gray-700">Sepette: {cart.length}</div>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {initialProducts.map((p) => (
          <article key={p.id} className="bg-white rounded-xl p-4 shadow">
            <div className="h-32 flex items-center justify-center bg-gray-100 rounded-md mb-3">
              <span className="text-gray-400">Resim</span>
            </div>
            <h3 className="font-semibold text-lg">{p.name}</h3>
            <p className="text-gray-600">{p.price} ₺</p>
            <button
              className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={() => addToCart(p.id)}
            >
              Sepete Ekle
            </button>
          </article>
        ))}
      </section>

      <aside className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Sepet</h2>
        <ul className="list-disc ml-6">
          {cart.map((id, idx) => {
            const prod = initialProducts.find((p) => p.id === id);
            return <li key={idx}>{prod?.name}</li>;
          })}
        </ul>
      </aside>
    </div>
  );
}

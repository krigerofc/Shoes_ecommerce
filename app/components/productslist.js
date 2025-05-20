'use client'
import { useEffect, useState } from "react";
import ProductCard from "./cards";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/newshoes")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => setProducts([]));
  }, []);

  return (
    <section id="produtos" className="py-12 px-4 sm:px-6 lg:px-8 mb-14 mt-8">
      <div className="max-w-7x1 mx-auto">
      <h2 className="mx-auto w-fit rounded-full bg-white shadow-lg px-8 py-4 font-roboto text-3xl font-bold text-gray-800 mb-12 text-center -tracking-tight uppercase">
        Top Lançamentos
      </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">Nenhum produto encontrado.</p>
          ) : (
            products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
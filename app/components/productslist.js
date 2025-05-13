import ProductCard from "./cards";

const mockProducts = [
  { id: "1", name: "Tênis Azul", image: "https://imgnike-a.akamaihd.net/360x360/029349ND.jpg", price: 299.99 },
  { id: "2", name: "Tênis Branco", image: "/shoes/tenis.jpg", price: 249.90 },
  { id: "3", name: "Tênis Corrida", image: "/shoes/tenis.jpg", price: 389.00 },
  { id: "4", name: "Tênis Street", image: "/shoes/tenis.jpg", price: 199.50 },
  { id: "5", name: "Tênis Azul", image: "/shoes/tenis.jpg", price: 299.99 },
  { id: "6", name: "Tênis Branco", image: "/shoes/tenis.jpg", price: 249.90 },
  { id: "7", name: "Tênis Corrida", image: "/shoes/tenis.jpg", price: 389.00 },
  { id: "8", name: "Tênis Street", image: "/shoes/tenis.jpg", price: 199.50 },
];

export default function ProductList() {
  return (
    <section id="produtos" className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center tracking-wider uppercase">Mais vendidos</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

'use client'
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";

const ProductView = ({ produto }) => {
  const router = useRouter();

  if (!produto) {
    return <div className="text-red-600 text-center mt-10">Produto não encontrado.</div>;
  }

  const handleAddToCart = async () => {
    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: produto.id }),
      });
      if (res.status === 401) {
        router.push("/login");
        return;
      }
      // Aqui você pode adicionar um toast ou feedback de sucesso se quiser
    } catch (error) {
      console.error("Erro ao adicionar ao carrinho:", error);
    }
  };

  return (
    <section className="mt-20 w-full max-h-4/5 py-8 px-80 bg-white rounded-none shadow-none p-0 flex flex-col md:flex-row gap-8 text-black">
      <div className="flex-shrink-0 flex justify-center items-center w-full md:w-1/2 bg-gray-100">
        <Image
          src={produto.imageUrl}
          alt={produto.name}
          width={400}
          height={400}
          className="rounded-xl object-cover"
          priority
        />
      </div>
      <div className="flex-1 flex flex-col justify-between p-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">{produto.name}</h1>
          <p className="mb-4">{produto.category}</p>
          <p className="text-2xl font-extrabold mb-2">R$ {produto.price?.toFixed(2)}</p>
          <p className="mb-4">{produto.description}</p>
          <div className="mb-4">
            <span className="font-semibold">Tamanho:</span>{" "}
            <span className="bg-gray-200 px-3 py-1 rounded-lg ml-2">{produto.size}</span>
          </div>
        </div>
        <button
          className="mt-6 bg-black text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-800 transition flex items-center justify-center gap-2"
          onClick={handleAddToCart}
        >
          <FaPlus /> Adicionar ao carrinho
        </button>
      </div>
    </section>
  );
};

export default ProductView;
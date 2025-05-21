'use client'
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const tamanhosDisponiveis = [37, 38, 39, 40, 41];

const ProductView = ({ produto, userId }) => {
  const router = useRouter();
  const [quantidade, setQuantidade] = useState(1);
  const [tamanho, setTamanho] = useState(39);

  if (!produto) {
    return <div className="text-red-600 text-center mt-10">Produto não encontrado.</div>;
  }

  const handleAddToCart = async () => {
    try {
      const res = await fetch("/api/addcart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          UserID: userId,
          ProductID: produto.id,
          Quantidade: quantidade,
          Tamanho: tamanho
        }),
      });
      if (res.status === 401) {
        router.push("/login");
        return;
      }
      if (!res.ok) {
        toast.error("Erro ao adicionar ao carrinho!");
        return;
      }
      toast.success("Produto adicionado ao carrinho!");
    } catch (error) {
      toast.error("Erro ao adicionar ao carrinho!");
      console.error("Erro ao adicionar ao carrinho:", error);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <section className="mt-10 w-full max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-4 md:p-8 flex flex-col md:flex-row gap-8 text-black">
        <div className="flex-shrink-0 flex justify-center items-center w-full md:w-1/2 bg-gray-100 rounded-xl min-h-[220px]">
          <Image
            src={produto.imageUrl}
            alt={produto.name}
            width={260}
            height={260}
            className="rounded-xl object-cover"
            priority
          />
        </div>
        <div className="flex-1 flex flex-col justify-between p-2 md:p-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{produto.name}</h1>
            <p className="mb-2">{produto.category}</p>
            <p className="text-xl md:text-2xl font-extrabold mb-2">R$ {produto.price?.toFixed(2)}</p>
            <p className="mb-4">{produto.description}</p>
            <div className="mb-4 flex items-center gap-2 flex-wrap">
              <span className="font-semibold">Tamanho:</span>
              <select
                value={tamanho}
                onChange={e => setTamanho(Number(e.target.value))}
                className="bg-gray-200 px-3 py-1 rounded-lg ml-2 text-black"
              >
                {tamanhosDisponiveis.map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <div className="mb-4 flex items-center gap-2 flex-wrap">
              <span className="font-semibold">Quantidade:</span>
              <input
                type="number"
                min={1}
                max={99}
                value={quantidade}
                onChange={e => setQuantidade(Number(e.target.value))}
                className="w-16 px-2 py-1 border rounded text-black"
              />
            </div>
          </div>
          <button
            className="mt-6 bg-black text-white px-6 py-3 rounded-full font-bold text-base md:text-lg hover:bg-gray-800 transition flex items-center justify-center gap-2 w-full md:w-auto"
            onClick={handleAddToCart}
          >
            <FaPlus /> Adicionar ao carrinho
          </button>
        </div>
      </section>
    </>
  );
};

export default ProductView;
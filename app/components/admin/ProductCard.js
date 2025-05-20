import { FiEdit2, FiTrash2 } from "react-icons/fi";

export default function ProductCardAdmin({ product, onEdit, onDelete }) {
  // Limita a descrição a 80 caracteres
  const maxDescLength = 80;
  const shortDescription =
    product.description.length > maxDescLength
      ? product.description.slice(0, maxDescLength) + "..."
      : product.description;

  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
      <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="object-contain h-full max-h-44"
        />
      </div>
      <div className="flex-1 flex flex-col p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-1 truncate">{product.name}</h3>
        <p className="text-blue-700 text-xl font-semibold mb-2">R$ {product.price.toFixed(2)}</p>
        <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-2">
          <span className="bg-gray-100 px-2 py-1 rounded">Categoria: {product.category}</span>
          <span className="bg-gray-100 px-2 py-1 rounded">Tamanho: {product.size}</span>
        </div>
        <p className="text-gray-700 text-sm mb-3">{shortDescription}</p>
        <div className="flex justify-between items-center mt-auto">
          <button
            onClick={() => onEdit(product)}
            className="text-blue-600 hover:text-blue-800 transition-all duration-200"
            title="Editar Produto"
          >
            <FiEdit2 size={22} />
          </button>
          <button
            onClick={() => onDelete(product.id)}
            className="text-red-600 hover:text-red-800 transition-all duration-200"
            title="Deletar Produto"
          >
            <FiTrash2 size={22} />
          </button>
        </div>
        <div className="flex justify-between mt-3 text-[10px] text-gray-400">
          <span>Criado: {new Date(product.createdAt).toLocaleDateString()}</span>
          <span>Atualizado: {new Date(product.updatedAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
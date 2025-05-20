"use client";

import { useState, useEffect } from "react";
import { FiTrash2, FiPlus, FiX, FiEdit2 } from "react-icons/fi";
import ProductCardAdmin from "./ProductCard";

export default function ProductPanel() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    size: "",
    image: "",
    description: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Buscar produtos
  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/admin/productlist");
      if (!res.ok) return;
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Adicionar ou editar produto
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, price, category, size, image, description } = formData;
    if (!name || !price || !category || !size || !image || !description) return;

    const newProduct = {
      name,
      price: parseFloat(price),
      category,
      size,
      image,
      description,
    };

    try {
      if (editingId) {

        await fetch("/api/admin/adminedit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingId, ...newProduct }),
        });
      } else {

        await fetch("/api/admin/createproduct", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newProduct),
        });
      }
      fetchProducts();
      setFormData({ name: "", price: "", category: "", size: "", image: "", description: "" });
      setShowForm(false);
      setEditingId(null);
    } catch (error) {
      console.error("Erro ao adicionar/editar produto:", error);
    }
  };

  // Deletar produto
  const handleDelete = async (id) => {
    try {
      await fetch("/api/admin/admindelete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      fetchProducts();
    } catch (error) {
      console.error("Erro ao deletar produto:", error);
    }
  };

  // Iniciar edição
  const handleEdit = (product) => {
    setFormData({
      name: product.name,
      price: product.price,
      category: product.category,
      size: product.size,
      image: product.imageUrl,
      description: product.description,
    });
    setEditingId(product.id);
    setShowForm(true);
  };

  // Fechar formulário
  const handleCloseForm = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({ name: "", price: "", category: "", size: "", image: "", description: "" });
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-8 flex-1 text-black">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold text-blue-600">Produtos</h2>
        <button
          onClick={() => {
            setShowForm(true);
            setEditingId(null);
            setFormData({ name: "", price: "", category: "", size: "", image: "", description: "" });
          }}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
        >
          <FiPlus size={18} /> Adicionar Produto
        </button>
      </div>

      {/* Formulário para adicionar/editar produto */}
      {showForm && (
        <div className="fixed inset-0 bg-black opacity-96 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm relative">
            <button
              onClick={handleCloseForm}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
              title="Fechar"
            >
              <FiX size={20} />
            </button>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              {editingId ? "Editar Produto" : "Novo Produto"}
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border p-2 rounded"
              />
              <input
                type="number"
                placeholder="Preço"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Categoria"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Tamanho"
                value={formData.size}
                onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Imagem (URL)"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="border p-2 rounded"
              />
              <textarea
                placeholder="Descrição"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="border p-2 rounded"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-all duration-300 mt-2"
              >
                {editingId ? "Salvar Alterações" : "Salvar Produto"}
              </button>
            </form>
          </div>
        </div>
      )}

    {products.length === 0 ? (
      <p className="text-gray-600">Nenhum produto encontrado.</p>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCardAdmin
            key={product.id}
            product={product}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    )}
    </div>
  );
}
'use client'
import { useEffect, useState } from 'react'
import ProductCard from '../components/cards'

const ProductListePage = () => {
  const [produtos, setProdutos] = useState([])
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('')
  const [numeroSelecionado, setNumeroSelecionado] = useState('')

  useEffect(() => {
    const fetchProdutos = async () => {
      const res = await fetch('/api/newshoes') 
      const data = await res.json()
      setProdutos(data)
    }

    fetchProdutos()
  }, [])

  const categorias = ['Todos', 'Casual', 'Esportivo']
  const numeros = [36, 37, 38, 39, 40, 41, 42, 43]

  const produtosFiltrados = produtos.filter(produto => {
    const categoriaOk = categoriaSelecionada === '' || categoriaSelecionada === 'Todos' || produto.category === categoriaSelecionada
    const numeroOk = numeroSelecionado === '' || produto.size === Number(numeroSelecionado)
    return categoriaOk && numeroOk
  })

  return (
    <main className="flex flex-col md:flex-row px-4 md:px-8 py-10 gap-10 max-w-7xl mx-auto">
      {/* Menu Lateral */}
    <aside className="w-full md:w-56 mb-8 md:mb-0 text-black bg-white rounded-2xl shadow-lg p-6">
    <div className="mb-8">
        <h2 className="text-lg font-bold mb-3 tracking-wide uppercase">Categorias</h2>
        <ul className="space-y-2">
        {categorias.map(cat => (
            <li key={cat}>
            <button
                onClick={() => setCategoriaSelecionada(cat)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 font-medium
                ${categoriaSelecionada === cat
                    ? 'bg-black text-white shadow'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}
                `}
            >
                {cat}
            </button>
            </li>
        ))}
        </ul>
    </div>

    <div>
        <h2 className="text-lg font-bold mb-3 tracking-wide uppercase">Número</h2>
        <div className="grid grid-cols-3 gap-2 text-sm">
        {numeros.map(n => (
            <button
            key={n}
            onClick={() => setNumeroSelecionado(n.toString())}
            className={`border rounded-lg px-3 py-2 font-semibold transition-all duration-200
                ${numeroSelecionado == n
                ? 'bg-black text-white shadow'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}
            `}
            >
            {n}
            </button>
        ))}
        <button
            onClick={() => setNumeroSelecionado('')}
            className="col-span-3 text-left text-xs mt-2 underline text-gray-600 hover:text-black"
        >
            Limpar filtro
        </button>
        </div>
    </div>
    </aside>

      {/* Grid de Produtos */}
      <section className="flex-1">
        {produtosFiltrados.length === 0 ? (
          <p className="text-gray-500">Nenhum produto encontrado.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {produtosFiltrados.map(produto => (
              <ProductCard key={produto.id} {...produto} />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default ProductListePage;
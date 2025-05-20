'use client'
import Link from 'next/link'
import { FaShoePrints, FaShoppingCart, FaUserCircle, FaBars } from 'react-icons/fa'
import { useState } from 'react'
import { Roboto } from 'next/font/google'
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={`flex justify-between items-center px-4 md:px-8 py-4 shadow-md bg-white text-black h-20 uppercase relative ${roboto.className}`}>
      <Link href="/" className="flex items-center gap-2 text-3xl font-bold text-black">
        <FaShoePrints />
        ShoeStore
      </Link>

      {/* Menu hamburguer mobile */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menu"
      >
        <FaBars />
      </button>

      {/* Menu desktop */}
      <ul className="hidden md:flex gap-4 md:gap-6 text-base md:text-xl items-center">
        <li>
          <Link href="/" className="hover:text-gray-700 transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/products" className="hover:text-gray-700 transition">
            Produtos
          </Link>
        </li>
        <li>
          <Link href="/profile" className="hover:text-gray-700 transition" title="Perfil">
            <FaUserCircle size={28} />
          </Link>
        </li>
        <li>
          <Link href="/cart" className="hover:text-gray-700 transition" title="Carrinho">
            <FaShoppingCart size={24} />
          </Link>
        </li>
      </ul>

      {/* Menu mobile */}
      {open && (
        <ul className="absolute top-full right-0 left-0 bg-white shadow-md flex flex-col items-center gap-4 py-6 z-50 md:hidden animate-fade-in">
          <li>
            <Link href="/" className="hover:text-gray-700 transition" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-gray-700 transition" onClick={() => setOpen(false)}>
              Produtos
            </Link>
          </li>
          <li>
            <Link href="/profile" className="hover:text-gray-700 transition" title="Perfil" onClick={() => setOpen(false)}>
              <FaUserCircle size={28} />
            </Link>
          </li>
          <li>
            <Link href="/cart" className="hover:text-gray-700 transition" title="Carrinho" onClick={() => setOpen(false)}>
              <FaShoppingCart size={24} />
            </Link>
          </li>
        </ul>
      )}
    </nav>
  )
}
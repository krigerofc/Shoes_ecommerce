import Link from 'next/link'
import { FaShoePrints, FaShoppingCart } from 'react-icons/fa'

export default function Nav() {
  return (
    <nav className="flex justify-between items-center px-4 md:px-8 py-4 shadow-md bg-blue-600 text-white h-20 uppercase">
      <Link href="/" className="flex items-center gap-2 text-3xl font-bold">
        <FaShoePrints />
        ShoeStore
      </Link>

      <ul className="flex gap-4 md:gap-6 text-base md:text-xl items-center">
        <li>
          <Link href="/" className="hover:text-gray-200 transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/cart" className="flex items-center gap-2 hover:text-gray-200 transition">
            <FaShoppingCart />
            Carrinho
          </Link>
        </li>
      </ul>
    </nav>
  )
}

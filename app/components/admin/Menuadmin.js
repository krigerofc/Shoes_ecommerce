// app/(admin)/admin/layout.jsx
"use client";

import { useSession } from "next-auth/react";
import { FaUserCircle, FaTachometerAlt, FaBoxOpen, FaUsers } from 'react-icons/fa';
import Link from "next/link";

export default function MenuAdmin({ children }) {
  const { data: session } = useSession();

   return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white flex flex-col justify-between py-6 px-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-2xl">
              <FaUserCircle />
            </div>
            <div>
              <p className="font-semibold">{session?.user?.name || "Admin"}</p>
              <p className="text-sm text-gray-400">Administrador</p>
            </div>
          </div>

          <hr className="my-4 border-gray-600" />

          <nav className="flex flex-col gap-3">
            <Link href="/admin/dashboard" className="hover:text-yellow-400 transition flex items-center gap-2">
              <FaTachometerAlt />
              Dashboard
            </Link>
            <Link href="/admin/products" className="hover:text-yellow-400 transition flex items-center gap-2">
              <FaBoxOpen />
              Produtos
            </Link>
            <Link href="/admin/users" className="hover:text-yellow-400 transition flex items-center gap-2">
              <FaUsers />
              Usuários
            </Link>
          </nav>
        </div>
      </aside>

      <main className="flex-1 bg-white p-6">
        {children}
      </main>
    </div>
  );
}

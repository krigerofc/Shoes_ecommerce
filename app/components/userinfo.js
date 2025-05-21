'use client'
import { useEffect, useState } from "react";
import { FaUserCircle, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaUserEdit } from "react-icons/fa";

const UserInfo = ({ userEmail }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/profile', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: userEmail }),
        });
        const data = await res.json();
        setUser(data.user || null);
      } catch (error) {
        setUser(null);
      }
      setLoading(false);
    };
    if (userEmail) fetchUser();
  }, [userEmail]);

  if (loading) return <div className="text-center text-black py-8">Carregando...</div>;
  if (!user) return <div className="text-center text-black py-8">Usuário não encontrado.</div>;

  return (
    <div className="max-w-xl mx-auto bg-gradient-to-br from-gray-100 to-gray-300 rounded-2xl shadow-2xl p-8 mt-12 text-black">
      <div className="flex flex-col items-center mb-6">
        <div className="bg-white rounded-full shadow-lg p-3 mb-2">
          <FaUserCircle size={70} className="text-gray-700" />
        </div>
        <h2 className="text-3xl font-bold mb-1 flex items-center gap-2">
          <FaUserEdit className="text-blue-600" /> {user.name}
        </h2>
        <span className="text-gray-500 font-medium">{user.role === "admin" ? "Administrador" : "Cliente"}</span>
      </div>
      <div className="space-y-4 mt-6">
        <div className="flex items-center gap-3 bg-white rounded-lg shadow px-4 py-3">
          <FaEnvelope className="text-blue-500" />
          <span className="font-semibold">E-mail:</span>
          <span className="ml-1">{user.email}</span>
        </div>
        <div className="flex items-center gap-3 bg-white rounded-lg shadow px-4 py-3">
          <FaMapMarkerAlt className="text-green-600" />
          <span className="font-semibold">Endereço:</span>
          <span className="ml-1">{user.address || "Não cadastrado"}</span>
        </div>
        <div className="flex items-center gap-3 bg-white rounded-lg shadow px-4 py-3">
          <FaPhoneAlt className="text-purple-600" />
          <span className="font-semibold">Telefone:</span>
          <span className="ml-1">{user.phone || "Não cadastrado"}</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
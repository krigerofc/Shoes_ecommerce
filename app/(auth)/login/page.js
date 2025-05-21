"use client"; // Diretiva para marcar o componente como Client Component

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation"; // Para navegação no frontend

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validando e-mail
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!validEmail.test(email)) {
      setError("Digite um e-mail válido.");
      return;
    }

    // Validando campos preenchidos
    if (!email || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    // Fazendo a chamada para a API de login
    const res = await signIn("credentials", {
    redirect: false,
    email,
    password,
    });


    // Verifique se a resposta é válida antes de tentar transformá-la em JSON
    if (res?.error) {
      setError("E-mail ou senha inválidos.");
    } else if (res?.ok) {
      router.push("/");
    }
  };
  
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4 text-black">Login Shoestore</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">E-mail</label>
            <input
              type="email"
              className=" text-black w-full p-2 border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Senha</label>
            <input
              type="password"
              className="text-black w-full p-2 border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

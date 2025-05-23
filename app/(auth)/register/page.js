"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

  const onlyLetters = /^[A-Za-zÀ-ÿ\s]+$/;
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!onlyLetters.test(form.name)) {
    setError("O nome deve conter apenas letras.");
    return;
  }

  if (!validEmail.test(form.email)) {
    setError("Digite um e-mail válido.");
    return;
  }

    if (form.password !== form.confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Erro ao registrar.");
      } else {
        setSuccess("Registro feito com sucesso!");
        router.push("/login");
      }
    } catch (err) {
      setError("Erro interno. Tente novamente.");
    }
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-gray-950 text-center">Registrar</h2>

      {error && <p className="text-red-600 mb-2">{error}</p>}
      {success && <p className="text-green-600 mb-2">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded text-gray-950"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded text-gray-950"
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded text-gray-950"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirme sua senha"
          value={form.confirmPassword}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded text-gray-950"
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
          Criar conta
        </button>
      </form>
    </div>
  </div>
);
}

// app/api/login/route.js

import { NextResponse } from 'next/server';
import { signIn } from "next-auth/react";

export async function POST(req) {
  const { email, password } = await req.json(); // Obtém os dados enviados pelo frontend

  if (!email || !password) {
    return NextResponse.json({ error: 'Por favor, preencha todos os campos.' }, { status: 400 });
  }

    const res = await signIn("credentials", {
    redirect: false,
    email,
    password,
    });

  if (res?.error) {
    return NextResponse.json({ error: 'Email ou senha incorretos.' }, { status: 400 });
  }

  // Resposta de sucesso
  return NextResponse.json({ success: true, message: 'Login realizado com sucesso.' });
}

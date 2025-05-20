// src/components/Header.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-gray-100 relative h-[90vh] w-full">
    <div className="absolute inset-0 bg-black opacity-75 z-10" />
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bannershoes.jpg" // Certifique-se de que a imagem está na pasta public
          alt="Banner de tênis"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Filtro preto */}


      {/* Conteúdo central */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-20">
        <h1 className="text-white text-4xl md:text-5xl font-bold max-w-2xl leading-tight font-roboto -tracking-tight">
          Estilo e Performance em Cada Passo
        </h1>
        <p className="mt-4 text-gray-200 max-w-md text-lg">
          Descubra os tênis ideais para seu dia a dia.
        </p>
        <Link href="#produtos"  className="font-roboto -tracking-tight mt-8 inline-block bg-white uppercase text-black font-semibold px-10 py-5 rounded-full text-xl md:text-2xl shadow-lg hover:bg-gray-200 transition-all">
            Ver produtos
        </Link>
      </div>
    </header>
  );
}

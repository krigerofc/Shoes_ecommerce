import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const testimonials = [
  {
    nome: "João Silva",
    mensagem: "Adorei o tênis! Perfeito para a minha corrida diária.",
    foto: "/users/user1.jpg",
    avaliacao: 5,
  },
  {
    nome: "Maria Oliveira",
    mensagem: "Ótima qualidade e conforto. Super recomendo!",
    foto: "/users/user6.jpg",
    avaliacao: 5,
  },
  {
    nome: "Carlos Souza",
    mensagem: "Entrega rápida e produto excelente!",
    foto: "/users/user2.jpg",
    avaliacao: 5,
  },
  {
    nome: "Ana Paula",
    mensagem: "Design bonito e super confortável.",
    foto: "/users/user4.jpg",
    avaliacao: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        O que nossos clientes dizem
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((t, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 w-72">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={t.foto}
                  alt={t.nome}
                  width={48}
                  height={48}
                  objectFit="cover"
                />
              </div>
              <span className="font-semibold text-gray-900">{t.nome}</span>
            </div>
            <p className="text-gray-700 mb-4">"{t.mensagem}"</p>
            <div className="flex">
              {[...Array(5)].map((_, i) =>
                i < t.avaliacao ? (
                  <AiFillStar key={i} className="text-yellow-400" />
                ) : (
                  <AiOutlineStar key={i} className="text-gray-300" />
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

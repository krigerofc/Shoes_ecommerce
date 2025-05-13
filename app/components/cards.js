import Image from "next/image";
import Link from "next/link";
import { FaStar, FaRegStar } from "react-icons/fa";

export default function ProductCard({ id, name, image, price, rating = 4 }) {
  const originalPrice = (price * 1.3).toFixed(2);

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <FaStar key={i} className="text-yellow-400" />
        ) : (
          <FaRegStar key={i} className="text-yellow-400" />
        )
      );
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative w-full h-56">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="hover:scale-105 transition-transform"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>

        <div className="flex items-center mt-1 gap-1">
          {renderStars()}
        </div>

        <div className="mt-2">
          <p className="text-sm text-gray-500 line-through">De R$ {originalPrice}</p>
          <p className="text-gray-800 font-extrabold text-xl">Por R$ {price.toFixed(2)}</p>
        </div>

        <Link href={`/produto/${id}`} className="mt-4 inline-block bg-blue-600 text-amber-50 font-semibold px-4 py-2 rounded-md hover:bg-blue-800 transition-all">
            Ver mais
        </Link>
      </div>
    </div>
  );
}

const MaratonaCard = ({ title, image, href }) => {
  return (
    <a href={href} className="block group overflow-hidden shadow-md transition hover:scale-105">
      <div className="relative w-full h-[600px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="bg-black text-white text-center py-3 font-semibold">
        {title}
      </div>
    </a>
  );
};

export default MaratonaCard;

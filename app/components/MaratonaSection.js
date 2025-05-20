import MaratonaCard from './maratonaCard';

const MaratonaSection = () => {
  return (
    <section className="py-10 bg-white h-[500px]:">
      <div className="text-center mb-12">
        <h2 className="font-roboto uppercase text-3xl font-bold text-gray-900 -tracking-tighter mt-2">
          Cada quilômetro conta no caminho para a maratona
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-8xl mx-auto px-4">
        <MaratonaCard
          title="Tênis de corridas diárias"
          image="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_400,w_400/card_1_supernova_d_6d0ca26118.jpg"
          href="/products"
        />
        <MaratonaCard
          title="Bem estar & Estilo Durante O Dia"
          image="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_400,w_400/card_2_supernova_d_32f1ea75fe.jpg"
          href="/products"
        />
        <MaratonaCard
          title="Durabilidade & Resistência"
          image="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_400,w_400/5409050_SUPERNOVA_SS_25_LAM_DAT_ONSITE_Collection_Wayfinding_720x1054_3_1_f304e2b490.jpg"
          href="/products"
        />
        <MaratonaCard
          title="Conforto Total Para você"
          image="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_400,w_400/card_4_supernova_d_b4aa17af68.jpg"
          href="/products"
        />
      </div>
    </section>
  );
};

export default MaratonaSection;

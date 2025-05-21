import Nav from "@/app/components/nav";
import ProductList from "@/app/components/productslist";
import ProductView from "@/app/components/Productview";
import Footer from "@/app/components/rodape";
import { getServerSession } from "next-auth"; // ajuste o import conforme seu setup
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // ajuste o caminho conforme seu projeto

export default async function IDproduct({ params }) {
    const id = params.id;
    const fetchProducts = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
        const res = await fetch(`${baseUrl}/api/viewproduct`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
          cache: "no-store"
        });
        if (!res.ok) return null;
        const data = await res.json();
        return data;
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        return null;
      }
    };

    const produto = await fetchProducts();

    const session = await getServerSession(authOptions);
    const userId = session?.user?.id ?? null;

    return (
        <>
            <Nav/>
            <ProductView produto={produto} userId={userId} />
            <ProductList/>
            <Footer/>
        </>
    );
}
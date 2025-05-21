import Nav from "@/app/components/nav";
import Footer from "@/app/components/rodape";
import UserInfo from "@/app/components/userinfo";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function ProfilePage() {
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-gray-50 py-8">
        <h1 className="text-3xl font-bold text-center text-black mb-8">Meu Perfil</h1>
        <UserInfo userEmail={userEmail} />
      </div>
      <Footer />
    </>
  );
}
import { Providers } from "@/app/components/provider";
import MenuAdmin from "../components/admin/Menuadmin";

export default function AdminLayout({ children }) {
  return (
    <Providers>
    <div className="flex h-screen">
      <MenuAdmin />
      <div className="flex-1 p-6 overflow-auto bg-gray-50">
        {children}
      </div>
    </div>
    </Providers>
  );
}

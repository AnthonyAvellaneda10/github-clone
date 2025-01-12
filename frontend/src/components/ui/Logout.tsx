import { LogOut } from "lucide-react";
import toast from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";

interface LogoutProps {
  onClose: () => void;
}

export default function Logout({ onClose }: LogoutProps) {
  const { setAuthUser } = useAuthContext();

  const handleLogout = async () => {
    try {
      // Llama al API para desloguear
      const res = await fetch("/api/auth/logout", { credentials: "include" });
      const data = await res.json();
      console.log(data);

      // Actualiza el contexto para indicar que no hay usuario autenticado
      setAuthUser(null);

      // Cierra el drawer
      onClose();
    } catch (error: any) {
      toast.error(error.message || "Logout failed");
    }
  };

  return (
    <div
      onClick={handleLogout}
      className="cursor-pointer flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-[#30363d] transition duration-300"
    >
      <LogOut className="h-4 w-4" />
      Sign out
    </div>
  );
}

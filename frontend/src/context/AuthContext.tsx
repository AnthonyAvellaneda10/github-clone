import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

// Especifica el tipo del contexto
interface AuthContextType {
  authUser: any; // Puedes reemplazar `any` con un tipo específico de usuario si lo tienes
  setAuthUser: React.Dispatch<React.SetStateAction<any>>;
  loading: boolean;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuthContext debe estar dentro de un AuthContextProvider"
    );
  }

  return context;
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/auth/check", { credentials: "include" });
        const data = await res.json();
        setAuthUser(data.user); // null o el objeto del usuario autenticado
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message); // Error manejado adecuadamente
        } else {
          toast.error("Ocurrió un error desconocido");
        }
      } finally {
        setLoading(false);
      }
    };
    checkUserLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

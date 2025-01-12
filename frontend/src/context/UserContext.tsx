import React, {
  FormEvent,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { Repository } from "../components/RepositoryList";
import { Profile } from "../components/ProfileInfo";
import { Follow } from "../interfaces/follow.interface";

interface UserContextType {
  userProfile: any;
  repos: any[];
  followers: any[];
  following: any[];
  loading: boolean;
  setUserProfileAndRepos: (username: string) => void;
  setUserProfileAndFollowers: (username: string) => void;
  setUserProfileAndFollowing: (username: string) => void;
  onSearch: (e: FormEvent, username: string) => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userProfile, setUserProfile] = useState<Profile | null | undefined>(
    undefined
  ); // Estado inicial: undefined
  const [repos, setRepos] = useState<Repository[]>([]);
  const [followers, setFollowers] = useState<Follow[]>([]);
  const [following, setFollowing] = useState<Follow[]>([]);
  const [loading, setLoading] = useState(false);

  // Función para obtener repos
  const setUserProfileAndRepos = useCallback(async (username: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/users/profile/${username}`);
      const { repos, userProfile } = await res.json();

      repos.sort(
        (a: Repository, b: Repository) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
      
      setRepos(repos);
      setUserProfile(userProfile);
      // Devuelvo los valores para que se puedan usar en onSearch
      return { userProfile, repos };
    } catch (error) {
      setUserProfile(null);
      setRepos([]);
      return { userProfile: null, repos: [] };
    } finally {
      setLoading(false);
    }
  }, []);
  // Función para obtener followers
  const setUserProfileAndFollowers = useCallback(async (username: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/users/profile/followers/${username}`);
      const { followers } = await res.json();
      setFollowers(followers);
      return { followers };
    } catch (error) {
      setFollowers([]);
      return { followers: [] };
    } finally {
      setLoading(false);
    }
  }, []);

  // Función para obtener following
  const setUserProfileAndFollowing = useCallback(async (username: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/users/profile/following/${username}`);
      const { following } = await res.json();
      setFollowing(following);
      return { following };
    } catch (error) {
      setFollowing([]);
      return { following: [] };
    } finally {
      setLoading(false);
    }
  }, []);

  // Versión correcta de `onSearch` con la lógica que pediste
  const onSearch = async (e: FormEvent, username: string) => {
    e.preventDefault();

    setLoading(true);
    setRepos([]); // Limpiar repos antes de la búsqueda
    setFollowers([]); // Limpiar repos antes de la búsqueda
    setFollowing([]); // Limpiar repos antes de la búsqueda
    setUserProfile(null); // Limpiar perfil antes de la búsqueda

    const { userProfile, repos } = await setUserProfileAndRepos(username); // Usar la función que obtiene perfil y repos
    const { followers } = await setUserProfileAndFollowers(username); // Usar la función que obtiene seguidores
    const { following } = await setUserProfileAndFollowing(username); // Usar la función que obtiene seguidos

    setUserProfile(userProfile); // Actualizar estado de perfil
    setRepos(repos); // Actualizar estado de repos
    setFollowers(followers); // Actualizar estado de repos
    setFollowing(following); // Actualizar estado de repos
    setLoading(false); // Terminar el loading
  };

  return (
    <UserContext.Provider
      value={{
        userProfile,
        repos,
        followers,
        following,
        loading,
        setUserProfileAndRepos,
        setUserProfileAndFollowers,
        setUserProfileAndFollowing,
        onSearch, // Ahora `onSearch` está de la misma forma que en tu código
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Hook para acceder al contexto en otros componentes
export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext debe usarse dentro de un UserProvider");
  }
  return context;
};

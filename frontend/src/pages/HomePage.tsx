import { Profile, ProfileInfo } from "../components/ProfileInfo";
import { Repository, RepositoryList } from "../components/RepositoryList";
import Spinner from "../components/Spinner";
import { useOutletContext } from "react-router-dom";

type ContextType = {
  userProfile: Profile | null | undefined;
  repos: Repository[];
  loading: boolean;
};

export function HomePage() {
  const { userProfile, repos, loading } = useOutletContext<ContextType>();

  return (
    <>
      {loading ? (
        <Spinner />
      ) : userProfile === undefined ? (
        // Estado inicial o durante la búsqueda
        <Spinner />
      ) : userProfile ? (
        // Datos válidos
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[300px_1fr]">
          <ProfileInfo userProfile={userProfile} />
          <main>
            <RepositoryList repos={repos} />
          </main>
        </div>
      ) : (
        // Sin datos válidos
        <p className="flex items-center justify-center h-32">
          This user doesn't exist.
        </p>
      )}
    </>
  );
}

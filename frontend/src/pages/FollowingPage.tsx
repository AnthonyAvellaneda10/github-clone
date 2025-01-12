import { useOutletContext } from "react-router-dom";
import { Profile, ProfileInfo } from "../components/ProfileInfo";
import Spinner from "../components/Spinner";
import { Follow } from "../interfaces/follow.interface";
import FollowingList from "../components/FollowingList";

type ContextType = {
  userProfile: Profile | null | undefined;
  loading: boolean;
  following: Follow[];
};

export default function FollowingPage() {
  const { userProfile, loading, following } = useOutletContext<ContextType>();

  if (loading || userProfile === undefined) {
    return <Spinner />;
  }

  if (!userProfile) {
    return (
      <p className="flex items-center justify-center h-32">
        This user doesn't exist.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-[300px_1fr]">
      <ProfileInfo userProfile={userProfile} />
      <main>
        <h2 className="text-xl font-semibold mb-4">Following</h2>
        {/* Aquí puedes agregar la lógica para mostrar la lista de usuarios seguidos */}
        <FollowingList followings={following} />
      </main>
    </div>
  );
}

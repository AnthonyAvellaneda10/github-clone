import { Follow } from "../interfaces/follow.interface";
import Follower from "./ui/Follower";

export default function FollowerList({ followers }: { followers: Follow[] }) {
  return (
    <>
      <div className="space-y-4">
        {followers && followers.map((follower) => <Follower key={follower.id} follower={follower} />)}
        {followers.length === 0 && (
          <p className="flex items-center justify-center h-32">
            Doesn't have any follower yet.
          </p>
        )}
      </div>
    </>
  );
}

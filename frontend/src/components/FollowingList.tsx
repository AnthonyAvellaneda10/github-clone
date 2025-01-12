import { Follow } from "../interfaces/follow.interface";
import Following from "./ui/Following";

export default function FollowingList({followings}: {followings: Follow[]}) {
  return (
    <>
      <div className="space-y-4">
        {followings && followings.map((following) => <Following key={following.id} following={following} />)}
        {followings.length === 0 && (
          <p className="flex items-center justify-center h-32">
            Doesn't have any following yet.
          </p>
        )}
      </div>
    </>
  );
}

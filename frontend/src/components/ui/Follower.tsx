import { Follow } from "../../interfaces/follow.interface";

export default function Follower({ follower }: { follower: Follow }) {
  return (
    <div className="py-6 first:pt-0 border-t border-gray-800 first:border-none">
      <div className="flex items-start gap-3">
        <img
          src={follower.avatar_url}
          alt={`${follower.login}'s avatar`}
          className="w-12 h-12 rounded-full bg-gray-700 flex-shrink-0"
        />

        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="font-medium text-gray-100 hover:text-blue-400">
                {follower.login}
              </div>
              {/* <div className="text-gray-500 text-sm hover:text-blue-400">
                {follower.login}
              </div> */}
            </div>
            <button
              className="w-fit px-3 py-1 text-sm text-gray-300 bg-gray-800/40 rounded-md border border-gray-700 hover:border-gray-500 transition duration-300"
              onClick={() => window.open(follower.html_url, "_blank")}
            >
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

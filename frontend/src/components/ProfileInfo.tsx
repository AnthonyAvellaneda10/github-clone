import { ExternalLink, Link2, MapPin, Users } from "lucide-react";
import { Button } from "./ui/Button";
import { FaXTwitter } from "react-icons/fa6";
import { formatShortNumber } from "../utils/formatShortNumber";
import { Link } from "react-router-dom";

export interface Profile {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
  name: string;
  company: null;
  blog: string;
  location: string;
  email: null;
  hireable: null;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
}

export function ProfileInfo({ userProfile }: { userProfile: Profile | null }) {
  if (!userProfile) {
    // Puedes devolver un spinner, mensaje de carga o simplemente `null`.
    return <p>Loading...</p>;
  }

  return (
    <div>
      <aside className="space-y-8 md:sticky md:top-5">
        <div className="space-y-4">
          <img
            src={userProfile.avatar_url}
            alt="Profile"
            width={296}
            height={296}
            className="rounded-full"
          />
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold">{userProfile.name}</h1>

            <p className="text-gray-400">{userProfile.login}</p>
          </div>
          <Button
            className="w-full"
            variant="outline"
            onClick={() => window.open(userProfile.html_url, "_blank")}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            See on Github
          </Button>

          {userProfile.bio && (
            <div className="flex items-center gap-2">
              <p className="text-sm">
                {userProfile.bio.length > 60
                  ? `${userProfile.bio.substring(0, 60)}...`
                  : userProfile.bio}
              </p>
            </div>
          )}
        </div>
        {userProfile.followers > 0 && (
          <div className="flex items-center gap-2">
            {/* Contenedor para Users y 1.3k followers */}
            <Link to="/followers" className="flex items-center gap-2 group">
              <Users className="cursor-pointer h-4 w-4 group-hover:text-[#2985f8] transition duration-300" />
              <span className="text-sm">
                <strong className="cursor-pointer group-hover:text-[#2985f8] transition duration-300">
                  {formatShortNumber(userProfile.followers)}
                </strong>{" "}
                <span className="cursor-pointer group-hover:text-[#2985f8] transition duration-300">
                  followers
                </span>
              </span>
            </Link>
            <span>·</span>
            {/* Contenedor para 0 following */}
            <Link to="/following" className="group">
              <span className="text-sm">
                <strong className="group-hover:text-[#2985f8] transition duration-300">
                  {formatShortNumber(userProfile.following)}
                </strong>{" "}
                <span className="cursor-pointer group-hover:text-[#2985f8] transition duration-300">
                  following
                </span>
              </span>
            </Link>
          </div>
        )}
        <div className="space-y-2">
          {userProfile.location && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <a className="cursor-default text-sm">{userProfile.location}</a>
            </div>
          )}
          {userProfile.blog && (
            <div className="flex items-center gap-2">
              <Link2 className="h-4 w-4" />
              <a
                href={`${userProfile.blog}`}
                target="_blank"
                className="text-sm hover:text-blue-500 hover:underline"
              >
                {userProfile.blog}
              </a>
            </div>
          )}
          {userProfile.twitter_username && (
            <div className="flex items-center gap-2">
              <FaXTwitter className="h-4 w-4" />
              <a
                href={`https://twitter.com/${userProfile.twitter_username}`}
                target="_blank"
                className="text-sm hover:text-blue-500 hover:underline"
              >
                @{userProfile.twitter_username}
              </a>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}

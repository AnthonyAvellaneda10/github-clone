import { LucideProps, BookMarked } from "lucide-react";
import { Profile } from "./ProfileInfo";
import { RiUserFollowFill, RiUserFollowLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { formatShortNumber } from "../utils/formatShortNumber";

const Navigation = ({
  userProfile,
}: {
  userProfile: Profile | null | undefined;
}) => {
  type TabName = "Repositories" | "Followers" | "Following";

  const location = useLocation(); // Hook para obtener la ruta actual
  const iconMap: Record<TabName, React.ComponentType<LucideProps>> = {
    Repositories: BookMarked,
    Followers: RiUserFollowFill,
    Following: RiUserFollowLine,
  };

  const tabs: { name: TabName; count: string | null; link?: string }[] = [
    {
      name: "Repositories",
      count: userProfile?.public_repos
        ? formatShortNumber(userProfile.public_repos)
        : null,
      link: "/",
    },
    {
      name: "Followers",
      count: userProfile?.followers
        ? formatShortNumber(userProfile.followers)
        : null,
      link: "/followers",
    },
    {
      name: "Following",
      count: userProfile?.following
        ? formatShortNumber(userProfile.following)
        : null,
      link: "/following",
    },
  ];

  return (
    <nav className="bg-[#010409] border-b border-[#30363d]">
      <div className="container mx-auto px-4">
        <div className="flex gap-2 overflow-x-auto">
          {tabs.map((item) => {
            const Icon = iconMap[item.name];
            const isActive = location.pathname === item.link; // Verifica si la ruta actual coincide con el enlace

            return (
              <Link
                key={item.name}
                to={item.link ?? `/${item.name.toLowerCase()}`}
                className={`text-sm ${
                  isActive
                    ? "border-orange-500 font-medium"
                    : "border-transparent"
                } text-[#f0f6fc] border-b-2 whitespace-nowrap transition duration-300`}
              >
                <div
                  className={`flex items-center gap-2 p-2 mb-2 rounded-lg ${
                    isActive ? "bg-[#15191f]" : "hover:bg-[#15191f]"
                  } transition-colors duration-300`}
                >
                  <Icon
                    className={`h-4 w-4 ${
                      isActive ? "text-[#f0f6fc]" : "text-[#9198a1]"
                    }`}
                  />
                  <p>
                    {item.name}{" "}
                    {item.count && (
                      <span className="ml-1 text-xs px-2 py-1 bg-[#252a31] rounded-full">
                        {item.count}
                      </span>
                    )}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

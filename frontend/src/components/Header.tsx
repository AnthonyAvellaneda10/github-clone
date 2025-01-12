import { MenuIcon, Search } from "lucide-react";
import { FormEvent, useState } from "react";

import { Link } from "react-router-dom";
import SearchUser from "./SearchUser";
import SidebarLeft from "./ui/SidebarLeft";
import { useAuthContext } from "../context/AuthContext";
import SidebarRight from "./ui/SidebarRight";

export function Header({
  onSearch,
}: {
  onSearch: (e: FormEvent, username: string) => void;
}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSideBarLeft, setIsSideBarLeft] = useState(false);

  const { authUser } = useAuthContext();

  return (
    <header className="bg-[#010409]">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {authUser && (
              <button
                className="p-1 border border-[#9198a1] rounded-md hover:bg-[#15191f] transition duration-300"
                onClick={() => setIsSideBarLeft(true)}
              >
                <MenuIcon className="h-5 w-5 text-[#9198a1]" />
              </button>
            )}

            <Link to="/" className="flex items-center gap-2">
              <svg
                className="h-8 w-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"></path>
              </svg>
            </Link>
            {authUser && (
              <p className="cursor-pointer p-2 rounded-md text-sm hover:bg-[#15191f] transition duration-300">
                {authUser?.username}
              </p>
            )}
          </div>

          <div className="hidden md:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <SearchUser onSearch={onSearch} />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="block md:hidden">
              <Search className="h-5 w-5" />
            </button>

            {authUser && (
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="rounded-full focus:outline-none"
              >
                <img
                  src={authUser?.avatarUrl}
                  alt={authUser?.username}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </button>
            )}

            {!authUser && (
              <div className="flex items-center mt-2 -mx-2 sm:mt-0">
                <Link
                  to={"/login"}
                  className="px-3 py-1 text-sm font-semibold text-white transition-colors duration-300 transform rounded-md hover:bg-[#25292e]"
                >
                  Sign In
                </Link>
                <Link
                  to={"/signup"}
                  className="px-3 py-1 mx-2 text-sm font-semibold text-white transition-colors duration-300 transform border bg-black rounded-md hover:bg-[#25292e]"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <SidebarLeft
        isOpen={isSideBarLeft}
        onClose={() => setIsSideBarLeft(false)}
      />

      <SidebarRight
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </header>
  );
}

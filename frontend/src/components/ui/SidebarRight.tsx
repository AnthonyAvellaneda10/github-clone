import {
  FlaskConical,
  Globe,
  Heart,
  Settings,
  Smile,
  SquareCode,
  SquareKanban,
  Star,
  Upload,
  UserRound,
  X,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { VscCopilot } from "react-icons/vsc";
import { RiGitRepositoryLine } from "react-icons/ri";
import { GoOrganization } from "react-icons/go";
import { useScrollLock } from "../../utils/use-scroll-lock";
import { useAuthContext } from "../../context/AuthContext";
import Logout from "./Logout";

interface SidebarLeftProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SidebarRight({ isOpen, onClose }: SidebarLeftProps) {
  useScrollLock(isOpen);

  // Close on escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const { authUser } = useAuthContext();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 transition-opacity z-40"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-[300px] max-w-full bg-[#161b22] shadow-xl transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Profile menu"
      >
        <div className="flex h-full flex-col overflow-y-auto border-l border-[#30363d]">
          <div className="flex items-center justify-between border-b border-[#30363d] p-4">
            <div className="flex items-center gap-2">
              {authUser && (
                <img
                  src={authUser?.avatarUrl}
                  alt={authUser?.username}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              )}

              <div className="text-sm">
                <div className="font-semibold">{authUser?.name}</div>
                <div className="text-gray-400">{authUser?.username}</div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 space-y-1 p-2">
            <Link
              to="/"
              onClick={onClose}
              className="cursor-default flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-[#30363d] transition duration-300"
            >
              <Smile className="h-4 w-4" />
              Set status
            </Link>
            <Link
              to={authUser?.profileUrl}
              target="_blank"
              onClick={onClose}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-[#30363d] transition duration-300"
            >
              <UserRound className="h-4 w-4" />
              Your profile
            </Link>
            <Link
              to={`https://github.com/${authUser?.username}?tab=repositories`}
              target="_blank"
              onClick={onClose}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-[#30363d] transition duration-300"
            >
              <RiGitRepositoryLine className="h-4 w-4" />
              Your repositories
            </Link>
            <Link
              to="https://github.com/settings/copilot"
              target="_blank"
              onClick={onClose}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-[#30363d] transition duration-300"
            >
              <VscCopilot className="h-4 w-4" />
              Your Copilot
            </Link>
            <Link
              to={`https://github.com/${authUser?.username}?tab=projects`}
              target="_blank"
              onClick={onClose}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-[#30363d] transition duration-300"
            >
              <SquareKanban className="h-4 w-4" />
              Your projects
            </Link>
            <Link
              to={`https://github.com/${authUser?.username}?tab=stars`}
              target="_blank"
              onClick={onClose}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-[#30363d] transition duration-300"
            >
              <Star className="h-4 w-4" />
              Your stars
            </Link>
            <Link
              to={`https://gist.github.com/${authUser?.username}`}
              target="_blank"
              onClick={onClose}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-[#30363d] transition duration-300"
            >
              <SquareCode className="h-4 w-4" />
              Your gists
            </Link>
            <Link
              to={`https://github.com/settings/organizations`}
              target="_blank"
              onClick={onClose}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-[#30363d] transition duration-300"
            >
              <GoOrganization className="h-4 w-4" />
              Your organizations
            </Link>
            <Link
              to={`https://github.com/settings/enterprises`}
              target="_blank"
              onClick={onClose}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-[#30363d] transition duration-300"
            >
              <Globe className="h-4 w-4" />
              Your enterprises
            </Link>
            <Link
              to={`https://github.com/sponsors/accounts`}
              target="_blank"
              onClick={onClose}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-[#30363d] transition duration-300"
            >
              <Heart className="h-4 w-4" />
              Your sponsors
            </Link>
            <div className="my-2 border-t border-[#30363d]" />
            <Link
              to="https://github.com/account/enterprises/new"
              target="_blank"
              onClick={onClose}
              className="flex items-center justify-between py-2 px-3 text-sm text-gray-300 hover:bg-[#30363d] transition duration-300 rounded-lg cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Upload className="h-4 w-4" />
                <span>Try Enterprise</span>
              </div>
              <span className="bg-gray-800 text-xs px-2 py-1 rounded-xl">
                Free
              </span>
            </Link>
            <Link
              to="/"
              onClick={onClose}
              className="cursor-default flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-[#30363d] transition duration-300"
            >
              <FlaskConical className="h-4 w-4" />
              Feature preview
            </Link>
            <Link
              to="https://github.com/settings/profile"
              target="_blank"
              onClick={onClose}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-[#30363d] transition duration-300"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
            <div className="my-2 border-t border-[#30363d]" />
            <Logout onClose={onClose} />
          </nav>
        </div>
      </div>
    </>
  );
}

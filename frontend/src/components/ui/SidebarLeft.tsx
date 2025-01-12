import {
  CircleDot, Gift, GitPullRequestArrow,
  Home, PanelsTopLeft, Telescope, X
} from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollLock } from "../../utils/use-scroll-lock";
import { FaGithub } from "react-icons/fa6";
import { GoCodespaces, GoCommentDiscussion } from "react-icons/go";
import { SiGithubcopilot } from "react-icons/si";

interface SidebarLeftProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SidebarLeft({ isOpen, onClose }: SidebarLeftProps) {
  useScrollLock(isOpen);

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
        className={`fixed left-0 top-0 h-full w-[296px] max-w-[calc(100vw-32px)] bg-[#161b22] shadow-xl transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex h-full flex-col overflow-y-auto border-r border-[#30363d]">
          <div className="flex items-center justify-between p-4 border-b border-[#30363d]">
            <FaGithub className="w-5 h-5" />
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
              to={"/"}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-[#30363d] transition duration-300"
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <a
              href="https://github.com/issues"
              target="_blank"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-[#30363d] transition duration-300"
            >
              <CircleDot className="h-4 w-4" />
              Issues
            </a>
            <a
              href="https://github.com/pulls"
              target="_blank"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-[#30363d] transition duration-300"
            >
              <GitPullRequestArrow className="h-4 w-4" />
              Pull requests
            </a>
            <a
              href="https://github.com/projects"
              target="_blank"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-[#30363d] transition duration-300"
            >
              <PanelsTopLeft className="h-4 w-4" />
              Projects
            </a>
            <a
              href="https://github.com/discussions"
              target="_blank"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-[#30363d] transition duration-300"
            >
              <GoCommentDiscussion className="h-4 w-4" />
              Discussions
            </a>
            <a
              href="https://github.com/codespaces"
              target="_blank"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-[#30363d] transition duration-300"
            >
              <GoCodespaces className="h-4 w-4" />
              Codespaces
            </a>
            <a
              href="https://github.com/copilot"
              target="_blank"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-[#30363d] transition duration-300"
            >
              <SiGithubcopilot className="h-4 w-4" />
              Copilot
            </a>
            <div className="my-2 border-t border-[#30363d]" />
            <a
              href="https://github.com/explore"
              target="_blank"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-[#30363d] transition duration-300"
            >
              <Telescope className="h-4 w-4" />
              Explore
            </a>
            <a
              href="https://github.com/marketplace"
              target="_blank"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-[#30363d] transition duration-300"
            >
              <Gift className="h-4 w-4" />
              Marketplace
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}

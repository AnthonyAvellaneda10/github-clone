import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#0d1117] text-sm py-4">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex flex-wrap justify-center items-center gap-4 text-gray-400 text-xs">
          <span className="flex items-center">
            <Link to="/">
              <FaGithub className="w-5 h-5 me-2 cursor-pointer transition hover:text-[#424850]" />
            </Link>
            © {currentYear} GitHub, Inc.
          </span>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://docs.github.com/es/site-policy/github-terms/github-terms-of-service"
              target="_blank"
              className="hover:text-blue-500 hover:underline transition duration-300"
            >
              Terms
            </a>
            <a
              href="https://docs.github.com/es/site-policy/privacy-policies/github-general-privacy-statement"
              target="_blank"
              className="hover:text-blue-500 hover:underline transition duration-300"
            >
              Privacy
            </a>
            <a
              href="https://github.com/security"
              target="_blank"
              className="hover:text-blue-500 hover:underline transition duration-300"
            >
              Security
            </a>
            <a
              href="https://www.githubstatus.com"
              target="_blank"
              className="hover:text-blue-500 hover:underline transition duration-300"
            >
              Status
            </a>
            <a
              href="https://docs.github.com/es"
              target="_blank"
              className="hover:text-blue-500 hover:underline transition duration-300"
            >
              Docs
            </a>
            <a
              href="https://support.github.com/?tags=dotcom-footer"
              target="_blank"
              className="hover:text-blue-500 hover:underline transition duration-300"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}

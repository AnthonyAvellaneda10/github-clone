import { Code, GitFork, Star } from "lucide-react";
import { languageColors } from "../utils/constants";
import { formatDate } from "../utils/functions";
import { Repository } from "./RepositoryList";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function Repo({ repo }: { repo: Repository }) {
  const handleCloneClick = async (repo: Repository) => {
    try {
      await navigator.clipboard.writeText(`git clone ${repo.clone_url}`);
      toast.success(`${repo.name} URL repository cloned to clipboard`);
    } catch (error) {
      toast.error("Clipboard write failed. ");
    }
  };

  return (
    <div key={repo.id} className="border-b border-[#30363d] py-6">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-blue-500 hover:underline">
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                {repo.name}
              </a>
            </h3>
            <span className="rounded-full border border-[#30363d] px-2 py-0.5 text-xs">
              Public
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-400">{repo.description}</p>
          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm">
            {repo.language && (
              <span className="flex items-center text-gray-400">
                <span
                  className={`w-3 h-3 rounded-full ${
                    languageColors[repo.language.toLowerCase()] || "bg-gray-500"
                  } mr-1`}
                ></span>
                {repo.language}
              </span>
            )}
            {repo.stargazers_count > 0 && (
              <Link
                to={`https://github.com/${repo.owner.login}/${repo.name}/stargazers`}
                target="_blank"
                className="flex items-center text-gray-400 hover:text-blue-500 transition duration-300"
              >
                <Star className="lucide lucide-star w-4 h-4 mr-1" />
                {repo.stargazers_count}
              </Link>
            )}
            {repo.forks_count > 0 && (
              <Link
                to={`https://github.com/${repo.owner.login}/${repo.name}/forks`}
                target="_blank"
                className="flex items-center text-gray-400 hover:text-blue-500 transition duration-300"
              >
                <GitFork className="lucide lucide-star w-4 h-4 mr-1" />
                {repo.forks_count}
              </Link>
            )}
            <span className="text-gray-400">
              Updated on {formatDate(repo.created_at)}
            </span>
          </div>
        </div>
        <div className="flex-shrink-0">
          <button
            onClick={() => handleCloneClick(repo)}
            type="button"
            className="flex items-center gap-1 px-3 py-1 text-sm rounded-md border border-gray-700 bg-[#238636] hover:bg-[#29903b] hover:border-gray-500 transition duration-300"
          >
            <Code className="h-4 w-4" />
            Clone
          </button>
        </div>
      </div>
    </div>
  );
}

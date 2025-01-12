import { useEffect, useState } from "react";
import { CustomSelect } from "./ui/CustomSelect";
import Repo from "./Repo";

export interface Repository {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated: string;
  isPublic: boolean;
  created_at: string;
  html_url: string;
  clone_url: string;
  owner: {
    login: string;
  };
}

const typeOptions = [
  { label: "All", value: "all" },
  { label: "Public", value: "public" },
  { label: "Private", value: "private" },
  { label: "Sources", value: "sources" },
  { label: "Forks", value: "forks" },
  { label: "Archived", value: "archived" },
  { label: "Mirrors", value: "mirrors" },
];

const languageOptions = [
  { label: "All", value: "all" },
  { label: "TypeScript", value: "typescript" },
  { label: "JavaScript", value: "javascript" },
  { label: "Python", value: "python" },
  { label: "Java", value: "java" },
  { label: "Go", value: "go" },
];

const sortOptions = [
  { label: "Last updated", value: "updated" },
  { label: "Name", value: "name" },
  { label: "Stars", value: "stars" },
];

type SelectType = "type" | "language" | "sort" | null;

export function RepositoryList({ repos }: { repos: Repository[] }) {
  const [type, setType] = useState("public");
  const [language, setLanguage] = useState("all");
  const [sort, setSort] = useState("updated");
  const [openSelect, setOpenSelect] = useState<SelectType>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRepos, setFilteredRepos] = useState<Repository[]>(repos); // Estado para los repos filtrados
  const [sortedRepos, setSortedRepos] = useState<Repository[]>(repos); // Estado para los repos ordenados

  const toggleSelect = (selectType: SelectType) => {
    setOpenSelect((currentSelect) =>
      currentSelect === selectType ? null : selectType
    );
  };

  // Función para manejar el cambio en el input
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value; // Mantiene los espacios tal cual en el input
    setSearchTerm(input);

    const trimmedInput = input.trim(); // Remueve solo los espacios innecesarios al inicio y al final

    if (trimmedInput.length > 0) {
      const normalizedInput = trimmedInput.toLowerCase();
      const filtered = repos.filter((repo) =>
        repo.name.toLowerCase().includes(normalizedInput)
      );
      setFilteredRepos(filtered);
    } else {
      setFilteredRepos(repos); // Si no hay texto significativo, muestra todos los repos
    }
  };

  // Función para ordenar los repositorios
  useEffect(() => {
    let sorted = [...filteredRepos]; // Copiar los repos filtrados

    if (sort === "name") {
      sorted.sort((a, b) => a.name.localeCompare(b.name)); // Ordenar por nombre (ascendente)
    } else if (sort === "stars") {
      sorted.sort((a, b) => b.stargazers_count - a.stargazers_count); // Ordenar por estrellas (descendente)
    } else if (sort === "updated") {
      sorted = [...repos]; // Restaurar el orden original basado en la última actualización
    }

    setSortedRepos(sorted);
  }, [sort, filteredRepos, repos]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 lg:flex-row sm:items-center border-b border-[#30363d] pb-4">
        <div className="w-full">
          <input
            type="search"
            placeholder="Find a repository..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full flex-1 rounded-md bg-[#0d1117] px-3 py-1.5 text-sm border border-[#30363d] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </div>
        <div className="flex flex-wrap sm:flex-nowrap gap-2">
          <CustomSelect
            options={typeOptions}
            value={type}
            onChange={setType}
            label="Type"
            isOpen={openSelect === "type"}
            onToggle={() => toggleSelect("type")}
          />
          <CustomSelect
            options={languageOptions}
            value={language}
            onChange={setLanguage}
            label="Language"
            isOpen={openSelect === "language"}
            onToggle={() => toggleSelect("language")}
          />
          <CustomSelect
            options={sortOptions}
            value={sort}
            onChange={setSort}
            label="Sort"
            isOpen={openSelect === "sort"}
            onToggle={() => toggleSelect("sort")}
          />
        </div>
      </div>

      <div className="space-y-4">
        {searchTerm.trim() && (
          <p className="text-gray-400 text-sm">
            {sortedRepos.length > 0
              ? `${sortedRepos.length} ${
                  sortedRepos.length === 1 ? "repositorio" : "repositorios"
                } encontrados para "${searchTerm.trim()}".`
              : `No se encontraron repositorios para "${searchTerm.trim()}".`}
          </p>
        )}

        {sortedRepos.map((repo) => (
          <Repo key={repo.id} repo={repo} />
        ))}

        {sortedRepos.length === 0 && searchTerm.trim() === "" && (
          <p className="flex items-center justify-center h-32">
            Doesn't have any public repositories yet.
          </p>
        )}
      </div>
    </div>
  );
}

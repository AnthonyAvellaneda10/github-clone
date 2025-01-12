
import { Search } from "lucide-react";
import { FormEvent, useState } from "react";

export default function SearchUser({ onSearch }: { onSearch: (e: FormEvent, username: string) => void }) {
  const [username, setUsername] = useState("");
  return (
    <form onSubmit={(e) => onSearch(e, username)}>
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      <input
        type="search"
        placeholder="Search for a user"
        className="w-full rounded-md bg-[#0d1117] py-1.5 pl-10 pr-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </form>
  );
}
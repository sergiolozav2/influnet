import { ModuleTitle } from "../core/components/ModulesLayout";
import { Input } from "@/components/ui/input";
import { MdSearch } from "react-icons/md";
import { useSearchUsuarios as useSearchUsuarios } from "./hooks/useSearchUsuarios";
import { ChangeEvent, useState } from "react";
import { UsuariosList } from "./components/UsuariosList";
import { useDebounce } from "../core/hooks/useDebounce";
import { LoadingModule } from "../core/components/LoadingModule";

export function SearchPage() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query);

  const { data, isLoading } = useSearchUsuarios(debouncedQuery);

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }
  return (
    <div className="flex w-full flex-col">
      <ModuleTitle>
        <div className="flex w-full items-center">
          <Input
            className="flex w-full items-center justify-between border border-background/80 bg-transparent px-3 py-2 text-sm text-background placeholder:text-background/80 focus:outline-none focus-visible:ring-0"
            placeholder="Buscar aquí"
            onChange={onChange}
          />
          <button className="ml-1 h-full w-9 rounded-r-md bg-primary text-primary-foreground">
            <MdSearch className="mx-auto text-lg" />
          </button>
        </div>
      </ModuleTitle>
      <div className="fade-in-animation mt-4 flex flex-col px-4 pb-20">
        {isLoading && <LoadingModule />}
        {!query && <p>Busca y encuentra influencers y empresas!</p>}
        {data?.list && query !== "" && <UsuariosList usuarios={data.list} />}
      </div>
    </div>
  );
}

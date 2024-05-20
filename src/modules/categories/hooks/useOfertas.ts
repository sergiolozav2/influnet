import { SearchService } from "@/backend";
import { useQuery } from "@tanstack/react-query";

export function useAllOfertas() {
  const allowAll = "";
  return useOfertas(allowAll);
}

export function useOfertas(search: string) {
  const query = useQuery({
    queryKey: ["categories", search],
    queryFn: () => SearchService.getSearchOfertas(search),
  });
  return query;
}

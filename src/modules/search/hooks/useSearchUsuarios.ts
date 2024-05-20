import { SearchService } from "@/backend";
import { useQuery } from "@tanstack/react-query";

export function useSearchUsuarios(search: string) {
  const query = useQuery({
    queryKey: ["search-users", search],
    queryFn: () => SearchService.getSearchUsuarios(search),
  });
  return query;
}

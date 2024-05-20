import { OfertaService } from "@/backend";
import { useToken } from "@/modules/core/store/useAuthStore";
import { useQuery } from "@tanstack/react-query";

export function useOfertasFavoritas() {
  const token = useToken();
  const query = useQuery({
    queryKey: ["favoritas"],
    queryFn: () => OfertaService.getOfertaFavorites(token),
  });

  return query;
}

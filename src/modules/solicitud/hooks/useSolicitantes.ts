import { OfertaService } from "@/backend";
import { useToken } from "@/modules/core/store/useAuthStore";
import { useQuery } from "@tanstack/react-query";

export function useSolicitantes() {
  const token = useToken();
  const query = useQuery({
    queryKey: ["solicitantes"],
    queryFn: () => OfertaService.getOfertaOfertasPostulantes(token),
  });
  return query;
}

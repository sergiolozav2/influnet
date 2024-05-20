import { OfertaService } from "@/backend";
import { useToken } from "@/modules/core/store/useAuthStore";
import { useQuery } from "@tanstack/react-query";

export function useSolicitudesIDs() {
  const token = useToken();
  const query = useQuery({
    queryKey: ["solicitudes"],
    queryFn: () => OfertaService.getOfertaSolicitudes(token),
  });
  return query;
}

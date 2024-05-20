import { NotificacionService } from "@/backend";
import { useToken } from "@/modules/core/store/useAuthStore";
import { useQuery } from "@tanstack/react-query";

export function useNotificaciones() {
  const token = useToken();
  const query = useQuery({
    queryKey: ["notificaciones"],
    queryFn: () => NotificacionService.getNotificacionNotificacion(token),
  });
  return query;
}

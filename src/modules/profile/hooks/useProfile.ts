import { UserService } from "@/backend";
import { useAuthStore } from "@/modules/core/store/useAuthStore";
import { useQuery } from "@tanstack/react-query";

export function useProfile(usuarioID: number) {
  const token = useAuthStore((state) => state.token);
  const query = useQuery({
    queryKey: ["profile"],
    queryFn: () => UserService.getUserProfile(usuarioID, token),
  });

  return query;
}

import { UserService } from "@/backend";
import { useToken } from "@/modules/core/store/useAuthStore";
import { useQuery } from "@tanstack/react-query";

export function useContratos() {
  const token = useToken();
  const query = useQuery({
    queryKey: ["contratos"],
    queryFn: () => UserService.getUserContratosEmpresa(token),
  });

  return query;
}

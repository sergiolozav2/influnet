import { AuthService } from "@/backend";
import { useMutation } from "@tanstack/react-query";

export function useRegister() {
  const data = useMutation({
    mutationFn: AuthService.postAuthRegister,
  });

  return data;
}

export type RegisterData = First<
  Parameters<typeof AuthService.postAuthRegister>
>;

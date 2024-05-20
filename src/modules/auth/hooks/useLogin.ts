import { AuthService } from "@/backend";
import { ApiError } from "@/backend/core/ApiError";
import { useAuthStore } from "@/modules/core/store/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "react-toastify";

export function useLogin() {
  const setLoggedIn = useAuthStore((state) => state.setLoggedIn);
  const navigate = useNavigate();
  const login = useMutation({
    mutationFn: AuthService.postAuthLogin,
    onSuccess: (response) => {
      setLoggedIn(response.token, response.esEmpresa);
      navigate({ to: "/admin/" });
    },
    onError: (error: ApiError) => {
      toast.error(error.body.message ?? error.message);
    },
  });

  return {
    login: login.mutate,
    isPending: login.isPending,
    isError: login.isError,
    data: login.data,
  };
}

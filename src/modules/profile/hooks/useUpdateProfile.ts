import { UserService } from "@/backend";
import { useToken } from "@/modules/core/store/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

type UpdateProfileBodyType = Parameters<
  typeof UserService.putUserProfileCelebrity
>[1];

export function useUpdateProfileCelebrity() {
  const token = useToken();
  const mutate = useMutation({
    mutationFn: (body: UpdateProfileBodyType) =>
      UserService.putUserProfileCelebrity(token, body),

    onSuccess: () => {
      toast.success("Cambios guardados!");
    },
    onError: () => {
      toast.error("Ocurrió un error inesperado");
    },
  });

  return mutate;
}

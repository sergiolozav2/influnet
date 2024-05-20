import { PostService } from "@/backend";
import { useAuthStore } from "@/modules/core/store/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

type BodyType = {
  descripcion: string;
  imagen: string;
};

type Props = {
  handleSucess: () => void;
};
export function useCreatePost(data: Props) {
  const token = useAuthStore((s) => s.token);
  const mutation = useMutation({
    mutationFn: (body: BodyType) =>
      PostService.postPost(token, {
        ...body,
      }),
    onSuccess: () => {
      data.handleSucess();
      toast.success("Publicación creada exitosamente!");
    },
    onError: (e) => {
      toast.error(`${e.message}`);
    },
  });

  return mutation;
}

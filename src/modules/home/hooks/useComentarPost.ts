import { PostService } from "@/backend";
import { useToken } from "@/modules/core/store/useAuthStore";
import { useMutation } from "@tanstack/react-query";

type Props = {
  postID: number;
  onError: () => void;
  onSuccess: () => void;
};
export function useComentarPost(data: Props) {
  const token = useToken();
  const mutate = useMutation({
    mutationFn: (texto: string) =>
      PostService.postPostComentar(token, {
        postID: data.postID,
        texto: texto,
      }),
    onError: data.onError,
    onSuccess: () => {
      data.onSuccess();
    },
  });
  return mutate;
}

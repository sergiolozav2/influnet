import { PostService } from "@/backend";
import { useToken } from "@/modules/core/store/useAuthStore";
import { useMutation } from "@tanstack/react-query";

type Props = {
  postID: number;
  onError: () => void;
  onSuccess: (reaccionExiste: boolean) => void;
};
export function useLikePost(data: Props) {
  const token = useToken();
  const mutate = useMutation({
    mutationFn: () =>
      PostService.postPostLike(token, {
        postID: data.postID,
      }),
    onError: data.onError,
    onSuccess: (r) => data.onSuccess(r.reaccionExiste),
  });
  return mutate;
}

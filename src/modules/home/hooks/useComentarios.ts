import { PostService } from "@/backend";
import { useToken } from "@/modules/core/store/useAuthStore";
import { useQuery } from "@tanstack/react-query";

export function useComentarios(postID: number) {
  const token = useToken();
  const query = useQuery({
    queryKey: ["comentarios", postID],
    queryFn: () => PostService.getPostComentarios(postID, token),
  });
  return query;
}

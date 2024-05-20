import { PostService } from "@/backend";
import { useQuery } from "@tanstack/react-query";

export function useAllPosts() {
  const query = useQuery({
    queryKey: ["posts"],
    queryFn: PostService.getPost,
  });
  return query;
}

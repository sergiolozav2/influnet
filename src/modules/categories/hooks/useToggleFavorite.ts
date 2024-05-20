import { OfertaService } from "@/backend";
import { useAuthStore } from "@/modules/core/store/useAuthStore";
import { useMutation } from "@tanstack/react-query";

type Props = {
  ofertaID: number;
  onError: () => void;
  onSuccess: (isFavorite: boolean) => void;
};
export function useToggleFavorite(data: Props) {
  const token = useAuthStore((s) => s.token);

  const mutation = useMutation({
    mutationFn: () =>
      OfertaService.postOfertaToggleFavorite(token, {
        ofertaID: data.ofertaID,
      }),
    onError: data.onError,
    onSuccess: (response) => {
      data.onSuccess(response.esFavorito);
    },
  });

  return mutation;
}

import { OfertaService } from "@/backend";
import { useToken } from "@/modules/core/store/useAuthStore";
import { useMutation } from "@tanstack/react-query";

type Props = {
  ofertaID: number;
  onError: () => void;
  onSuccess: () => void;
};
export function usePostularOferta(data: Props) {
  const token = useToken();
  const query = useMutation({
    mutationFn: () =>
      OfertaService.postOfertaPostular(token, {
        ofertaID: data.ofertaID,
      }),
    onError: data.onError,
    onSuccess: data.onSuccess,
  });
  return query;
}

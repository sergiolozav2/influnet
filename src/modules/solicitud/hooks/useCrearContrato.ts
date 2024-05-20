import { OfertaService } from "@/backend";
import { useToken } from "@/modules/core/store/useAuthStore";
import { useMutation } from "@tanstack/react-query";

type Props = {
  ofertaID: number;
  contratadoID: number;
  onSuccess: () => void;
  onError: () => void;
};
export function useCrearcontrato(data: Props) {
  const token = useToken();
  const mutate = useMutation({
    mutationFn: () =>
      OfertaService.postOfertaContratar(token, {
        contratadoID: data.contratadoID,
        ofertaID: data.ofertaID,
      }),
    onError: data.onError,
    onSuccess: data.onSuccess,
  });
  return mutate;
}

import { OfertaService } from "@/backend";
import { useAuthStore } from "@/modules/core/store/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

type BodyType = {
  monto: string;
  descripcion: string;
  fechaPlazo: string;
  categoria: string;
};

type Props = {
  handleSucess: () => void;
};
export function useCreateOferta(data: Props) {
  const token = useAuthStore((s) => s.token);
  const mutation = useMutation({
    mutationFn: (body: BodyType) =>
      OfertaService.postOferta(token, {
        ...body,
      }),
    onSuccess: () => {
      data.handleSucess();
      toast.success("Oferta creada exitosamente!");
    },
    onError: (e) => {
      toast.error(`${e.message}`);
    },
  });

  return mutation;
}

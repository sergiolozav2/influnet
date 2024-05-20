import { Button } from "@/components/ui/button";
import { usePostularOferta } from "../hooks/usePostularOferta";
import { useEffect, useState } from "react";
import { useSolicitudesIDs } from "../hooks/useSolicitudes";

type PostularButtonProps = {
  ofertaID: number;
  onError: () => void;
  onSuccess: () => void;
};
export function PostularButton(props: PostularButtonProps) {
  const postular = usePostularOferta({
    ofertaID: props.ofertaID,
    onError,
    onSuccess,
  });
  const { data: solicitudes, isLoading } = useSolicitudesIDs();

  useEffect(() => {
    if (solicitudes?.list) {
      const existe = solicitudes.list.includes(props.ofertaID);
      setSolicitado(existe);
    }
  }, [props.ofertaID, solicitudes]);
  const [solicitado, setSolicitado] = useState<boolean | null>(null);

  function handlePostular() {
    setSolicitado(solicitado);
    postular.mutate();
  }

  function onSuccess() {
    setSolicitado(true);
  }
  function onError() {
    setSolicitado(false);
  }
  return (
    <Button
      className="mt-2 bg-black font-semibold text-white/90"
      onClick={handlePostular}
      disabled={isLoading || solicitado === true}
    >
      {isLoading ? "..." : solicitado ? "Ya postulaste" : "Postular"}
    </Button>
  );
}

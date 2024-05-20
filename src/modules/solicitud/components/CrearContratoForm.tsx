import { LoadingModule } from "@/modules/core/components/LoadingModule";
import { useProfile } from "@/modules/profile/hooks/useProfile";
import { OfertaType } from "./SolicitantesList";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useCrearcontrato } from "../hooks/useCrearContrato";

type CrearContratoFormProps = {
  usuarioID: number;
  oferta: OfertaType;
  onCancel: () => void;
  onSuccess: () => void;
};

export function CrearContratoForm(props: CrearContratoFormProps) {
  const { data, isLoading } = useProfile(props.usuarioID);

  const contrato = useCrearcontrato({
    contratadoID: props.usuarioID,
    ofertaID: props.oferta.ofertaID,
    onError: onError,
    onSuccess: onSuccess,
  });
  function handleCrearContrato() {
    contrato.mutate();
  }

  function onSuccess() {
    toast.success("Influencer contratado exitosamente!");
    props.onSuccess();
  }

  function onError() {
    toast.error("Ocurrió un error inesperado");
  }
  return (
    <div className="flex flex-col">
      {isLoading && <LoadingModule />}
      {data && (
        <div className="flex flex-col">
          <h3 className="text-sm font-medium">Perfil de influencer</h3>
          <div className="mt-2 grid grid-cols-2 gap-y-4">
            <div className="flex flex-col">
              <p className="text-xs font-medium">Nombre: </p>
              <p className="text-foreground/85">{data.nombre}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-xs font-medium">Usuario: </p>
              <p className="text-foreground/85">{data.nombreUsuario}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-xs font-medium">Ciudad: </p>
              <p className="text-foreground/85">{data.ciudad}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-xs font-medium">Telefono: </p>
              <p className="text-foreground/85">{data.telefono}</p>
            </div>
          </div>
          <h3 className="mt-6 text-sm font-medium">Detalles de oferta</h3>
          <div className="mt-2 grid grid-cols-2 gap-y-4">
            <div className="col-span-2 flex flex-col">
              <p className="text-xs font-medium">Descripción: </p>
              <p className="text-foreground/85">{props.oferta.descripcion}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-xs font-medium">Presupuesto: </p>
              <p className="text-foreground/85">{props.oferta.monto} BOB</p>
            </div>
            <div className="flex flex-col">
              <p className="text-xs font-medium">Postulantes: </p>
              <p className="text-foreground/85">
                {props.oferta.postulantes.length}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="ml-auto mt-6 flex gap-2">
        <Button variant="outline" onClick={props.onCancel}>
          Cancelar
        </Button>
        <Button onClick={handleCrearContrato}>Contratar</Button>
      </div>
    </div>
  );
}

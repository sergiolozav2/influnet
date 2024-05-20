import { OfertaService } from "@/backend";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import { CrearContratoForm } from "./CrearContratoForm";

type SolicitantesListProps = {
  ofertas: NonNullable<
    Awaited<
      ReturnType<typeof OfertaService.getOfertaOfertasPostulantes>
    >["list"]
  >;
  refetch: () => void;
};
export type OfertaType = SolicitantesListProps["ofertas"][0];
export function SolicitantesList(props: SolicitantesListProps) {
  const [postulanteID, setPostulanteID] = useState<number | null>();
  const [oferta, setOferta] = useState<OfertaType | null>();

  function handleAbrirContrato(usuarioID: number, oferta: OfertaType) {
    setPostulanteID(usuarioID);
    setOferta(oferta);
  }

  function onSuccessCrearContrato() {
    props.refetch();
    handleOnOpenOnlyClose();
  }

  function handleOnOpenOnlyClose() {
    if (postulanteID) {
      setOferta(null);
      setPostulanteID(null);
    }
  }

  return (
    <div className="mt-2 flex flex-col gap-9">
      <Dialog open={!!postulanteID} onOpenChange={handleOnOpenOnlyClose}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-left">
              Contratar a influencer
            </DialogTitle>
          </DialogHeader>
          {postulanteID && oferta && (
            <CrearContratoForm
              usuarioID={postulanteID}
              oferta={oferta}
              onCancel={handleOnOpenOnlyClose}
              onSuccess={onSuccessCrearContrato}
            />
          )}
        </DialogContent>
      </Dialog>
      {props.ofertas.map((oferta, index) => (
        <React.Fragment key={oferta.ofertaID}>
          <div className="flex flex-col">
            <div className="font-medium">
              {index + 1}. {oferta.descripcion}
            </div>
            <p className="text-sm">Presupuesto: {oferta.monto} BOB</p>
            <div className="flex flex-col">
              <div className="text-smd text-muted-foreground">
                {oferta.postulantes.length === 0 ? (
                  <p className="mt-0.5">Aún no hay aplicantes</p>
                ) : null}
              </div>
              {oferta.postulantes.map((postulante) => (
                <div
                  key={postulante.usuarioID}
                  className="mt-2 flex flex-col rounded-md border px-2 py-2"
                >
                  <p> {postulante.nombreUsuario}</p>
                  <p className="mt-1 w-fit rounded-md bg-secondary px-2 text-xs font-medium text-secondary-foreground">
                    {postulante.subNombre}
                  </p>

                  <Button
                    className="ml-auto w-fit bg-black/90 px-2 py-1 text-background/90"
                    onClick={() =>
                      handleAbrirContrato(postulante.usuarioID, oferta)
                    }
                  >
                    Contratar
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

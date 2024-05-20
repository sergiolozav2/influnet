import { UserService } from "@/backend";
import { formatToUserDate } from "@/modules/core/utils/formatToUserDate";
import React from "react";
import { RateService } from "./RateService";

type ContratosListProps = {
  contratos: NonNullable<
    Awaited<ReturnType<typeof UserService.getUserContratosEmpresa>>["list"]
  >;
};
export type ContratoType = ContratosListProps["contratos"][0];
export function ContratosList(props: ContratosListProps) {
  return (
    <div className="mt-2 flex flex-col gap-6">
      {props.contratos.map((contrato, index) => (
        <React.Fragment key={contrato.ofertaID}>
          <div className="flex flex-col">
            <div className="font-medium">
              {index + 1}. {contrato.oferta.descripcion}
            </div>
            <div className="flex flex-col">
              <div className="mt-1 grid grid-cols-2 gap-x-2 gap-y-2">
                <div className="flex flex-col">
                  <p className="text-xs font-medium">Presupuesto: </p>
                  <p className="text-foreground/85">
                    {contrato.oferta.monto} BOB
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-xs font-medium">Fecha plazo: </p>
                  <p className="text-foreground/85">
                    {formatToUserDate(contrato.oferta.fechaPlazo)}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-xs font-medium">Categoría </p>
                  <p className="capitalize text-foreground/85">
                    {contrato.oferta.categoria}
                  </p>
                </div>
                <h3 className="col-span-2 mt-1 text-xs font-medium">
                  Datos de influencer
                </h3>
                <div className="flex flex-col">
                  <p className="text-xs font-medium">Nombre </p>
                  <p className="capitalize text-foreground/85">
                    {contrato.contratado.nombre}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-xs font-medium">Usuario </p>
                  <p className="capitalize text-foreground/85">
                    {contrato.contratado.nombreUsuario}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-xs font-medium">Teléfono </p>
                  <p className="capitalize text-foreground/85">
                    {contrato.contratado.telefono}
                  </p>
                </div>
              </div>
            </div>

            <h3 className="mb-1 mt-2 text-sm font-medium text-primary">
              Calificación de servicio
            </h3>
            <RateService defaultRating={4} />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

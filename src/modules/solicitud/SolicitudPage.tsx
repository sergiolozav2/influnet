import { useState } from "react";
import { ModuleTitle } from "../core/components/ModulesLayout";
import { OfertasTab } from "./OfertasTab";
import { ContratosTab } from "./ContratosTab";

const SectionsEnum = {
  ofertas: "ofertas",
  contratos: "contratos",
};
export function SolicitudPage() {
  const [tab, setTab] = useState(SectionsEnum.ofertas);

  return (
    <div className="flex w-full flex-col pb-20">
      <ModuleTitle className="px-4">Ofertas</ModuleTitle>
      <div className="mt-4 flex flex-col px-4">
        <div className="mb-4 flex rounded-[30px] bg-muted font-medium">
          <button
            className={`${tab === SectionsEnum.ofertas ? "bg-secondary text-secondary-foreground" : ""} w-full rounded-[30px] py-2 transition-colors`}
            onClick={() => setTab(SectionsEnum.ofertas)}
          >
            SOLICITUDES
          </button>
          <button
            className={`${tab === SectionsEnum.contratos ? "bg-secondary text-secondary-foreground" : ""} w-full rounded-[30px] py-2 transition-colors`}
            onClick={() => setTab(SectionsEnum.contratos)}
          >
            CONTRATOS
          </button>
        </div>
        {tab === SectionsEnum.ofertas && <OfertasTab />}
        {tab === SectionsEnum.contratos && <ContratosTab />}
      </div>
    </div>
  );
}

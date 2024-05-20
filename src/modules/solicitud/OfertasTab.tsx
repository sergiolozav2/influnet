import { LoadingModule } from "../core/components/LoadingModule";
import { SolicitantesList } from "./components/SolicitantesList";
import { useSolicitantes } from "./hooks/useSolicitantes";

export function OfertasTab() {
  const { data, isLoading, refetch } = useSolicitantes();

  return (
    <>
      <h2 className="text-lg font-medium">Solicitudes de ofertas</h2>

      {isLoading && <LoadingModule />}
      {data?.list?.length === 0 && <p>No tienes ninguna oferta</p>}
      {data?.list && <SolicitantesList ofertas={data.list} refetch={refetch} />}
    </>
  );
}

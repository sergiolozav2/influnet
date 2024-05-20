import { LoadingModule } from "../core/components/LoadingModule";
import { ContratosList } from "./components/ContratosList";
import { useContratos } from "./hooks/useContratos";

export function ContratosTab() {
  const { data, isLoading } = useContratos();

  return (
    <>
      <h2 className="text-lg font-medium">Contratos realizados</h2>

      {isLoading && <LoadingModule />}
      {data?.list?.length === 0 && <p>No tienes ningun contrato</p>}
      {data?.list && <ContratosList contratos={data.list} />}
    </>
  );
}

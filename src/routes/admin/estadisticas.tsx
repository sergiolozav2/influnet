import { EstadisticasPage } from "@/modules/estadisticas/EstadisticasPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/estadisticas")({
  component: Home,
});

function Home() {
  return <EstadisticasPage />;
}

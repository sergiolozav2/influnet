import { LoadingModule } from "@/modules/core/components/LoadingModule";
import { useUsuarioID } from "@/modules/core/store/useAuthStore";
import { PagosPage } from "@/modules/pagos/PagosPage";
import { useProfile } from "@/modules/profile/hooks/useProfile";
import { Navigate, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/pagos")({
  component: Pagos,
});

function Pagos() {
  const usuarioID = useUsuarioID();
  const { data, isLoading } = useProfile(usuarioID ?? 0);

  if (!useUsuarioID) {
    return <Navigate to="/login" />;
  }

  if (isLoading) {
    return <LoadingModule />;
  }
  if (data) {
    return <PagosPage usuario={data} />;
  }
  return <Navigate to="/login" />;
}

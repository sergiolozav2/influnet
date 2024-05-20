import { useAuthStore } from "@/modules/core/store/useAuthStore";
import { SolicitudPage } from "@/modules/solicitud/SolicitudPage";
import { Navigate, createFileRoute } from "@tanstack/react-router";
import { toast } from "react-toastify";

export const Route = createFileRoute("/admin/solicitud")({
  component: Solicitud,
});

export function Solicitud() {
  const esEmpresa = useAuthStore((s) => s.esEmpresa);
  if (esEmpresa) {
    return <SolicitudPage />;
  }
  toast.warning("Solo para compañías!");
  return <Navigate to={"/admin/home"} />;
}

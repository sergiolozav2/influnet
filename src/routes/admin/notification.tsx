import { NotificacionPage } from "@/modules/notificacion/NotificacionPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/notification")({
  component: Notificaciones,
});

function Notificaciones() {
  return <NotificacionPage />;
}

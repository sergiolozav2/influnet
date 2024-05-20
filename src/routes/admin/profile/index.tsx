import { useUsuarioID } from "@/modules/core/store/useAuthStore";
import { Navigate, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/profile/")({
  component: Profile,
});

function Profile() {
  const usuarioID = useUsuarioID();
  if (usuarioID) {
    return (
      <Navigate
        to="/admin/profile/$userID"
        params={{ userID: `${usuarioID}` }}
      />
    );
  }

  return <Navigate to="/login" />;
}

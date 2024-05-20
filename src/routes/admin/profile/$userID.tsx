import { ProfilePage } from "@/modules/profile/ProfilePage";
import { Navigate, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/profile/$userID")({
  component: Pokemon,
});

function Pokemon() {
  const { userID } = Route.useParams();
  const usuarioID = Number.parseInt(userID);
  if (usuarioID) {
    return <ProfilePage usuarioID={usuarioID} />;
  }
  return <Navigate to="/login" />;
}

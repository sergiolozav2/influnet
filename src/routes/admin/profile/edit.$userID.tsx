import { LoadingModule } from "@/modules/core/components/LoadingModule";
import { useAuthStore } from "@/modules/core/store/useAuthStore";
import { EditProfilePage } from "@/modules/profile/EditProfilePage";
import { EditProfilePageCompany } from "@/modules/profile/EditProfilePageCompany";
import { useProfile } from "@/modules/profile/hooks/useProfile";
import { Navigate, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/profile/edit/$userID")({
  component: Pokemon,
});

function Pokemon() {
  const { userID } = Route.useParams();
  const usuarioID = Number.parseInt(userID);
  const { data, isLoading } = useProfile(usuarioID);
  const esEmpresa = useAuthStore(s => s.esEmpresa);
  
  if (!usuarioID) {
    return <Navigate to="/login" />;
  }

  if (isLoading) {
    return <LoadingModule />;
  }
  if(esEmpresa && data) {
    return <EditProfilePageCompany usuario={data}/>
  }
  if (data) {
    return <EditProfilePage usuario={data} />;
  }
  return <Navigate to="/login" />;
}

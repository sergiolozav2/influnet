import { useNavigate } from "@tanstack/react-router";
import { LoadingModule } from "../core/components/LoadingModule";
import { ModuleTitle } from "../core/components/ModulesLayout";
import { CelebrityProfile } from "./components/CelebrityProfile";
import { useProfile } from "./hooks/useProfile";
import { TiArrowBack } from "react-icons/ti";
import { MdSettings } from "react-icons/md";
import { useAuthStore, useUsuarioID } from "../core/store/useAuthStore";
import { Button } from "@/components/ui/button";
import { CompanyProfile } from "./components/CompanyProfile";

type ProfilePageProps = {
  usuarioID: number;
};
export function ProfilePage(props: ProfilePageProps) {
  const { data, isLoading } = useProfile(props.usuarioID);
  const navigate = useNavigate();
  function handleGoBack() {
    navigate({ to: "/admin/home" });
  }

  const setLoggedOut = useAuthStore((state) => state.setLoggedOut);
  const usuarioID = useUsuarioID();
  function handleLogout() {
    setLoggedOut();
    navigate({ to: "/login" });
  }

  function handleGoToEstadisticas() {
    navigate({ to: "/admin/estadisticas" });
  }

  function handleGoToPagos() {
    navigate({ to: "/admin/pagos" });
  }

  function handleEditProfile() {
    navigate({
      to: "/admin/profile/edit/$userID",
      params: { userID: props.usuarioID.toString() },
    });
  }
  const propioPerfil = usuarioID === data?.usuarioID;
  return (
    <div className="flex min-h-screen w-full flex-col bg-primary pb-4">
      <ModuleTitle>
        <div className="flex w-full items-center">
          <button
            className="rounded-full bg-white p-1 text-2xl text-primary"
            onClick={handleGoBack}
          >
            <TiArrowBack />
          </button>
          <p className="ml-3">PERFIL</p>
          {propioPerfil && (
            <button
              className="ml-auto rounded-full bg-white p-1 text-2xl text-primary"
              onClick={handleEditProfile}
            >
              <MdSettings />
            </button>
          )}
        </div>
      </ModuleTitle>
      <div className="flex flex-col px-4">
        {isLoading && <LoadingModule />}
        {data?.perfilCelebridad?.usuarioID && (
          <CelebrityProfile perfil={data} />
        )}
        {data?.perfilEmpresa?.perfilEmpresaID && (
          <CompanyProfile perfil={data} />
        )}
        {propioPerfil && (
          <Button
            onClick={handleGoToEstadisticas}
            className="mx-auto mt-4 min-w-48 bg-black/90"
          >
            Revisar estadísticas
          </Button>
        )}
        {propioPerfil && (
          <Button
            onClick={handleGoToPagos}
            className="mx-auto mt-4 min-w-48 bg-black/90"
          >
            Gestionar pagos
          </Button>
        )}
        {propioPerfil && (
          <Button
            onClick={handleLogout}
            className=" mx-auto mt-4 min-w-48 bg-black/90"
          >
            Cerrar sesión
          </Button>
        )}
      </div>
    </div>
  );
}

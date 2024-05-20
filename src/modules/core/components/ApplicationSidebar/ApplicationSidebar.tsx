import {
  MdOutlineCategory,
  MdOutlineHome,
  MdOutlineNotifications,
  MdOutlinePerson,
  MdSearch,
} from "react-icons/md";
import { SidebarLink } from "./components/SidebarLink";
import { useAuthStore } from "../../store/useAuthStore";
import { FaRegEnvelope } from "react-icons/fa6";

export function ApplicationSidebar() {
  const esEmpresa = useAuthStore((s) => s.esEmpresa);

  return (
    <div className={`fixed inset-0 top-auto z-10`}>
      <div
        className={`h-full flex-col border-t border-input bg-primary md:flex`}
      >
        <div className="flex gap-1.5 font-medium">
          <SidebarLink
            to="/admin/home"
            text="Inicio"
            icon={<MdOutlineHome />}
          />
          {esEmpresa ? (
            <SidebarLink
              to="/admin/solicitud"
              text="Solicitudes"
              icon={<FaRegEnvelope />}
            />
          ) : (
            <SidebarLink
              to="/admin/categories"
              text="Categoría"
              icon={<MdOutlineCategory />}
            />
          )}
          <SidebarLink to="/admin/search" text="Buscar" icon={<MdSearch />} />
          <SidebarLink
            to="/admin/notification"
            text="Notificaciones"
            icon={<MdOutlineNotifications />}
          />
          <SidebarLink
            to="/admin/profile"
            text="Perfil"
            icon={<MdOutlinePerson />}
          />
        </div>
      </div>
    </div>
  );
}

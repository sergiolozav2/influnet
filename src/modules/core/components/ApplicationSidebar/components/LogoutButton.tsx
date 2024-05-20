import { MdLogout } from "react-icons/md";
import { SidebarTitle } from "./SidebarTitle";
import { useNavigate } from "@tanstack/react-router";
import { useAuthStore } from "@/modules/core/store/useAuthStore";

export function LogoutButton() {
  const navigate = useNavigate();
  const setLoggedOut = useAuthStore((state) => state.setLoggedOut);

  function handleLogout() {
    setLoggedOut();
    navigate({ to: "/login" });
  }
  return (
    <button
      className="w-full rounded-md font-normal text-foreground/70 hover:text-primary/80"
      onClick={handleLogout}
    >
      <SidebarTitle text="Salir" icon={<MdLogout />} />
    </button>
  );
}

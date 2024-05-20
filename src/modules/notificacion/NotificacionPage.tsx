import { ModuleTitle } from "../core/components/ModulesLayout";
import { IoMdRefresh } from "react-icons/io";
import { useNotificaciones } from "./hooks/useNotificaciones";
import { LoadingModule } from "../core/components/LoadingModule";
import { NotificacionesList } from "./components/NotificacionesList";
import { FaCaretDown } from "react-icons/fa6";

export function NotificacionPage() {
  const { data, isLoading, refetch } = useNotificaciones();
  function handleRefresh() {
    refetch();
  }
  return (
    <div className="flex w-full flex-col">
      <ModuleTitle>
        <div className="flex w-full items-center">
          <p className="ml-3">NOTIFICACIONES</p>
          <button
            className="ml-auto rounded-full p-1 text-2xl text-white"
            onClick={handleRefresh}
          >
            <IoMdRefresh className="scale-x-[-1]" />
          </button>
        </div>
      </ModuleTitle>
      <div className="fade-in-animation mt-4 flex flex-col px-4 pb-20">
        <div className="mx-auto flex w-fit items-center border border-primary/40 px-4 py-1">
          <p className="font-medium">ÚLTIMOS 7 DÍAS</p>
          <div className="ml-2 rounded-full bg-primary/20 p-1">
            <FaCaretDown className="text-white" />
          </div>
        </div>
        {data?.list && <NotificacionesList notificaciones={data.list} />}
        {isLoading && <LoadingModule />}
      </div>
    </div>
  );
}

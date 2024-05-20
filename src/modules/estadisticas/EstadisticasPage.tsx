import { IoIosArrowBack } from "react-icons/io";
import { ModuleTitle } from "../core/components/ModulesLayout";
import { useToken } from "../core/store/useAuthStore";
import { useQuery } from "@tanstack/react-query";
import { UserService } from "@/backend";
import { LoadingModule } from "../core/components/LoadingModule";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatToShortDate } from "../core/utils/formatToUserDate";

export function EstadisticasPage() {
  function handleGoBack() {
    window.history.back();
  }

  const token = useToken();
  const { data, isLoading } = useQuery({
    queryKey: ["estadisticas"],
    queryFn: () => UserService.getUserEstadisticas(token),
  });
  return (
    <div className="flex min-h-screen w-full flex-col bg-primary pb-20">
      <ModuleTitle className="bg-background pl-3 pr-4 text-foreground ">
        <div className="flex items-center gap-2">
          <button
            className="rounded-full p-0.5 text-xl hover:bg-black/15"
            onClick={handleGoBack}
          >
            <IoIosArrowBack />
          </button>
          <p className="first-letter:capitalize">Estadísticas</p>
        </div>
      </ModuleTitle>
      <div className="fade-in-animation flex flex-col px-4 pt-4">
        {isLoading && <LoadingModule />}
        {data && (
          <div className="grid grid-cols-2 gap-x-4 gap-y-4">
            <div className="flex flex-col rounded-md bg-white/40 px-3 py-3 font-medium">
              <p className="text-base text-foreground/95">Total publicaciones</p>
              <p className="text-lg">{data.postsCreados}</p>
            </div>
            <div className="flex flex-col rounded-md bg-white/40 px-3 py-3 font-medium">
              <p className="text-base text-foreground/95">Ganancias</p>
              <p className="text-lg">{data.ganancias} BOB</p>
            </div>

            <div className="col-span-2 flex flex-col rounded-md bg-white/40 px-3 py-3 font-medium">
              <p className="mb-2 text-base text-foreground/95">
                Interacciones este mes
              </p>
              <div className="h-36 w-full stroke-orange-200">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data.reaccionesTimestamps} margin={{}}>
                    <Line
                      type="monotone"
                      dot={false}
                      dataKey="count"
                      stroke="#512b96"
                      strokeWidth={3}
                    />
                    <YAxis
                      padding={{ top: 10 }}
                      dataKey="count"
                      fontSize={12}
                      interval={0}
                      strokeWidth={2}
                      stroke="#fffb"
                      width={30}
                    />
                    <XAxis
                      className="translate-y-0.5"
                      fontSize={12}
                      strokeWidth={2}
                      padding={{ right: 20 }}
                      dataKey={(values) =>
                        formatToShortDate(values?.timestamp, false)
                      }
                      stroke="#fffb"
                    />
                    <Tooltip
                      content={function (a) {
                        const value = a.payload?.at(0)?.value;
                        const label = a.label;
                        return (
                          <div className="flex flex-col rounded-md bg-white px-2 py-1 text-sm">
                            <p className="font-medium">
                              Reacciones del {label}
                            </p>
                            <p className="text-foreground/80">{value} likes</p>
                          </div>
                        );
                      }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="flex flex-col rounded-md bg-white/40 px-3 py-3 font-medium">
              <p className="text-base text-foreground/95">Reacciones</p>
              <p className="text-lg">{data.reacciones}</p>
            </div>
            <div className="flex flex-col rounded-md bg-white/40 px-3 py-3 font-medium">
              <p className="text-base text-foreground/95">Comentarios</p>
              <p className="text-lg">{data.comentarios}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

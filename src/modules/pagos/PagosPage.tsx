import { UserService } from "@/backend";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { FaCircle } from "react-icons/fa6";
import { IoIosRefresh } from "react-icons/io";
import { MdLogout } from "react-icons/md";

type PagosPageProps = {
  usuario: NonNullable<Awaited<ReturnType<typeof UserService.getUserProfile>>>;
};

export function PagosPage(props: PagosPageProps) {
  function handleGoBack() {
    window.history.back();
  }
  return (
    <div className="flex min-h-screen w-full flex-col bg-background pb-4">
      <button
        className="-ml-4 -mt-4 grid h-24 w-24 place-items-center rounded-full bg-primary/80"
        onClick={handleGoBack}
      >
        <IoIosRefresh className="scale-x-[-1] text-5xl text-white" />
      </button>

      <div className="flex flex-col px-6">
        <div className="flex items-center px-8">
          <div className="flex flex-col">
            <p className="text-xl font-medium capitalize text-primary">
              {props.usuario.nombre}
            </p>
            <p className="text-muted-foreground">Cuenta Bancaria</p>
          </div>
          <Avatar className="mb-2 ml-auto mt-4 h-16 w-16">
            <AvatarImage src={props.usuario.imagen} />
            <AvatarFallback>
              {props.usuario.nombre.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="mt-4 flex px-8">
          <div className="relative isolate h-52 w-full rounded-3xl bg-primary shadow-lg">
            <div
              className="absolute bottom-3 right-3 -z-10 h-36 w-36
            rounded-full bg-gradient-to-r from-primary to-blue-500 "
            ></div>
            <div className="flex flex-col px-4 pt-12 text-sm text-background">
              <p className="font-semibold">Main Card</p>
              <p className="text-smd">Balance</p>
              <p className="text-smd">Bs 1500</p>

              <div className="mt-8 flex items-center gap-1 text-[6px]">
                <FaCircle />
                <FaCircle />
                <FaCircle />
                <FaCircle />
                <FaCircle className="ml-3" />
                <FaCircle />
                <FaCircle />
                <FaCircle />
                <FaCircle className="ml-3" />
                <FaCircle />
                <FaCircle />
                <FaCircle />
                <div className="mb-0.5 ml-3 flex gap-1 text-smd">
                  <p>1</p>
                  <p>2</p>
                  <p>2</p>
                  <p>2</p>
                </div>
              </div>
              <p className="mt-1">{props.usuario.ciudad}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col">
          <p>Transacciones recientes</p>
          <div className="mt-2 flex">
            <MdLogout className="text-4xl" />
            <div className="ml-4 text-sm font-medium">
              <p>Pago Forever 21</p>
              <p className="text-smd text-muted-foreground">
                02:15 PM - Marzo 17, 2024
              </p>
            </div>
            <p className="ml-auto text-sm text-violet-600">Bs. 370</p>
          </div>
          <Separator className="mt-2" />
          <div className="mt-2 flex">
            <MdLogout className="text-4xl" />
            <div className="ml-4 text-sm font-medium">
              <p>Pago Papingo mamingo</p>
              <p className="text-smd text-muted-foreground">
                06:18 PM - Marzo 15, 2024
              </p>
            </div>
            <p className="ml-auto text-sm text-violet-600">Bs. 1570</p>
          </div>

          <Separator className="mt-2" />
          <div className="mt-2 flex">
            <MdLogout className="text-4xl" />
            <div className="ml-4 text-sm font-medium">
              <p>Pago Suscripción Premium</p>
              <p className="text-smd text-muted-foreground">
                09:15 PM - Marzo 14, 2024
              </p>
            </div>
            <p className="ml-auto text-sm text-violet-600">Bs. 600</p>
          </div>
          <Separator className="mt-2" />
          <div className="mt-2 flex">
            <MdLogout className="text-4xl" />
            <div className="ml-4 text-sm font-medium">
              <p>Pago Starbucks</p>
              <p className="text-smd text-muted-foreground">
                10:15 PM - Marzo 17, 2024
              </p>
            </div>
            <p className="ml-auto text-sm text-violet-600">Bs. 900</p>
          </div>

          <Separator className="mt-2" />
        </div>
      </div>
    </div>
  );
}

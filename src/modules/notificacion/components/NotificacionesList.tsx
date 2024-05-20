import { NotificacionService } from "@/backend";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { formatTimePassedOrDate } from "@/modules/core/utils/formatToUserDate";
import React from "react";
import { HiOutlineUsers } from "react-icons/hi";
import { IoMdArrowBack } from "react-icons/io";

type NotificacionesListProps = {
  notificaciones: NonNullable<
    Awaited<
      ReturnType<typeof NotificacionService.getNotificacionNotificacion>
    >["list"]
  >;
};

type NotificacionType = NotificacionesListProps["notificaciones"][0];

export function NotificacionesList(props: NotificacionesListProps) {
  return (
    <div className="mt-8 flex flex-col">
      <div className="flex items-center">
        <HiOutlineUsers className="min-w-12 text-3xl" />
        <p className="px-2 text-sm">
          Hemos encontrado influencers que comparten contenido relacionado con
          tus favoritos. ¡Échales un vistazo!
        </p>
        <div className="ml-auto flex w-6 rounded-full p-0.5 hover:bg-foreground/15">
          <IoMdArrowBack className="scale-x-[-1] text-3xl" />
        </div>
      </div>
      <Separator className="mt-2" />
      {props.notificaciones.map((noti) => (
        <React.Fragment key={noti.notificacionID}>
          <div className="mt-2 flex w-full items-center">
            <div className="w-12">
              <Avatar className="h-12 w-12">
                <AvatarImage src={noti.causador?.imagen} />
                <AvatarFallback>
                  {noti.causador?.nombreUsuario?.slice(0, 2)?.toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col px-2">
              <p className="font-medium text-primary/80">
                {noti.causador?.nombreUsuario}
              </p>
              <p className="text-sm">{mensajeDeNotificacion(noti)}</p>
              <p className="text-xs mt-1">{formatTimePassedOrDate(noti.creadoEn)}</p>
            </div>
            <div className="ml-auto flex w-6 rounded-full p-0.5 hover:bg-foreground/15">
              <IoMdArrowBack className="scale-x-[-1] text-3xl" />
            </div>
          </div>
          <Separator className="mt-2" />
        </React.Fragment>
      ))}
    </div>
  );
}

function mensajeDeNotificacion(noti: NotificacionType) {
  if (noti.tipo === "reaccion") {
    return `Ha reaccionado a tu post!`;
  }

  if (noti.tipo === "comentario") {
    return `Ha comentado en tu post!`;
  }

  if (noti.tipo === "contratado") {
    return `Felicidades! La empresa ${noti.causador?.nombreUsuario} te ha contratado para la oferta.`;
  }
}

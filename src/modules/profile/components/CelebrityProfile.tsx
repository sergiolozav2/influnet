import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UsuarioType } from "../types";
import { MdLocationPin, MdOutlinePerson2, MdVerified } from "react-icons/md";

interface PerfilCelebridadType extends UsuarioType {
  perfilCelebridad?: {
    perfilCelebridadID: number;
    genero: string;
    plataformas: string;
    usuarioID: number;
  };
}

interface CelebrityProfileProps {
  perfil: PerfilCelebridadType;
}
export function CelebrityProfile(props: CelebrityProfileProps) {
  return (
    <div className="">
      <div className="flex flex-col rounded-xl bg-gradient-to-br from-pink-400 to-violet-800 px-4 py-4">
        <div className="flex">
          <Avatar className="mt-4 h-12 w-12">
            <AvatarImage src={props.perfil.imagen} />
            <AvatarFallback>
              {props.perfil.nombre.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="ml-3 flex flex-col text-primary-foreground">
            <p className="text-xl font-semibold capitalize">
              {props.perfil.nombre}
            </p>
            <p className="text-sm">
              {props.perfil.bio ? props.perfil.bio : "Mi perfil de Influnet"}
            </p>
          </div>
        </div>

        <div className="mt-3.5 flex flex-wrap gap-2 text-sm">
          <div className="flex items-center bg-white/20 px-2 py-0.5 text-primary-foreground/90">
            <MdOutlinePerson2 />
            <p className="ml-1">{props.perfil.perfilCelebridad?.genero}</p>
          </div>
          <div className="flex items-center bg-white/20 px-2 py-0.5 text-primary-foreground/90">
            <MdVerified />
            <p className="ml-1">{props.perfil.subNombre}</p>
          </div>
          <div className="flex items-center bg-white/20 px-2 py-0.5 text-primary-foreground/90">
            <MdLocationPin />
            <p className="ml-1">{props.perfil.ciudad}</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col text-primary-foreground">
        <h2 className="text-lg font-semibold">Colaboraciones con marcas</h2>
        <p className="text-muted">Ninguna colaboración</p>
        <h2 className="mt-2 text-lg font-semibold">Plataformas</h2>
        <p className="text-muted">Ninguna plataforma </p>
        <h2 className="mt-2 text-lg font-semibold">Hashtags más utilizados</h2>
        <p className="text-muted">No se encontró ningún hashtag</p>
      </div>
    </div>
  );
}

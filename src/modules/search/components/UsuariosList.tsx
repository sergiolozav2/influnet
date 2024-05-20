import { SearchService } from "@/backend";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "@tanstack/react-router";

type UsuariosListProps = {
  usuarios: NonNullable<
    Awaited<ReturnType<typeof SearchService.getSearchUsuarios>>["list"]
  >;
};
export function UsuariosList(props: UsuariosListProps) {
  return (
    <div className="flex flex-col gap-4">
      {props.usuarios.length === 0 && <p> No se encontraron resultados</p>}
      {props.usuarios.map((usuario) => (
        <div key={usuario.usuarioID} className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={usuario.imagen} />
            <AvatarFallback>
              {usuario.nombre.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <Link
              className="font-semibold text-primary"
              to="/admin/profile/$userID"
              params={{ userID: `${usuario.usuarioID}` }}
            >
              {usuario.nombreUsuario}
            </Link>
            <p className="text-xs font-medium">{usuario.subNombre}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

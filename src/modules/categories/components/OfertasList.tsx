import { SearchService } from "@/backend";
import { FavoriteToggle } from "./FavoriteToggle";
import { useUsuarioID } from "@/modules/core/store/useAuthStore";
import { PostularButton } from "./PostularButton";

type OfertasListProps = {
  ofertas: NonNullable<
    Awaited<ReturnType<typeof SearchService.getSearchOfertas>>["list"]
  >;
};
export function OfertasList(props: OfertasListProps) {
  const usuarioID = useUsuarioID();
  return (
    <div className="mt-1 flex flex-col gap-4">
      {props.ofertas.map((oferta) => (
        <div
          key={`${oferta.ofertaID}-${oferta.favoritoPor}`}
          className="relative flex flex-col rounded-md bg-card px-2 py-2 text-sm"
        >
          <FavoriteToggle
            ofertaID={oferta.ofertaID}
            defaultSelected={oferta.favoritoPor.includes(usuarioID ?? 0)}
          />
          <div className="flex">
            <img
              src={
                oferta.usuario.imagen === ""
                  ? "https://d2jhcfgvzjqsa8.cloudfront.net/storage/2022/04/download.png"
                  : oferta.usuario.imagen
              }
              className="w-28 max-w-28 object-cover"
            />
            <div className="flex flex-col px-4 pt-1 text-smd font-medium">
              <p className="font-semibold capitalize">
                {oferta.usuario.nombreUsuario}
              </p>
              <p className="text-foreground/80">{oferta.usuario.ciudad}</p>
              <p className="text-foreground/80">{oferta.monto} BOB</p>
            </div>
          </div>
          <div className="flex flex-col pt-2">
            <p className="w-fit rounded-md bg-primary px-1.5 text-smd font-semibold capitalize text-primary-foreground">
              {oferta.categoria}
            </p>
            <p className="mt-1">{oferta.descripcion}</p>
          </div>
          <PostularButton
            onError={() => 0}
            onSuccess={() => 0}
            ofertaID={oferta.ofertaID}
          />
        </div>
      ))}
    </div>
  );
}

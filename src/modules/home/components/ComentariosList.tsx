import { Button } from "@/components/ui/button";
import { zodExtra } from "@/lib/zodExtra";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useComentarios } from "../hooks/useComentarios";
import { useComentarPost } from "../hooks/useComentarPost";
import { toast } from "react-toastify";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatFullDate } from "@/modules/core/utils/formatToUserDate";

type ComentariosListProps = {
  postID: number;
};

const formData = z.object({
  texto: zodExtra.string(),
});
type formDataType = z.infer<typeof formData>;

export function ComentariosList(props: ComentariosListProps) {
  const { register, handleSubmit, reset } = useForm<formDataType>({
    resolver: zodResolver(formData),
    defaultValues: {
      texto: "",
    },
  });

  const comentario = useComentarPost({
    postID: props.postID,
    onError,
    onSuccess,
  });

  const { data, refetch } = useComentarios(props.postID);

  function handlePostComment(data: formDataType) {
    comentario.mutate(data.texto);
  }

  function onSuccess() {
    refetch();
    reset();
  }
  function onError() {
    toast.error("No se pudo envíar el comentario!");
  }

  return (
    <div className="flex flex-col">
      <form
        className="flex flex-col"
        onSubmit={handleSubmit(handlePostComment)}
      >
        <textarea
          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          placeholder="Escribe un comentario"
          {...register("texto")}
        />
        <Button className="ml-auto mt-3 px-2 py-1 text-sm">Envíar</Button>
      </form>

      <div className="mt-4 flex max-h-72 flex-col overflow-auto text-sm">
        {data?.list && (
          <div className="flex flex-col gap-4">
            {data.list.length === 0 && (
              <p className="text-center">No hay ningún comentario!</p>
            )}
            {data.list.map((comentario) => (
              <div key={comentario.comentarioID} className="flex">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={comentario.usuario.imagen} />
                  <AvatarFallback>
                    {comentario.usuario.nombreUsuario
                      ?.slice(0, 2)
                      ?.toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="ml-2 flex w-full flex-col">
                  <div className="flex flex-col rounded-lg bg-muted/70 px-3 py-2 pt-1.5">
                    <p className="text-sm font-medium">
                      {comentario.usuario.nombreUsuario}
                    </p>
                    <p className="text-md"> {comentario.texto}</p>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {formatFullDate(comentario.creadoEn)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

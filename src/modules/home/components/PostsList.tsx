import { PostService } from "@/backend";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";
import React from "react";
import { MdModeComment } from "react-icons/md";
import { LikeButton } from "./LikeButton";
import { useUsuarioID } from "@/modules/core/store/useAuthStore";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ComentariosList } from "./ComentariosList";

type PostsListProps = {
  posts: NonNullable<Awaited<ReturnType<typeof PostService.getPost>>["list"]>;
};

export function PostsList(props: PostsListProps) {
  const usuarioID = useUsuarioID();
  return (
    <div className="mt-3 flex flex-col gap-2">
      {props.posts.map((post) => (
        <React.Fragment key={post.postID}>
          <div className="mt-1.5 flex flex-col">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={post.usuario.imagen} />
                <AvatarFallback>
                  {post.usuario.nombre.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <Link
                  className="font-semibold text-primary"
                  to="/admin/profile/$userID"
                  params={{ userID: `${post.usuarioID}` }}
                >
                  {post.usuario.nombreUsuario}
                </Link>
                <p className="text-xs font-medium">{post.usuario.subNombre}</p>
              </div>
            </div>
            <div className="mt-2 flex flex-col">
              <p>{post.descripcion}</p>
              {post.imagen.length !== 0 ? (
                <img
                  className="mt-2 max-h-64 w-full max-w-2xl border object-cover"
                  src={post.imagen}
                />
              ) : null}
            </div>
            <div className="mb-1 mt-2 flex justify-between text-2xl text-primary/85">
              <div className="flex gap-4">
                <LikeButton
                  defaultLiked={post.reacciones.includes(usuarioID ?? 0)}
                  postID={post.postID}
                  reacciones={post.reacciones.length}
                />
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <div>
                    <MdModeComment />
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Comentarios</DialogTitle>
                  </DialogHeader>
                  <ComentariosList postID={post.postID} />
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <Separator />
        </React.Fragment>
      ))}
    </div>
  );
}

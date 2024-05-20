import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ModuleTitle } from "../core/components/ModulesLayout";
import { CreatePostForm } from "./components/CreatePostForm";
import { useState } from "react";
import { useAllPosts } from "./hooks/useAllPosts";
import { LoadingModule } from "../core/components/LoadingModule";
import { PostsList } from "./components/PostsList";
import { useAuthStore } from "../core/store/useAuthStore";
import { Button } from "@/components/ui/button";
import { CreateOfertaForm } from "./components/CreateOfertaForm";

export function HomePage() {
  const [dialog, setDialog] = useState(false);
  const [oferta, setOferta] = useState(false);

  const { data, isLoading } = useAllPosts();
  const esEmpresa = useAuthStore((s) => s.esEmpresa);

  function handleSucessCreatingPost() {
    setDialog(false);
  }
  function handleSucessCreatingOferta() {
    setOferta(false);
  }
  return (
    <div className="flex w-full flex-col">
      <ModuleTitle>INICIO</ModuleTitle>
      <div className="fade-in-animation flex flex-col px-4 pb-20">
        <div className="mt-4 flex flex-col">
          {esEmpresa && (
            <Dialog open={oferta} onOpenChange={setOferta}>
              <DialogTrigger asChild>
                <Button variant="secondary" className="mb-4 text-base">
                  Crear oferta de trabajo
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Crear oferta de trabajo</DialogTitle>
                </DialogHeader>
                <CreateOfertaForm handleSuccess={handleSucessCreatingOferta} />
              </DialogContent>
            </Dialog>
          )}

          <Dialog open={dialog} onOpenChange={setDialog}>
            <DialogTrigger asChild>
              <button
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 pb-8 text-sm text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                onClick={() => setDialog(true)}
              >
                Crea una publicación para compartir
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Crear una publicación</DialogTitle>
              </DialogHeader>
              <CreatePostForm handleSuccess={handleSucessCreatingPost} />
            </DialogContent>
          </Dialog>
        </div>
        <p className="mt-4 text-lg font-medium">Publicaciones</p>
        {isLoading && <LoadingModule />}
        {data?.list && <PostsList posts={data.list} />}
      </div>
    </div>
  );
}

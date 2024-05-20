import { MdSearch } from "react-icons/md";
import { ModuleTitle } from "../core/components/ModulesLayout";
import { useAllOfertas } from "./hooks/useOfertas";
import { LoadingModule } from "../core/components/LoadingModule";
import { OfertasList } from "./components/OfertasList";
import { useNavigate } from "@tanstack/react-router";
import { useOfertasFavoritas } from "./hooks/useOfertasFavoritas";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodExtra } from "@/lib/zodExtra";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formData = z.object({
  query: zodExtra.string(),
});
type formDataType = z.infer<typeof formData>;

export function CategoriesPage() {
  const { data, isLoading } = useAllOfertas();
  const { data: dataFavorites, isLoading: isLoadingFavorites } =
    useOfertasFavoritas();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<formDataType>({
    resolver: zodResolver(formData),
  });

  async function handleSearch(values: formDataType) {
    navigate({
      to: "/admin/categories/search",
      search: {
        query: values.query,
        title: `Resultados: ${values.query}`,
      },
    });
  }
  function goToAlimentos() {
    navigate({
      to: "/admin/categories/search",
      search: {
        query: "gastronom",
        title: "Alimentos y bebidas",
      },
    });
  }
  function goToEventos() {
    navigate({
      to: "/admin/categories/search",
      search: {
        query: "eventos",
      },
    });
  }
  function goToBelleza() {
    navigate({
      to: "/admin/categories/search",
      search: {
        query: "belleza",
        title: "Belleza y cuidado personal",
      },
    });
  }
  function goToViajes() {
    navigate({
      to: "/admin/categories/search",
      search: {
        query: "viajes",
        title: "Viajes y turismo",
      },
    });
  }
  return (
    <div className="flex w-full flex-col pb-20">
      <ModuleTitle className="bg-background px-4 text-foreground">
        Ofertas por categorización
      </ModuleTitle>
      <div className="fade-in-animation flex flex-col px-4">
        <form
          className="flex items-center"
          onSubmit={handleSubmit(handleSearch)}
        >
          <Input
            className="flex w-full items-center justify-between rounded-r-none border border-input bg-background px-3 py-2 text-sm text-muted-foreground focus:outline-none focus-visible:ring-0"
            placeholder="Buscar aquí"
            {...register("query")}
          />
          <button className="w-9 h-9 rounded-r-md bg-primary text-primary-foreground">
            <MdSearch className="mx-auto text-lg" />
          </button>
        </form>
        <div className="mt-6 flex flex-col">
          <h2 className="font-medium">Colaboraciones por rubro</h2>
          <div className="mt-1 grid grid-cols-2 gap-x-1.5 gap-y-2">
            <button
              className="flex items-center gap-2 rounded-lg border border-border/60 px-2 py-2"
              onClick={goToAlimentos}
            >
              <div className="flex max-w-8 rounded-full bg-black/10 p-1.5">
                <img
                  src="/images/icons/pera.jpeg"
                  className="mix-blend-multiply"
                />
              </div>
              <p className="text-left text-smd font-medium">
                Alimentación y bebidas
              </p>
            </button>
            <button
              className="flex items-center gap-2 rounded-lg border border-border/60 px-2 py-2"
              onClick={goToBelleza}
            >
              <div className="flex max-w-8 rounded-full bg-black/10 p-1.5">
                <img
                  src="/images/icons/labial.jpeg"
                  className="mix-blend-multiply"
                />
              </div>
              <p className="text-left text-smd font-medium">
                Belleza y cuidado personal
              </p>
            </button>
            <button
              className="flex items-center gap-2 rounded-lg border border-border/60 px-2 py-2"
              onClick={goToEventos}
            >
              <div className="flex max-w-8 rounded-full bg-black/10 p-1.5">
                <img
                  src="/images/icons/vestido.jpeg"
                  className="mix-blend-multiply"
                />
              </div>
              <p className="text-left text-smd font-medium">Eventos</p>
            </button>
            <button
              className="flex items-center gap-2 rounded-lg border border-border/60 px-2 py-2"
              onClick={goToViajes}
            >
              <div className="flex max-w-8 rounded-full bg-black/10 p-1.5">
                <img
                  src="/images/icons/avion.jpeg"
                  className="mix-blend-multiply"
                />
              </div>
              <p className="text-left text-smd font-medium">Viajes y turismo</p>
            </button>
          </div>
        </div>
        <div className="mb-6 flex flex-col">
          <h2 className="mt-4 font-medium">Mis favoritos</h2>
          {isLoadingFavorites && <LoadingModule />}
          {dataFavorites?.list && <OfertasList ofertas={dataFavorites.list} />}
          {dataFavorites?.list?.length === 0 && (
            <p className="text-sm">No tienes ninguna oferta favorita</p>
          )}
        </div>
        <h2 className="font-medium">Recomendados para tí</h2>
        {isLoading && <LoadingModule />}
        {data?.list && <OfertasList ofertas={data.list} />}
      </div>
    </div>
  );
}

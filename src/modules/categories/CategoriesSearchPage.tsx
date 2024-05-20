import { ModuleTitle } from "../core/components/ModulesLayout";
import { IoIosArrowBack } from "react-icons/io";
import { useOfertas } from "./hooks/useOfertas";
import { LoadingModule } from "../core/components/LoadingModule";
import { OfertasList } from "./components/OfertasList";

type CategoriesSearchPageProps = {
  query: string;
  title: string;
};
export function CategoriesSearchPage(props: CategoriesSearchPageProps) {
  function handleGoBack() {
    window.history.back();
  }

  const { isLoading, data } = useOfertas(props.query);
  return (
    <div className="flex w-full flex-col pb-20">
      <ModuleTitle className="bg-background pl-3 pr-4 text-foreground ">
        <div className="flex items-center gap-2">
          <button
            className="rounded-full p-0.5 text-xl hover:bg-black/15"
            onClick={handleGoBack}
          >
            <IoIosArrowBack />
          </button>
          <p className="first-letter:capitalize">{props.title}</p>
        </div>
      </ModuleTitle>
      <div className="fade-in-animation flex flex-col px-4">
        {isLoading && <LoadingModule />}
        {data?.list && <OfertasList ofertas={data.list} />}
      </div>
    </div>
  );
}

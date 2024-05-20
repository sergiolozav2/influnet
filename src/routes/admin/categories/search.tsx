import { CategoriesSearchPage } from "@/modules/categories/CategoriesSearchPage";
import { createFileRoute } from "@tanstack/react-router";

type CategoriesSearch = {
  query: string;
  title?: string;
};
export const Route = createFileRoute("/admin/categories/search")({
  validateSearch: (search: Record<string, unknown>): CategoriesSearch => {
    return {
      query: `${search?.query ?? ""}`,
      title: search?.title ? `${search?.title}` : undefined,
    };
  },
  component: CategoriesSearch,
});

function CategoriesSearch() {
  const { query, title } = Route.useSearch();
  return <CategoriesSearchPage query={query} title={title ?? query} />;
}

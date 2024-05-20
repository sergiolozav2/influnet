import { SearchPage } from "@/modules/search/SearchPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/search")({
  component: Search,
});

function Search() {
  return <SearchPage />;
}

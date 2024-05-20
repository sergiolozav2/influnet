import { CategoriesPage } from "@/modules/categories/CategoriesPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/categories/")({
  component: Routes,
});

function Routes() {
  return <CategoriesPage />;
}

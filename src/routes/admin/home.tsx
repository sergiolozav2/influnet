import { HomePage } from "@/modules/home/HomePage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/home")({
  component: Home,
});

function Home() {
  return <HomePage />;
}

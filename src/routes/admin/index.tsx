import { Navigate, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/")({
  component: Home,
});

function Home() {
  return <Navigate to="/admin/home" />;
}

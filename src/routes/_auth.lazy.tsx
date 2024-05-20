import { Outlet, createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_auth")({
  component: AuthLayout,
});

function AuthLayout() {
  return <Outlet />;
}

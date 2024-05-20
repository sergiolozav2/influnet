import { StartPage } from "@/modules/auth/StartPage";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_auth/start")({
  component: StartPage,
});

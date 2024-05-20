import { createLazyFileRoute } from "@tanstack/react-router";
import { LoginPage } from "../modules/auth/LoginPage";

export const Route = createLazyFileRoute("/_auth/login")({
  component: Login,
});

function Login() {
  return <LoginPage />;
}

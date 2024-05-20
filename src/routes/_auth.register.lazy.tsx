import { createLazyFileRoute } from "@tanstack/react-router";
import { RegisterPage } from "../modules/auth/RegisterPage";

export const Route = createLazyFileRoute("/_auth/register")({
  component: Register,
});

function Register() {
  return <RegisterPage />;
}

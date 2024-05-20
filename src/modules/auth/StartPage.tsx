import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";

export function StartPage() {
  const navigate = useNavigate();

  function goToLogin() {
    navigate({ to: "/login" });
  }
  function goToRegister() {
    navigate({ to: "/register" });
  }
  return (
    <div className="flex h-screen min-h-screen flex-col justify-end bg-background">
      <div className="flex flex-1 flex-col items-center justify-center">
        <img className="w-32" src="/images/logo/logo-256.jpg" />
        <h1 className="mt-4 font-medium text-secondary">
          DONDE LAS MARCAS ENCUENTRAN SU VOZ
        </h1>
      </div>

      <div className="flex h-3/5 flex-col items-center justify-center rounded-t-[40px] bg-primary text-xl">
        <div className="mb-16 flex w-fit flex-col gap-4">
          <Button
            onClick={goToLogin}
            className="bg-secondary px-8 text-xl hover:bg-secondary/85"
          >
            Iniciar sesión
          </Button>
          <Button
            onClick={goToRegister}
            className="bg-white/25 px-8 text-xl hover:bg-white/10"
          >
            Crear cuenta
          </Button>
        </div>
      </div>
    </div>
  );
}

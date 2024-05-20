import { Navigate, useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { useLogin } from "./hooks/useLogin";
import { useAuthStore } from "../core/store/useAuthStore";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IoIosRefresh } from "react-icons/io";
import { zodExtra } from "@/lib/zodExtra";
import { z } from "zod";
import { ErrorLabel } from "@/components/ui/error-label";

const formData = z.object({
  email: zodExtra.string(),
  password: zodExtra.string(),
});
type formDataType = z.infer<typeof formData>;

export function LoginPage() {
  const navigate = useNavigate();
  const {
    register,
    getValues,
    trigger,
    formState: { errors },
  } = useForm<formDataType>();

  const { login } = useLogin();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  async function onSubmit() {
    const isValid = await trigger();
    if (!isValid) return;
    login(getValues());
  }

  if (isLoggedIn) {
    return <Navigate to="/admin/" />;
  }

  function handleGoBack() {
    navigate({ to: "/start" });
  }
  return (
    <div className="flex h-screen min-h-screen flex-col bg-primary">
      <div className="flex h-2/5 flex-col justify-between rounded-b-[40px] bg-background">
        <button
          className="-ml-4 -mt-4 grid h-24 w-24 place-items-center rounded-full bg-primary/80"
          onClick={handleGoBack}
        >
          <IoIosRefresh className="scale-x-[-1] text-5xl text-primary" />
        </button>
        <div className="flex flex-col text-4xl font-medium">
          <h1 className="text-center text-primary/80">INICIAR</h1>
          <h1 className="mb-6 text-center text-primary/80">SESIÓN</h1>
        </div>
      </div>
      <div className="flex h-3/5 flex-col items-center px-10 text-background">
        <div className="mt-14 flex w-full flex-col gap-1.5">
          <label className="font-medium"> Email </label>
          <Input
            placeholder="Ingresa tu email"
            {...register("email")}
            type="email"
          />
          <ErrorLabel text={errors.email?.message} />
        </div>
        <div className="mt-6 flex w-full flex-col gap-1.5">
          <label className="font-medium"> Contraseña </label>
          <Input
            placeholder="Ingresa tu contraseña"
            type="password"
            {...register("password")}
          />
          <ErrorLabel text={errors.password?.message} />
        </div>
        <Button
          className="mt-12 w-full bg-black/90 text-white hover:bg-black/80"
          onClick={onSubmit}
        >
          Iniciar sesión
        </Button>
      </div>
    </div>
  );
}

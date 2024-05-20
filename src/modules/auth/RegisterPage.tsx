import { useNavigate } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IoIosRefresh } from "react-icons/io";
import { useState } from "react";
import { RegisterFormPage } from "./RegisterFormPage";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorLabel } from "@/components/ui/error-label";

const SectionsEnum = {
  credentials: "credentials",
  data: "data",
};

const formData = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});
type formDataType = z.infer<typeof formData>;

export function RegisterPage() {
  const navigate = useNavigate();

  const [tab, setTab] = useState(SectionsEnum.credentials);

  const {
    register,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<formDataType>({ resolver: zodResolver(formData) });

  function handleGoBack() {
    navigate({ to: "/start" });
  }

  async function handleGoToFormsTab() {
    const validForm = await trigger();
    if (!validForm) {
      return;
    }
    setTab(SectionsEnum.data);
  }
  function handleGoToCredentialTab() {
    setTab(SectionsEnum.credentials);
  }
  if (tab === SectionsEnum.data) {
    return (
      <RegisterFormPage
        onGoBack={handleGoToCredentialTab}
        usuario={getValues()}
      />
    );
  }

  if (tab === SectionsEnum.credentials) {
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
            <h1 className="text-center text-primary/80">CREAR</h1>
            <h1 className="mb-6 text-center text-primary/80">CUENTA</h1>
          </div>
        </div>
        <div className="flex h-3/5 flex-col items-center px-10 text-background">
          <div className="mt-14 flex w-full flex-col gap-1.5">
            <label className="font-medium"> Email </label>
            <Input
              className="border-2 bg-transparent text-background placeholder:text-background"
              placeholder="Ingresa tu email"
              {...register("email")}
            />
            {errors.email && <ErrorLabel text={errors.email.message} />}
          </div>
          <div className="mt-6 flex w-full flex-col gap-1.5">
            <label className="font-medium"> Contraseña </label>
            <Input
              className="border-2 bg-transparent text-background placeholder:text-background"
              placeholder="Ingresa tu contraseña"
              type="password"
              {...register("password")}
            />
            {errors.password && <ErrorLabel text={errors.password.message} />}
          </div>
          <Button
            className="mt-12 w-full bg-black/90 text-white hover:bg-black/80"
            onClick={handleGoToFormsTab}
          >
            Siguiente
          </Button>
        </div>
      </div>
    );
  }
}

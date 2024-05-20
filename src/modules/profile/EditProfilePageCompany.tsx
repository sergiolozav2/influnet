import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IoIosRefresh } from "react-icons/io";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorLabel } from "@/components/ui/error-label";
import { zodExtra } from "@/lib/zodExtra";
import { UserService } from "@/backend";
import { useUploadFile } from "./hooks/useUploadImage";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { fileToBase64 } from "../core/utils/fileToBase64";
import imageCompression from "browser-image-compression";
import { useAuthStore } from "../core/store/useAuthStore";
import { useUpdateProfileCompany } from "./hooks/useUpdateProfileCompany";

const formData = z.object({
  nombre: zodExtra.string(),
  nombreUsuario: zodExtra.string(),
  subNombre: zodExtra.string(),
  ciudad: zodExtra.string(),
  telefono: zodExtra.string(),
  productos: z
    .string()
    .regex(
      /^\w+( +\w+)*(,\s*\w+( +\w+)*)*\s*$/,
      "Formato inválido! Ejm: prod1, prod2",
    ),
});
type formDataType = z.infer<typeof formData>;

type EditProfilePageProps = {
  usuario: NonNullable<Awaited<ReturnType<typeof UserService.getUserProfile>>>;
};

export function EditProfilePageCompany(props: EditProfilePageProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formDataType>({
    resolver: zodResolver(formData),
    defaultValues: {
      ...props.usuario,
      productos: (props.usuario.perfilEmpresa?.productos as string[]).join(
        ", ",
      ),
    },
  });
  function handleGoBack() {
    window.history.back();
  }

  const { input, openFileInput } = useUploadFile({
    accept: "image/png, image/jpg, image/jpeg",
    onUpload,
  });
  const profile = useUpdateProfileCompany();

  const [preview, setPreview] = useState<string | null>();
  async function onUpload(file: File) {
    const compressed = await imageCompression(file, {
      maxSizeMB: 0.5,
      maxWidthOrHeight: 512,
    });

    const urlBase64 = await fileToBase64(compressed);
    setPreview(urlBase64);
  }

  function updateUserProfile(data: formDataType) {
    const fixProducts = data.productos.split(",");
    const allProducts = fixProducts.map((p) => p.trim());
    profile.mutate({
      usuario: {
        ...data,
        imagen: preview ?? props.usuario.imagen ?? "",
        direccion: "",
      },
      perfilEmpresa: {
        productos: JSON.stringify(allProducts),
      },
    });
  }

  const esEmpresa = useAuthStore((s) => s.esEmpresa);
  return (
    <div className="flex min-h-screen w-full flex-col bg-primary">
      <div className="flex h-2/5 flex-col justify-between rounded-b-[40px] bg-background">
        <button
          className="-ml-4 -mt-4 grid h-24 w-24 place-items-center rounded-full bg-primary/80"
          onClick={handleGoBack}
        >
          <IoIosRefresh className="scale-x-[-1] text-5xl text-primary" />
        </button>
        <div className="flex flex-col text-4xl font-medium">
          <h1 className="mb-6 text-center text-primary/80">Editar tu perfil</h1>
        </div>
      </div>
      <form
        className="mt-4 flex flex-col gap-6 px-6 pb-20"
        onSubmit={handleSubmit(updateUserProfile)}
      >
        <div className="flex flex-col gap-1 text-background">
          <label className="font-medium">Foto de perfil</label>

          <Button onClick={openFileInput} type="button">
            <Avatar className="h-20 w-20">
              <AvatarImage src={preview ?? props.usuario.imagen ?? ""} />
              <AvatarFallback className="text-2xl text-black">
                {props.usuario.nombre.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </Button>
          {input}
          <ErrorLabel text={errors.nombre?.message} />
        </div>
        <div className="flex flex-col gap-1 text-background">
          <label className="font-medium">Nombre</label>
          <Input
            className="rounded-2xl"
            placeholder="Ingresa tu nombre"
            {...register("nombre")}
          />
          <ErrorLabel text={errors.nombre?.message} />
        </div>
        <div className="flex flex-col gap-1 text-background">
          <label className="font-medium">Número de celular</label>
          <Input
            className="rounded-2xl"
            placeholder="Ingresa tu número celular"
            {...register("telefono")}
          />
          <ErrorLabel text={errors.telefono?.message} />
        </div>
        <div className="flex flex-col gap-1 text-background">
          <label className="font-medium">Nombre de usuario</label>
          <Input
            className="rounded-2xl"
            placeholder="Ingresa tu nombre de usuario"
            {...register("nombreUsuario")}
          />
          <ErrorLabel text={errors.nombreUsuario?.message} />
        </div>
        {esEmpresa && (
          <div className="flex flex-col gap-1 text-background">
            <label className="font-semibold">Tus productos</label>
            <Input
              className="rounded-2xl"
              placeholder="Manzanas, sodas, ropas, etc..."
              {...register("productos")}
            />
            <ErrorLabel text={errors.productos?.message} />
          </div>
        )}
        <div className="flex flex-col gap-1 text-background">
          <label className="font-medium">Tu nicho de mercado</label>
          <Input
            className="rounded-2xl"
            placeholder="Ingresa tu nicho de mercado"
            {...register("subNombre")}
          />
          <ErrorLabel text={errors.subNombre?.message} />
        </div>
        <div className="flex flex-col gap-1 text-background">
          <label className="font-medium">En que ciudad te encuentras</label>
          <Input
            className="rounded-2xl"
            placeholder="Ingresa tu ciudad"
            {...register("ciudad")}
          />
          <ErrorLabel text={errors.ciudad?.message} />
        </div>
        <Button className="rounded-3xl bg-secondary px-8 text-xl hover:bg-secondary/85">
          Guardar cambios
        </Button>
      </form>
    </div>
  );
}

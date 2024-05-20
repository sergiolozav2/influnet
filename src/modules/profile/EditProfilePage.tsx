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
import { useUpdateProfileCelebrity } from "./hooks/useUpdateProfile";

const formData = z.object({
  nombre: zodExtra.string(),
  nombreUsuario: zodExtra.string(),
  subNombre: zodExtra.string(),
  ciudad: zodExtra.string(),
  bio: z.string(),
  telefono: zodExtra.string(),
  genero: z.string(),
});
type formDataType = z.infer<typeof formData>;

type EditProfilePageProps = {
  usuario: NonNullable<Awaited<ReturnType<typeof UserService.getUserProfile>>>;
};

export function EditProfilePage(props: EditProfilePageProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formDataType>({
    resolver: zodResolver(formData),
    defaultValues: {
      ...props.usuario,
      genero: props.usuario.perfilCelebridad?.genero,
    },
  });

  function handleGoBack() {
    window.history.back();
  }

  const { input, openFileInput } = useUploadFile({
    accept: "image/png, image/jpeg, image/jpg",
    onUpload,
  });
  const profile = useUpdateProfileCelebrity();

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
    profile.mutate({
      usuario: {
        ...data,
        imagen: preview ?? props.usuario.imagen ?? "",
        direccion: "",
      },
      perfilCelebridad: {
        genero: data.genero,
        plataformas: "[]",
      },
    });
  }

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
          <label className="font-medium">Bio</label>
          <Input
            className="rounded-2xl"
            placeholder="Descripción de ti"
            {...register("bio")}
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
        <div className="flex flex-col gap-1 text-background">
          <label className="font-medium">Categoría de influencia</label>
          <select
            className="flex h-9 w-full rounded-2xl border border-input bg-background px-3 py-2 text-sm text-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            defaultValue=""
            {...register("subNombre")}
          >
            <option value="" disabled>
              Selecciona tu categoría de influencia
            </option>
            <option value="Moda">Moda</option>
            <option value="Belleza">Belleza</option>
            <option value="Fitness">Fitness</option>
            <option value="Salud">Salud</option>
            <option value="Viajes">Viajes</option>
            <option value="Tecnología">Tecnología</option>
            <option value="Familia">Familia</option>
            <option value="Gastronomía">Gastronomía</option>
            <option value="Educación">Educación</option>
            <option value="Entretenimiento">Entretenimiento</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Deportes">Deportes</option>
            <option value="Finanzas">Finanzas</option>
            <option value="Medio">Medio ambiente</option>
            <option value="Automóviles">Automóviles</option>
            <option value="Fotografía">Fotografía</option>
            <option value="Animales y mascotas">Animales y mascotas</option>
            <option value="Música">Música</option>
            <option value="Cine">Cine</option>
            <option value="Gaming">Gaming</option>
          </select>
          <ErrorLabel text={errors.subNombre?.message} />
        </div>
        <div className="flex flex-col gap-1 text-background">
          <label className="font-medium">Género</label>
          <select
            className="flex h-9 w-full rounded-2xl border border-input bg-background px-3 py-2 text-sm text-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            defaultValue=""
            {...register("genero")}
          >
            <option value="" disabled>
              Selecciona tu género
            </option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Prefiero no decir">Prefiero no decir</option>
          </select>
          <ErrorLabel text={errors.genero?.message} />
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

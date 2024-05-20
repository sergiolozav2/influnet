import { AuthService } from "@/backend";
import { Button } from "@/components/ui/button";
import { ErrorLabel } from "@/components/ui/error-label";
import { Input } from "@/components/ui/input";
import { zodExtra } from "@/lib/zodExtra";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

type RegisterCelebrityFormProps = {
  usuario: {
    email: string;
    password: string;
  };
};

const formData = z.object({
  nombre: zodExtra.string(),
  nombreUsuario: zodExtra.string(),
  subNombre: zodExtra.string(),
  ciudad: zodExtra.string(),
  telefono: zodExtra.string(),
  genero: zodExtra.string(),
});
type formDataType = z.infer<typeof formData>;

export function RegisterCelebrityForm(props: RegisterCelebrityFormProps) {
  const navigate = useNavigate();

  const {
    register,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<formDataType>({ resolver: zodResolver(formData) });

  async function handleCreateCelebrity() {
    const isValid = await trigger();
    if (!isValid) {
      return;
    }
    const values = getValues();
    AuthService.postAuthRegisterCelebrity({
      usuario: {
        email: props.usuario.email,
        password: props.usuario.password,
        nombre: values.nombre,
        telefono: values.telefono,
        ciudad: values.ciudad,
        nombreUsuario: values.nombreUsuario,
        subNombre: values.subNombre,
        direccion: "",
        imagen: "",
      },
      celebridad: {
        genero: values.genero,
        plataformas: "[]",
      },
    })
      .then(() => {
        navigate({ to: "/login" });
        toast.success("Cuenta creada exitosamente!");
      })
      .catch((e) => {
        toast.error(e?.body?.message ?? e);
      });
  }
  return (
    <div className="mt-4 flex flex-col gap-6">
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
      <div className="flex flex-col gap-1 text-background">
        <label className="text-xl font-semibold text-purple-400">
          Cuéntanos un poco más sobre ti!
        </label>
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

      <Button
        className="mt-4 w-full bg-black/90 text-lg text-white hover:bg-black/80"
        onClick={handleCreateCelebrity}
      >
        Crear tu cuenta
      </Button>
    </div>
  );
}

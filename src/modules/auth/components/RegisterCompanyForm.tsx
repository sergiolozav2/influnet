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

type RegisterCompanyFormProps = {
  usuario: {
    email: string;
    password: string;
  };
};

const formData = z.object({
  nombre: zodExtra.string(),
  subNombre: zodExtra.string(),
  direccion: zodExtra.string(),
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

export function RegisterCompanyForm(props: RegisterCompanyFormProps) {
  const {
    register,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<formDataType>({ resolver: zodResolver(formData) });

  const navigate = useNavigate();
  async function handleCreateCompany() {
    const isValid = await trigger();
    if (!isValid) {
      return;
    }
    const values = getValues();

    const fixProducts = values.productos.split(",");
    const allProducts = fixProducts.map((p) => p.trim());
    AuthService.postAuthRegisterCompany({
      usuario: {
        email: props.usuario.email,
        password: props.usuario.password,
        nombre: values.nombre,
        telefono: values.telefono,
        ciudad: values.ciudad,
        nombreUsuario: values.nombre,
        subNombre: values.subNombre,
        direccion: values.direccion,
        imagen: "",
      },
      empresa: {
        productos: JSON.stringify(allProducts),
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
        <label className="font-medium">Nombre de la empresa</label>
        <Input
          className="rounded-2xl"
          placeholder="Ingresa el nombre"
          {...register("nombre")}
        />
        <ErrorLabel text={errors.nombre?.message} />
      </div>
      <div className="flex flex-col gap-1 text-background">
        <label className="font-medium">Dirección</label>
        <Input
          className="rounded-2xl"
          placeholder="Ingresa tu dirección"
          {...register("direccion")}
        />
        <ErrorLabel text={errors.direccion?.message} />
      </div>
      <div className="flex flex-col gap-1 text-background">
        <label className="font-medium">Teléfono</label>
        <Input
          className="rounded-2xl"
          placeholder="Ingresa tu teléfono"
          {...register("telefono")}
        />
        <ErrorLabel text={errors.telefono?.message} />
      </div>
      <div className="flex flex-col gap-1 text-background">
        <label className="text-xl font-semibold text-purple-400">
          Cuéntanos cuáles son tus productos!
        </label>
        <Input
          className="rounded-2xl"
          placeholder="Manzanas, sodas, ropas, etc..."
          {...register("productos")}
        />
        <ErrorLabel text={errors.productos?.message} />
      </div>
      <div className="flex flex-col gap-1 text-background">
        <label className="font-medium">Ingresa tu nicho de mercado</label>
        <Input
          className="rounded-2xl"
          placeholder="Ingresa tu nicho de mercado"
          {...register("subNombre")}
        />
        <ErrorLabel text={errors.subNombre?.message} />
      </div>
      <div className="flex flex-col gap-1 text-background">
        <label className="font-semibold">En que ciudad está tu producto</label>
        <Input
          className="rounded-2xl"
          placeholder="Ingresa tu ciudad"
          {...register("ciudad")}
        />
        <ErrorLabel text={errors.ciudad?.message} />
      </div>
      <Button
        className="mt-4 w-full bg-black/90 text-lg text-white hover:bg-black/80"
        onClick={handleCreateCompany}
      >
        Crear empresa
      </Button>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { zodExtra } from "@/lib/zodExtra";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { ErrorLabel } from "@/components/ui/error-label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateOferta } from "../hooks/useCreateOferta";

type CreatePostFormProps = {
  handleSuccess: () => void;
};

const formData = z.object({
  descripcion: zodExtra.string(),
  fechaPlazo: z
    .string()
    .date()
    .refine((d) => new Date(d) > new Date(), "Elige una fecha del futuro."),
  monto: z.string().regex(/^\d+\.?\d*$/, "Numero inválido"),
  categoria: zodExtra.string(),
});
type formDataType = z.infer<typeof formData>;

export function CreateOfertaForm(props: CreatePostFormProps) {
  const {
    register,
    getValues,
    trigger,
    formState: { errors },
  } = useForm<formDataType>({ resolver: zodResolver(formData) });

  const oferta = useCreateOferta({ handleSucess: props.handleSuccess });
  async function handleCreateOferta() {
    const isValid = await trigger();
    if (!isValid) return;

    oferta.mutate(getValues());
  }

  return (
    <div className="flex flex-col">
      <textarea
        className="mt-4 flex w-full rounded-md border border-input bg-background px-3 py-2 pb-8 text-sm text-foreground placeholder:text-muted-foreground"
        placeholder="Escribe una oferta llamativa!"
        {...register("descripcion")}
      />
      <ErrorLabel
        className="text-foreground"
        text={errors.descripcion?.message}
      />

      <label className="mb-1 mt-3 text-sm font-medium">Categoria</label>
      <select
        className="flex items-center justify-start rounded-md border bg-background px-2 py-1 text-sm"
        defaultValue=""
        {...register("categoria")}
      >
        <option value="" disabled>
          Selecciona una categoría
        </option>
        <option value="moda">Moda</option>
        <option value="belleza">Belleza</option>
        <option value="fitness">Fitness</option>
        <option value="salud">Salud</option>
        <option value="viajes">Viajes</option>
        <option value="tecnología">Tecnología</option>
        <option value="familia">Familia</option>
        <option value="gastronomía">Gastronomía</option>
        <option value="educación">Educación</option>
        <option value="entretenimiento">Entretenimiento</option>
        <option value="lifestyle">Lifestyle</option>
        <option value="deportes">Deportes</option>
        <option value="finanzas">Finanzas</option>
        <option value="medio">Medio ambiente</option>
        <option value="automóviles">Automóviles</option>
        <option value="fotografía">Fotografía</option>
        <option value="animales y mascotas">Animales y mascotas</option>
        <option value="música">Música</option>
        <option value="cine">Cine</option>
        <option value="gaming">Gaming</option>
      </select>
      <ErrorLabel
        className="text-foreground"
        text={errors.categoria?.message}
      />

      <label className="mb-1 mt-3 text-sm font-medium">Monto</label>
      <input
        className="flex items-center justify-start rounded-md border px-2 py-1 text-sm"
        placeholder="Ingresa un monto"
        type="number"
        {...register("monto")}
      />
      <ErrorLabel className="text-foreground" text={errors.monto?.message} />

      <label className="mb-1 mt-3 text-sm font-medium">Fecha plazo</label>
      <input
        className="flex w-fit items-center justify-start rounded-md border px-2 py-1 text-sm"
        type="date"
        {...register("fechaPlazo")}
      />
      <ErrorLabel
        className="text-foreground"
        text={errors.fechaPlazo?.message}
      />
      <Button className="mt-4" onClick={handleCreateOferta}>
        Crear oferta
      </Button>
    </div>
  );
}

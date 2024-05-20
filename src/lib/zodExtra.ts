import { z } from "zod";

export const zodExtra = {
  string: () => z.string().trim().min(1, { message: "Campo requerido" }),
};

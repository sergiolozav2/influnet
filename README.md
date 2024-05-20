# Mibo - Frontend

Webapp de transporte creado con React y Typescript

## Herramientas principales

- [Shadcn/ui:](https://ui.shadcn.com/) Fuente de componentes con control total del código/estilo/funcionamiento de cada componente. Está dentro de ./src/components

- [TailwindCSS:](https://v2.tailwindcss.com/) Conjunto de clases de utilidades de CSS.
- [Tanstack Router:](https://tanstack.com/router/latest) Router para React con mejor tipado para Typescript.
- [Tanstack Query:](https://tanstack.com/query/latest) Herramienta para manejar peticiones y mutaciones asincronas.
- [Zod:](https://zod.dev/)
  Librería de validación de esquemas con soporte para Typescript

## Scripts

### Para desarrollo rápido

- npm run dev

### Para producción

- npm run build

### Para generar código de backend

Se necesita el servidor ejecutandose en localhost:5000 para conseguir las especificaciones de la API y que openapi-typescript-codegen pueda generar el código

- npm run generate:backend

import { ButtonHTMLAttributes } from "react";

type AuthButton = ButtonHTMLAttributes<HTMLButtonElement>;

export function AuthButton(props: AuthButton) {
  return (
    <button
      className="mb-3 w-full rounded border border-border bg-primary px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-primary-foreground"
      {...props}
    ></button>
  );
}

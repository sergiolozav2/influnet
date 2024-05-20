import { Input } from "@/components/ui/input";
import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type AuthInputProps = InputHTMLAttributes<HTMLInputElement> & {
  register?: UseFormRegisterReturn;
};

export function AuthInput(props: AuthInputProps) {
  return (
    <Input
      className="mb-4 bg-input autofill:bg-transparent!"
      {...props}
      {...props.register}
    />
  );
}

import { ButtonHTMLAttributes } from "react";
import { IoMdAdd } from "react-icons/io";

interface AddNewButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function AddNewButton(props: AddNewButton) {
  return (
    <button
      className="bg-primary-900 flex items-center rounded-md px-2 py-1 text-sm text-stone-50"
      {...props}
    >
      <IoMdAdd />
      <span className="ml-1 font-medium">{props.text}</span>
    </button>
  );
}

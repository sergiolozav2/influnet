import { ReactNode } from "react";

type ImageContainerProps = {
  children?: ReactNode;
  className?: string;
};

export function ImageContainer(props: ImageContainerProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-primary dark:bg-card lg:w-6/12 lg:rounded-bl-none ${props.className}`}
    >
      <img
        src="/images/login/city-map.jpg"
        className="absolute mix-blend-multiply"
      />
      <div className="relative max-w-2xl px-4 py-10 text-primary-foreground dark:text-foreground md:mx-6 md:p-12">
        {props.children}
      </div>
    </div>
  );
}

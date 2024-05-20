import { ReactNode } from "react";

type AuthContainerProps = {
  children: ReactNode;
};

export function AuthContainer(props: AuthContainerProps) {
  return (
    <div className="mb-12 flex lg:mt-24 justify-center px-4 lg:w-6/12 lg:px-12">
      <div className="w-full max-w-96">{props.children}</div>
    </div>
  );
}

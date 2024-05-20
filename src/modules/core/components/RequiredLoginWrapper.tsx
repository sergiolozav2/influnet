import { Navigate } from "@tanstack/react-router";
import { useAuthStore } from "../store/useAuthStore";

type RequiredLoginWrapperProps = {
  children: React.ReactNode;
};

export function RequiredLoginWrapper(props: RequiredLoginWrapperProps) {
  const isLogged = useAuthStore((state) => state.isLoggedIn);

  if (isLogged) {
    return props.children;
  }

  return <Navigate to="/login" />;
}

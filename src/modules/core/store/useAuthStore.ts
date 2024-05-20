import Cookies from "js-cookie";
import { create } from "zustand";

type AuthStateType = {
  isLoggedIn: boolean;
  token: string;
  esEmpresa: boolean;
};

type AuthActions = {
  setLoggedIn: (token: string, esEmpresa: boolean) => void;
  setLoggedOut: () => void;
};

export function useUsuarioID() {
  const token = useAuthStore((s) => s.token);
  const body = parseJwt(token);
  const usuarioID = body?.usuarioID as number | undefined;
  return usuarioID;
}
export function useToken() {
  const token = useAuthStore((s) => s.token);
  return token;
}

export const useAuthStore = create<AuthStateType & AuthActions>((set) => ({
  token: Cookies.get("token") ?? "",
  esEmpresa: Cookies.get("esEmpresa") === "true",
  isLoggedIn: !!Cookies.get("isLoggedIn"),
  setLoggedIn: (token: string, esEmpresa: boolean) => {
    Cookies.set("isLoggedIn", "true");
    Cookies.set("token", token);
    Cookies.set("esEmpresa", esEmpresa ? "true" : "");
    set(() => ({ isLoggedIn: true, token, esEmpresa }));
  },
  setLoggedOut: () => {
    Cookies.remove("isLoggedIn");
    Cookies.remove("token");
    Cookies.remove("esEmpresa");
    set(() => ({ isLoggedIn: false, token: "" }));
  },
}));

function parseJwt(token: string) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(""),
  );

  return JSON.parse(jsonPayload);
}

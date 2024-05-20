import { LinkProps } from "@tanstack/react-router";

export interface ModuleSidebarLinkType extends LinkProps {
  icon: React.ReactNode;
  text: string;
}

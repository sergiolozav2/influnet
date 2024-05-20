import { Link, LinkProps } from "@tanstack/react-router";
import { SidebarTitle } from "./SidebarTitle";

interface SidebarLinkProps extends LinkProps {
  text: string;
  icon?: React.ReactNode;
}

export function SidebarLink(props: SidebarLinkProps) {
  return (
    <Link
      className="w-full font-normal text-primary-foreground/80 hover:text-primary-foreground/95 [&.active]:bg-background/15"
      to={props.to}
    >
      <SidebarTitle text={props.text} icon={props.icon} />
    </Link>
  );
}

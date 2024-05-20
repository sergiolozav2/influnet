import { Link, LinkProps } from "@tanstack/react-router";

interface BorderLinkProps extends LinkProps {
  children: React.ReactNode;
}
export function BorderLink(props: BorderLinkProps) {
  return (
    <Link
      to={props.to}
      className="rounded border-2 border-primary/80 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-accent"
    >
      {props.children}
    </Link>
  );
}

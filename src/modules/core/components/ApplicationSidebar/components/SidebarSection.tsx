import { SidebarTitle } from "./SidebarTitle";

interface SidebarSectionProps {
  text: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}

export function SidebarSection(props: SidebarSectionProps) {
  return (
    <div className="select-none rounded-md text-left font-medium text-foreground/70">
      <SidebarTitle text={props.text} icon={props.icon} />
      <div className="ml-5 flex flex-col gap-1 border-l border-border pb-1 pl-2">
        {props.children}
      </div>
    </div>
  );
}

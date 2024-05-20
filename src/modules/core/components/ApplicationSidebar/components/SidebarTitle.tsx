interface SidebarTitleProps {
  text: string;
  icon?: React.ReactNode;
}

export function SidebarTitle(props: SidebarTitleProps) {
  return (
    <div className="select-none py-2 text-left font-medium">
      <div className="flex flex-col items-center text-xs">
        {props.icon && <span className="text-2xl">{props.icon}</span>}
        <p className="px-1 mt-0.5 text-center">{props.text}</p>
      </div>
    </div>
  );
}

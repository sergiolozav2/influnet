import { cn } from "@/lib/utils";

type ModuleTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function ModuleTitle(props: ModuleTitleProps) {
  return (
    <div className="pt-16">
      <div
        className={cn(
          "fixed inset-0 bottom-auto z-10 flex w-full bg-primary px-6 py-4 text-primary-foreground",
          props.className,
        )}
      >
        <div className="w-full text-lg font-semibold">{props.children}</div>
      </div>
    </div>
  );
}

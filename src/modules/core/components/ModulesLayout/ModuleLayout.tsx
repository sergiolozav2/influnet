
type ModuleLayoutProps = {
  children: React.ReactNode;
};

export function ModuleLayout(props: ModuleLayoutProps) {
  return (
    <div className="flex min-h-screen w-full max-w-full flex-col overflow-hidden border-r border-r-transparent bg-background">
      <div className="flex h-full flex-col dark:text-foreground md:flex-row">
        {props.children}
      </div>
    </div>
  );
}

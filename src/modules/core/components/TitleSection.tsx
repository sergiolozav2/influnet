type PageTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function TitleSection(props: PageTitleProps) {
  return (
    <div
      className={`pl-10 mr-2 mt-[1px] flex min-h-9 items-center font-medium md:pl-6 md:h-fit md:pb-4 md:pr-4 md:pt-5 ${props.className}`}
    >
      {props.children}
    </div>
  );
}

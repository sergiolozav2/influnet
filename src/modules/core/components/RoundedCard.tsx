type RoundedCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function RoundedCard(props: RoundedCardProps) {
  return (
    <div
      className={`flex w-full rounded-lg border shadow-md bg-white ${props.className}`}
    >
      {props.children}
    </div>
  );
}

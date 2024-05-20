import "./loadingSpinner.css";

type LoadingSpinnerType = {
  className?: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
};

export function LoadingSpinner(props: LoadingSpinnerType) {
  const { size = "24px", strokeWidth = 3, color } = props;
  return (
    <div className={`grid place-items-center ${props.className}`}>
      <div
        className="spinner border-primary-800"
        style={{
          width: size,
          height: size,
          borderWidth: strokeWidth,
          borderColor: color,
        }}
      ></div>
    </div>
  );
}

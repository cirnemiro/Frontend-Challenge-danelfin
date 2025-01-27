interface PercentageCellProps {
  value: number;
}

export default function PercentageCell({ value }: PercentageCellProps) {
  const convertedValue = value * 100;

  return (
    <div
      className={`flex items-center ${
        convertedValue < 0 ? "text-red-500" : "text-green-500"
      }`}
    >
      <span className="m-auto ">{convertedValue.toFixed(2)}%</span>
    </div>
  );
}

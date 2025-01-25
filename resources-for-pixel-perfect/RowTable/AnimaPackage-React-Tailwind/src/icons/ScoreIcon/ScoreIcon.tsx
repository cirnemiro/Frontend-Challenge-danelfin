interface ScoreIconProps {
  value: string | number;
  className?: string;
}

export default function ScoreIcon({ value, className }: ScoreIconProps) {
  const valueStr = String(value);
  const colorMapping = {
    "0": "#D32F2F",
    "1": "#E64A19",
    "2": "#FF5722",
    "3": "#FF7043",
    "4": "#FF8A65",
    "5": "#C7E875",
    "6": "#A6D856",
    "7": "#7DBF37",
    "8": "#66B93B",
    "9": "#57A641",
    "10": "#388E3C",
  };

  const strokeValuesConverter = (value: string | number) => {
    const percentage = Number(value) * 10;
    const perimeter = 87.9646;

    const strokeDasharray = perimeter;
    const strokeDashoffset = perimeter - (perimeter * percentage) / 100;

    return {
      strokeDasharray,
      strokeDashoffset,
    };
  };

  return (
    <svg
      className={`${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="16"
        cy="16"
        r="14"
        stroke="#F5F5F5"
        strokeWidth="2"
        fill="none"
        transform="rotate(180 16 16)"
      />

      <circle
        cx="16"
        cy="16"
        r="14"
        stroke={colorMapping[valueStr as keyof typeof colorMapping]}
        strokeWidth="2"
        fill="none"
        strokeDasharray={strokeValuesConverter(valueStr).strokeDasharray}
        strokeDashoffset={strokeValuesConverter(valueStr).strokeDashoffset}
        transform="rotate(270 16 16)"
      />

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        fill="#272727"
        fontSize="14"
        dy="5"
      >
        {valueStr}
      </text>
    </svg>
  );
}

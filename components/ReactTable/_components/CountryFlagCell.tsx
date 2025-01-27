interface CountryFlagCellProps {
  code: string;
}

export default function CountryFlagCell({ code }: CountryFlagCellProps) {
  return (
    <div className="m-auto text-center">
      <span>{code}</span>
    </div>
  );
}

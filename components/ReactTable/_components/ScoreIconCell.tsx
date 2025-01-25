import ScoreIcon from "@/resources-for-pixel-perfect/RowTable/AnimaPackage-React-Tailwind/src/icons/ScoreIcon/ScoreIcon";

export default function ScoreIconCell({ value }: { value: string }) {
  return (
    <div className="flex w-[72px] h-[62px] items-center justify-center gap-2.5 p-1 relative bg-blue-ai-score ">
      <ScoreIcon value={value} />
    </div>
  );
}

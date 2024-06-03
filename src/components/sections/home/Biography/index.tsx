import { Heading } from "@/components/lib";
import { Biography as IBiography } from "@prisma/client";

export function Biography({
  intro,
  summary,
  closing,
}: Pick<IBiography, "intro" | "summary" | "closing">) {
  return (
    <div className="container">
      <Heading text="Biography" />
      <p className="text-xl font-semibold py-4">{intro}</p>
      {summary.map((item, index) => (
        <p key={index} className="text-base leading-relaxed mb-4">
          {item}
        </p>
      ))}
      <p className="text-xl font-semibold py-4">{closing}</p>
    </div>
  );
}

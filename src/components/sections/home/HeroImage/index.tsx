import { Profile } from "@prisma/client";
import Image from "next/image";
import { HeroStats } from "./HeroStats";

interface IHeroImageProps
  extends Pick<Profile, "image" | "projects" | "experience"> {}

export function HeroImage({ image, projects, experience }: IHeroImageProps) {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="relative aspect-[1/1] w-full sm:w-2/3 md:w-full lg:w-3/4 rounded-full shadow-2xl">
        <Image
          src={`/images/${image}`}
          alt="responsive image"
          fill
          sizes="(max-width: 768px) 60vw, (max-width: 1200px) 40vw, 25vw"
          quality={50}
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="p-4 bg-dark-green rounded-full"
        />
        <HeroStats projects={projects} experience={experience} />
      </div>
    </div>
  );
}

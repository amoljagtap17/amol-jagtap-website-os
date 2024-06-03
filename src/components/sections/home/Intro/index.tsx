import { HeroContent, HeroImage } from "@/components/sections";
import { Profile } from "@prisma/client";

interface IIntroProps {
  profile: Omit<
    Profile,
    "linkedinUrl" | "githubUrl" | "createdAt" | "updatedAt"
  >;
}

export async function Intro({ profile }: IIntroProps) {
  const {
    firstName,
    lastName,
    title,
    description,
    image,
    projects,
    experience,
  } = profile;

  return (
    <div className="h-dvh container grid md:grid-cols-2">
      <HeroContent
        firstName={firstName}
        lastName={lastName}
        title={title}
        description={description}
      />
      <HeroImage image={image} projects={projects} experience={experience} />
    </div>
  );
}

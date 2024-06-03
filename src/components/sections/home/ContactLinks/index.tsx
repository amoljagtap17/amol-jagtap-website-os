import { ContactLink } from "@/components/lib";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin } from "lucide-react";

interface IContactLinksProps {
  linkedinUrl: string;
  githubUrl: string;
}

export function ContactLinks({ linkedinUrl, githubUrl }: IContactLinksProps) {
  return (
    <>
      <Separator />
      <div className="container flex flex-col md:flex-row justify-center items-center gap-4">
        <ContactLink href={linkedinUrl} label="Linkedin" Icon={Linkedin} />
        <ContactLink href={githubUrl} label="Github" Icon={Github} />
      </div>
      <Separator />
    </>
  );
}

import { getProfileInfo } from "@/actions/profile";
import { ContactLinks, Intro } from "@/components/sections";

export default async function Home() {
  const { linkedinUrl, githubUrl, ...profile } = await getProfileInfo();

  return (
    <>
      <Intro profile={profile} />
      <ContactLinks linkedinUrl={linkedinUrl} githubUrl={githubUrl} />
    </>
  );
}

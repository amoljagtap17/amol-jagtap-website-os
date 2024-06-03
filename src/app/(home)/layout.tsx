export default function HomeLayout({
  intro,
  bio,
  skills,
}: {
  intro: React.ReactNode;
  bio: React.ReactNode;
  skills: React.ReactNode;
}) {
  return (
    <>
      {intro}
      {bio}
      {skills}
    </>
  );
}

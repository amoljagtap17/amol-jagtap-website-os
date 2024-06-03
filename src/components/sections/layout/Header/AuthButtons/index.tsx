import { SignedIn, UserButton } from "@clerk/nextjs";

export function AuthButtons() {
  return (
    <SignedIn>
      <UserButton />
    </SignedIn>
  );
}

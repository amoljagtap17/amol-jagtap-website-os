import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <SignIn
      path="/sign-in"
      appearance={{
        elements: {
          cardBox: "border-4 border-current shadow-none",
          formFieldLabel: "text-sm",
          formFieldHintText: "text-muted-foreground",
          headerSubtitle: "text-sm",
          headerTitle: "text-lg",
          footerActionText: "text-sm",
          footerActionLink: "text-sm",
          formFieldInput: "text-sm",
          formButtonPrimary: "text-sm px-4 py-2",
          identityPreviewText: "text-sm",
        },
      }}
    />
  );
}

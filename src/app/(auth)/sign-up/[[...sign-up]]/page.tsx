// import { SignUp } from "@clerk/nextjs";

import { FourOhFour } from "@/components/lib";

export default function SignUpPage() {
  return <FourOhFour />;

  /* return (
    <SignUp
      path="/sign-up"
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
        },
      }}
    />
  ); */
}

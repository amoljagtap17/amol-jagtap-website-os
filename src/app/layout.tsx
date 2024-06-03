import { Footer, Header } from "@/components/sections";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Montserrat as FontSans, Caveat as FontSerif } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sans",
  display: "swap",
});

const fontSerif = FontSerif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.johndoe.com/"),
  title: "John Doe - Portfolio Website",
  description: "Portfolio Website of John Doe. React.js and Next.js Developer.",
  keywords: ["Next.js 14", "React 18", "TypeScript", "Shadcn UI"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          footer: "hidden",
          userButtonPopoverFooter: "hidden",
          userButtonPopoverCard: "shadow-none bg-inherit",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased flex flex-col",
            fontSans.variable,
            fontSerif.variable
          )}
        >
          <Header />
          <div className="grow">{children}</div>
          <Footer />
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}

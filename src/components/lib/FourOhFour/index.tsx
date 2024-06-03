import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FourOhFour() {
  return (
    <div className="min-h-[65vh] flex flex-col justify-center items-center text-center">
      <h1 className="error-code text-[7rem] md:text-[9rem] lg:text-[14rem] leading-none tracking-widest my-6">
        404
      </h1>
      <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-none my-2">
        Oops! Page Not Found
      </h2>
      <h3 className="my-2 leading-none text-lg md:text-2xl lg:text-3xl">
        Sorry, We can&apos;t seem to find the page you&apos;re looking for.
      </h3>
      <Button
        asChild
        className="my-4 font-bold text-base md:text-lg lg:text-xl"
      >
        <Link href="/">Go to Home</Link>
      </Button>
    </div>
  );
}

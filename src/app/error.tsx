// Error components must be Client Components
"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto py-10">
      <div className="min-h-[65vh] flex flex-col justify-center items-center text-center">
        <h1 className="error-code text-[7rem] md:text-[9rem] lg:text-[14rem] leading-none tracking-widest my-6">
          500
        </h1>
        <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-none my-2">
          Oops! Something went wrong
        </h2>
        <h3 className="my-2 leading-none text-lg md:text-2xl lg:text-3xl">
          Sorry, please click the below button
        </h3>
        <Button
          className="font-bold"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </Button>
      </div>
    </div>
  );
}

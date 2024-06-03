import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Portfolio } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface IPortfolioCardProps
  extends Omit<Portfolio, "createdAt" | "updatedAt"> {}

export function PortfolioCard({
  content,
  description,
  image,
  previewUrl,
  title,
}: IPortfolioCardProps) {
  return (
    <Card className="portfolio-card border-4 border-current">
      <div className="md:flex">
        <div className="md:shrink-0 border-b-4 md:border-b-0 md:border-r-4 border-current">
          <div className="h-80 w-full object-cover md:h-full md:w-80 relative aspect-[1/1]">
            <Image
              src={`/images/${image}`}
              alt={title}
              fill
              sizes="(max-width: 768px) 60vw, (max-width: 1200px) 40vw, 25vw"
              quality={50}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent className="grow text-base">{content}</CardContent>
          <CardFooter className="gap-4">
            <Button asChild>
              <Link href={previewUrl}>Live Preview</Link>
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}

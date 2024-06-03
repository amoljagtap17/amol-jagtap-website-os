import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BingeWatch, BingeWatchCategory } from "@prisma/client";

interface IBingCardProps extends Omit<BingeWatch, "id" | "updatedAt"> {}

const badgeColors = {
  [BingeWatchCategory.COURSES]: "bg-blue-500",
  [BingeWatchCategory.MOVIES]: "bg-teal-500",
  [BingeWatchCategory.WEB_SERIES]: "bg-rose-500",
};

export function BingeCard({
  title,
  description,
  category,
  channel,
  genre,
  rating,
  createdAt,
}: IBingCardProps) {
  return (
    <div className="relative">
      <Card className="portfolio-card border-4 border-current relative">
        <CardHeader className="pb-2">
          <CardTitle className="max-w-[80%] min-h-[50px]">{title}</CardTitle>
          <CardDescription>{genre}</CardDescription>
        </CardHeader>
        <CardContent className="text-base min-h-40 max-h-40 overflow-hidden text-ellipsis">
          {description}
        </CardContent>
        <CardFooter className="place-content-between mt-10">
          <span>{new Date(createdAt).toDateString()}</span>
          <span className="font-extrabold tracking-wider">
            {channel.replace("_", " ")}
          </span>
        </CardFooter>
        <div className="rounded-full border-4 border-current absolute top-5 right-5 place-content-center p-3 font-extrabold">
          {rating.toPrecision(2)}
        </div>
      </Card>
      <Badge
        className={`p-2 min-w-32 max-w-32 text-center inline-block uppercase absolute -top-4 left-1/2 -translate-x-1/2 ${badgeColors[category]}`}
      >
        {category.replace("_", " ")}
      </Badge>
    </div>
  );
}

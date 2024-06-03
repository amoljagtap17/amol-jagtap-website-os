import { Heading } from "@/components/lib";
import { PortfolioList } from "@/components/sections";

export default function PortfolioPage() {
  return (
    <div className="container mx-auto py-10">
      <Heading text="My Portfolio" />
      <PortfolioList />
    </div>
  );
}

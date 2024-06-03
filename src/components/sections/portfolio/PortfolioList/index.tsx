import { getPortfolioInfo } from "@/actions/portfolio";
import { PortfolioCard } from "@/components/lib";

export async function PortfolioList() {
  const portfolioData = await getPortfolioInfo();

  return portfolioData.map((portfolio) => (
    <PortfolioCard key={portfolio.id} {...portfolio} />
  ));
}

import { Hero } from "@/components/molecules/hero";
import { Ribbon } from "@/components/molecules/ribbon";
import { PaymentMethods } from "@/components/molecules/payment-methods";
import { TradingBenefits } from "@/components/molecules/trading-benefits";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ribbon />
      <PaymentMethods />
      <TradingBenefits />
    </>
  );
}

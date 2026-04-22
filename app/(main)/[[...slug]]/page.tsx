import { Hero } from "@/components/molecules/hero";
import { Ribbon } from "@/components/molecules/ribbon";
import { PaymentMethods } from "@/components/molecules/payment-methods";
import { TradingBenefits } from "@/components/molecules/trading-benefits";
import { FuturesAcademy } from "@/components/molecules/futures-academy";
import { CustomerKpis } from "@/components/molecules/customer-kpis";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ribbon />
      <PaymentMethods />
      <TradingBenefits />
      <div className="relative">
        <div className="absolute -top-30 w-full debug_">
          <FuturesAcademy />
        </div>
        <CustomerKpis />
      </div>
    </>
  );
}

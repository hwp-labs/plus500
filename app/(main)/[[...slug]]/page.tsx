import { Hero } from "@/components/molecules/hero";
import { Ribbon } from "@/components/molecules/ribbon";
import { PaymentMethods } from "@/components/molecules/payment-methods";
import { Benefits } from "@/components/molecules/benefits";
import { FuturesAcademy } from "@/components/molecules/futures-academy";
import { Kpis } from "@/components/molecules/kpis";
import { WhyUs } from "@/components/molecules/why-us";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ribbon />
      <PaymentMethods />
      <Benefits />
      <div className="relative">
        <div className="debug_ absolute -top-30 w-full">
          <FuturesAcademy />
        </div>
        <Kpis />
      </div>
      <WhyUs />
    </>
  );
}

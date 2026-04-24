import { Hero } from "@/components/molecules/hero";
import { Ribbon } from "@/components/molecules/ribbon";
import { PaymentMethods } from "@/components/molecules/payment-methods";
import { Benefits } from "@/components/molecules/benefits";
import { FuturesAcademy } from "@/components/molecules/futures-academy";
import { Signals } from "@/components/molecules/signals";
import { WhyUs } from "@/components/molecules/why-us";
import { Sponsors } from "@/components/molecules/sponsors";

export default function HomePage() {
  return (
    <>
      <div className="hidden_">
        <Hero />
        <Ribbon />
        {/* <PaymentMethods /> */}
        <Benefits />
        <div className="relative">
          <div className="debug_ absolute -top-30 w-full">
            {/* <FuturesAcademy /> */}
          </div>
          <Signals />
        </div>
        <WhyUs />
        <Sponsors />
      </div>
    </>
  );
}

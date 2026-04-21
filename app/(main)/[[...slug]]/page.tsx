import { Hero } from "@/components/molecules/hero";
import { Ribbon } from "@/components/molecules/ribbon";
import { PaymentMethods } from "@/components/molecules/payment-methods";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ribbon />
      <PaymentMethods />
    </>
  );
}

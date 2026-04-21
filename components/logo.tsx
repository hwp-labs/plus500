import Image from "next/image";

// https://nextjs.org/docs/app/api-reference/components/image

export const Logo = () => (
  <Image src="/logo-white.png" alt="" width="160" height="38" priority />
);

export const LogoAuth = ({ mobile }: { mobile?: boolean }) =>
  mobile ? (
    <Image src="/logo-futures-mobile.png" alt="" width="207" height="34" priority />
  ) : (
    <Image src="/logo-futures.png" alt="" width="225" height="92" priority />
  );

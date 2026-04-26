import Image from "next/image";

// https://nextjs.org/docs/app/api-reference/components/image

export const Logo = () => (
  <Image
    src="/logo.png"
    alt=""
    width={160}
    height={38}
    priority
    className="min-w-[128px] sm:min-w-[160]"
  />
);

export const LogoAuth = ({ mobile }: { mobile?: boolean }) =>
  mobile ? (
    <Image
      src="/logo-futures-mobile.png"
      alt=""
      width={207}
      height={34}
      priority
    />
  ) : (
    <Image src="/logo-futures.png" alt="" width={225} height={92} priority />
  );

export const LogoDashboard = () => (
  <Image
    src="/logo-dashboard.png"
    alt=""
    width={106}
    height={26}
    priority
    className="min-w-[106px]"
  />
);

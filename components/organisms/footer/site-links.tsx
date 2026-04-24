import Link from "next/link";
import { PATH } from "@/constants/PATH";

export const SiteLinks = () => {
  return (
    <ul className="flex flex-1 flex-col gap-6 lg:gap-2.5">
      {data.map((item, i) => (
        <li key={i}>
          <Link href={PATH.hash} className="hover:underline">
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const data = [
  "Accessibility Statement",
  "Privacy Policy",
  "Firm Disclosure",
  "Risk Disclosure Statement",
  "Terms & Agreements",
  "Cookie Policy",
];

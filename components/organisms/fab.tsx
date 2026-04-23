import Link from "next/link";
import Image from "next/image";
//
import { PATH } from "@/constants/PATH";

export const Fab = () => {
  return (
    <Link
      href={PATH.hash}
      className="fixed right-2 bottom-2 z-50 cursor-pointer"
      title="24/7 Support"
    >
      <Image src="/images/fab.png" alt="" width={56} height={56} />
    </Link>
  );
};

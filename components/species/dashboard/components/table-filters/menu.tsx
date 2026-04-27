import Link from "next/link";
import { clsx } from "clsx";
import { PATH_PROTECTED } from "@/constants/PATH";

interface Props {
  label: string;
  data: { label: string; selected?: boolean }[];
}

export const Menu = ({ label, data }: Props) => {
  return (
    <div className="">
      <p className="text-muted px-4 py-1.5">{label}</p>
      <ul className="">
        {data.map((item, i) => (
          <li key={i}>
            <Link
              href={PATH_PROTECTED.hash}
              className={clsx(
                "hover:bg-header block px-4 py-1.5 hover:text-white",
                item.selected && "bg-secondary text-white",
              )}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

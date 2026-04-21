import Link from "next/link";
import { MenuButton } from "../atoms/menu-button";

const nav = [
  { label: "Markets", menu: true },
  { label: "Prediction Markets" },
  { label: "Company", menu: true },
  { label: "Learn", menu: true },
  { label: "Support" },
];

export const Nav = () => {
  return (
    <nav className="show-lg-block">
      <ul className="flex-cs">
        {nav.map((item, i) => (
          <li key={i} className="">
            {item.menu ? (
              <MenuButton>{item.label}</MenuButton>
            ) : (
              <Link href="#" className="ghost-btn btn">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

import { PropsWithChildren } from "react";
import { type LucideIcon } from "lucide-react";

interface CardProps extends PropsWithChildren {
  Icon?: LucideIcon;
}

export const Card = ({ children, Icon }: CardProps) => (
  <div className="bg-card flex-cc relative h-[200px] flex-1 rounded px-10 text-center">
    <p className="text-lg">{children}</p>
    {Icon ? (
      <div className="bg-secondary flex-cc border-background absolute top-18 -right-8 z-1 size-14 rounded-full border-6">
        <Icon size={20} strokeWidth={3} />
      </div>
    ) : null}
  </div>
);

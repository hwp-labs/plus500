"use client";

import { PropsWithChildren } from "react";
import { IconX } from "@tabler/icons-react";

interface Props extends PropsWithChildren {
  onClose?: () => void;
}

export const SectionHeading = ({ children, onClose }: Props) => {
  return (
    <h2 className="flex-cb mt-4 text-lg font-bold">
      {children}
      <button title="Close" onClick={onClose} className="dash-icon">
        <IconX size={18} />
      </button>
    </h2>
  );
};

import { StarIcon } from "lucide-react";

export const Empty = ({ label }: { label?: string }) => {
  const labelSafe = label || "Favorites";
  return (
    <div className="flex-col-cc debug_ mx-auto size-full gap-2 px-4 text-center">
      <StarIcon
        size={44}
        strokeWidth={2}
        className="text-muted mt-16 sm:mt-0"
      />
      <h2 className="text-lg font-semibold">
        You have no {labelSafe} 
        {/* instruments */}
      </h2>
      <p className="text-ash4 sm:w-90">
        Mark your preferred instruments as <strong>`{labelSafe}`</strong> to
        access them quickly through your {labelSafe} list.
      </p>
    </div>
  );
};

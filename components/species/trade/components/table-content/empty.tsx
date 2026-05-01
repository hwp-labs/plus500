import { StarIcon } from "lucide-react";

export const Empty = () => (
  <div className="flex-col-cc debug_ mx-auto size-full w-80 gap-2 text-center">
    <StarIcon size={44} strokeWidth={2} className="text-muted" />
    <h2 className="text-lg font-semibold">You have no favorite instruments</h2>
    <p className="text-ash4">
      Mark your preferred instruments as <strong>`Favorites`</strong> to access
      them quickly through your Favorites list.
    </p>
  </div>
);

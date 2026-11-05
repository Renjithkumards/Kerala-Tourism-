import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  reviewsCount?: number;
  size?: "sm" | "md";
  className?: string;
  showScore?: boolean;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  reviewsCount,
  size = "sm",
  className,
  showScore = true,
}) => {
  const starSizes = {
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
  };

  return (
    <div className={cn("inline-flex items-center gap-1.5", className)}>
      <div className="flex items-center text-amber-500">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              starSizes[size],
              star <= Math.round(rating)
                ? "fill-amber-400 text-amber-400"
                : "text-gray-300"
            )}
          />
        ))}
      </div>

      {showScore && (
        <span className="text-xs md:text-sm font-bold text-gray-800">
          {rating.toFixed(1)}
        </span>
      )}

      {reviewsCount !== undefined && (
        <span className="text-xs text-gray-500">
          ({reviewsCount.toLocaleString()})
        </span>
      )}
    </div>
  );
};

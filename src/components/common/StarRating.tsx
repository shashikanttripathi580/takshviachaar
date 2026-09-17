import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  reviewsCount?: number;
  size?: 'sm' | 'md' | 'lg';
  showCount?: boolean;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  reviewsCount,
  size = 'sm',
  showCount = true,
}) => {
  const iconSize = size === 'sm' ? 'w-3.5 h-3.5' : size === 'md' ? 'w-4 h-4' : 'w-5 h-5';
  const textSize = size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base';

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center text-amber-500">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${iconSize} ${
              star <= Math.floor(rating)
                ? 'fill-amber-400 text-amber-400'
                : star - 0.5 <= rating
                ? 'fill-amber-200 text-amber-400'
                : 'text-stone-300'
            }`}
          />
        ))}
      </div>
      {showCount && (
        <span className={`${textSize} font-semibold text-[#6B5E51]`}>
          {rating.toFixed(1)}
          {reviewsCount !== undefined && (
            <span className="text-stone-400 font-normal ml-1">({reviewsCount})</span>
          )}
        </span>
      )}
    </div>
  );
};

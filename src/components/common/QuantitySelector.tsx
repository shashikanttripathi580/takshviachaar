import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
  min?: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onChange,
  min = 1,
  max = 20,
  size = 'md',
}) => {
  const handleDecrease = () => {
    if (quantity > min) onChange(quantity - 1);
  };

  const handleIncrease = () => {
    if (quantity < max) onChange(quantity + 1);
  };

  const buttonPadding = size === 'sm' ? 'p-1' : size === 'lg' ? 'p-2.5' : 'p-2';
  const textPadding = size === 'sm' ? 'px-2 text-xs' : size === 'lg' ? 'px-4 text-base' : 'px-3 text-sm';
  const iconSize = size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-4 h-4' : 'w-3.5 h-3.5';

  return (
    <div className="inline-flex items-center border-2 border-[#EADCC9] rounded-xl bg-white shadow-2xs">
      <button
        type="button"
        onClick={handleDecrease}
        disabled={quantity <= min}
        className={`${buttonPadding} text-stone-500 hover:text-[#8B1E1E] hover:bg-[#FAF6F0] rounded-l-lg transition-colors disabled:opacity-30 disabled:pointer-events-none`}
        aria-label="Decrease quantity"
      >
        <Minus className={iconSize} />
      </button>

      <span className={`${textPadding} font-bold text-[#2B2118] select-none text-center min-w-[2rem]`}>
        {quantity}
      </span>

      <button
        type="button"
        onClick={handleIncrease}
        disabled={quantity >= max}
        className={`${buttonPadding} text-stone-500 hover:text-[#8B1E1E] hover:bg-[#FAF6F0] rounded-r-lg transition-colors disabled:opacity-30 disabled:pointer-events-none`}
        aria-label="Increase quantity"
      >
        <Plus className={iconSize} />
      </button>
    </div>
  );
};

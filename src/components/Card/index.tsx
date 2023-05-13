// Type
import { ICard } from '../../types';

export default function Card({ cardData }: ICard) {
  const handleIcon = (category: string) => {
    return category;
  };

  const handleBgColor = (category: string) => {
    switch (category) {
      case 'Sedans':
        return 'hsl(31, 77%, 52%)';
      case 'Suvs':
        return 'hsl(184, 100%, 22%)';
      case 'Luxury':
        return 'hsl(179, 100%, 13%)';
    }
  };

  return (
    <div
      className={`w-48 h-auto flex flex-col justify-between gap-y-6 p-5 ${
        cardData.id === 0
          ? 'rounded-s-md'
          : cardData.id === 2
          ? 'rounded-e-md'
          : ''
      }`}
      style={{ backgroundColor: `${handleBgColor(cardData.category)}` }}
    >
      <p>{handleIcon(cardData.category)}</p>

      <h1 className="uppercase text-details text-lg font-[700] font-['Big_Shoulders_Display']">
        {cardData.category}
      </h1>

      <p className="text-paragraph text-xs font-[400] font-['Lexend_Deca']">
        {cardData.description}
      </p>

      <div className="border border-details rounded-full py-2 text-center text-details hover:cursor-pointer">
        Learn More
      </div>
    </div>
  );
}

// Type
import { ICard } from '../../types';

export default function Card({ cardData }: ICard) {
  const handleColor = (category: string) => {
    switch (category) {
      case 'Sedans':
        return 'hsl(31, 77%, 52%)';
      case 'Suvs':
        return 'hsl(184, 100%, 22%)';
      case 'Luxury':
        return 'hsl(179, 100%, 13%)';
    }
  };

  const btnColor = `text-${handleColor(
    cardData.category,
  )} w-24 bg-details rounded-full mt-16 py-1 text-center text-xs inline-block border border-details hover:cursor-pointer hover:bg-transparent hover:text-details`;

  return (
    <div
      className={`w-56 h-auto flex flex-col p-10 ${
        cardData.id === 0
          ? 'rounded-s-md'
          : cardData.id === 2
          ? 'rounded-e-md'
          : ''
      }`}
      style={{ backgroundColor: `${handleColor(cardData.category)}` }}
    >
      <img
        src={cardData.imgUrl}
        alt={`logo-${cardData.category}`}
        className="w-10 mb-6"
      />

      <h1 className="mb-6 uppercase text-details text-lg font-[700] font-['Big_Shoulders_Display']">
        {cardData.category}
      </h1>

      <p className=" text-paragraph text-xs font-[400] font-['Lexend_Deca'] leading-relaxed">
        {cardData.description}
      </p>

      <div className={btnColor}>Learn More</div>
    </div>
  );
}

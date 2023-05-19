// Components
import Card from '../Card';

// Type
import { ICardContainer } from '../../types';

export default function CardContainer({ cardsData }: ICardContainer) {
  return (
    <div className="flex">
      {cardsData.map((data) => (
        <Card key={data.id} cardData={data} />
      ))}
    </div>
  );
}

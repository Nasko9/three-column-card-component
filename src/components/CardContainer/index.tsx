import { ICardContainer } from '../../types';
import Card from '../Card';

export default function CardContainer({ cardsData }: ICardContainer) {
  return (
    <div className="flex">
      {cardsData.map((data) => (
        <Card key={data.id} cardData={data} />
      ))}
    </div>
  );
}

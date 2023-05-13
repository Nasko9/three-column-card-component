export interface ICardData {
  id: number;
  category: string;
  description: string;
}

export interface ICardContainer {
  cardsData: ICardData[];
}

export interface ICard {
  key: number;
  cardData: ICardData;
}

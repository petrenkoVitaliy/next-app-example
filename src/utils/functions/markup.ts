export const shouldBeGrownCheck = (
  containerWidth: number,
  cardSize: number,
  itemsCount: number,
  defaultMargin: number,
): {
  isFullWrap: boolean;
  marginForCard?: number;
} => {
  const cardsInRow = Math.min(Math.floor(containerWidth / cardSize), itemsCount);
  const emptySpaceInRowPerCard = (containerWidth - cardSize * cardsInRow) / (cardsInRow - 1 || 1);
  const cardsAtLastRow = itemsCount % cardsInRow;
  const emptySpaceAtLastRow =
    (containerWidth - cardsAtLastRow * cardSize) / (cardsAtLastRow - 1 || 1);
  const marginForCard = Math.floor((containerWidth - cardSize * cardsInRow) / cardsInRow);

  if (
    emptySpaceInRowPerCard > cardSize / 2 ||
    (cardsAtLastRow > 1 && emptySpaceAtLastRow > cardSize)
  ) {
    return {
      isFullWrap: false,
      marginForCard: Math.max(marginForCard / 10, defaultMargin),
    };
  }

  return {
    isFullWrap: true,
    marginForCard,
  };
};

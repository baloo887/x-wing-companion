export function getLanguages(state) {
  let lang = [];
  if (state.metadata) {
    lang = state.metadata.supported_languages
      .map((item) => item.id);
  }
  return lang;
}

export function getStatistic(state) {
  return (id) => {
    let stat = {};
    if (state.metadata) {
      stat = state.metadata.card_stats
        .find((item) => item.id === id);
    }
    return stat;
  };
}

export function getDoubleCardData(state) {
  return (cardId) => state.doubleCards
    .find((card) => (card.sideA.id === cardId || card.sideB.id === cardId));
}

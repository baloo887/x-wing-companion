"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLanguages = getLanguages;
exports.getStatistic = getStatistic;
exports.getDoubleCardData = getDoubleCardData;

function getLanguages(state) {
  var lang = [];

  if (state.metadata) {
    lang = state.metadata.supported_languages.map(function (item) {
      return item.id;
    });
  }

  return lang;
}

function getStatistic(state) {
  return function (id) {
    var stat = {};

    if (state.metadata) {
      stat = state.metadata.card_stats.find(function (item) {
        return item.id === id;
      });
    }

    return stat;
  };
}

function getDoubleCardData(state) {
  return function (cardId) {
    return state.doubleCards.find(function (card) {
      return card.sideA.id === cardId || card.sideB.id === cardId;
    });
  };
}
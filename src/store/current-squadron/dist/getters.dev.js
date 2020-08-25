"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSquadron = getSquadron;
exports.getUpgrades = getUpgrades;
exports.getConfigurations = getConfigurations;
var CONFIGURATION_ID = 18;

function getSquadron(state) {
  return state.squadron;
}

function getUpgrades(state) {
  return function (i) {
    return state.squadron.deck[i].slots.filter(function (item) {
      return !item.upgrade_types.includes(CONFIGURATION_ID);
    });
  };
}

function getConfigurations(state) {
  return function (i) {
    return state.squadron.deck[i].slots.filter(function (item) {
      return item.upgrade_types.includes(CONFIGURATION_ID);
    });
  };
}